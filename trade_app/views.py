from django.shortcuts import render

# Create your views here.
from curses.ascii import US
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate,logout,login
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from django.contrib.auth.hashers import make_password
from .models import *
# from .config_auth import get_tokens_for_user
# from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import *
import json
from .email import send_email_to_user
from datetime import datetime, time,timezone
from django.views import View
from Trade_Audit_Daily.utils import *
from rest_framework_simplejwt.tokens import RefreshToken
import logging
# Create your views here.

logger = logging.getLogger(__name__)

class RegisterUser(APIView):

    serializer_class = RegisterSerializer 

    def get_object(self, pk):

            try:
                return User.objects.get(pk=pk)
            except User.DoesNotExist:
                return None


    def get(self, request,pk=None,*args,**kwargs):

        try:
                if pk is not None:

                    user_instance = self.get_object(pk)
                    
                    if user_instance is None:
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

                    serializer = RegisterSerializer(user_instance)

                    return Response({"Message":serializer.data}, status=status.HTTP_200_OK)

                all_user = User.objects.all()

                serializer = RegisterSerializer(all_user,many=True)

                return Response({"Message":serializer.data}, status=status.HTTP_200_OK)
        except Exception as e:

            return Response({"Error":"Bad Request"}, status=status.HTTP_400_BAD_REQUEST)


    def put(self, request,pk,*args,**kwargs):

            try:
                user_instance = self.get_object(pk)
                if user_instance is None:
                            return Response({"detail": "Resource not found."},
                                            status=status.HTTP_404_NOT_FOUND)

                serializer = RegisterSerializer(user_instance,data=request.data)

                if serializer.is_valid():
                    serializer.save()
                    return Response({"Message":serializer.data}, status=status.HTTP_200_OK)
            
                return Response({"Error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                 return Response({"Error":"Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request,pk,*args,**kwargs):

        try:
            user_instance = self.get_object(pk)

            if user_instance is None:
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

            print("user_instance",user_instance.email)
            send_email_to_user(request,user_instance.email)
            user_instance.is_active = False
            user_instance.deletion_date = datetime.now()
            user_instance.save()
            # user_instance.delete()
            return Response({"message": "User deleted Successfully."},
                        status=status.HTTP_204_NO_CONTENT)

        except Exception as e:
            return Response({"Error":"Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    
    def post(self,request,*args,**kwargs,):

        try:
            serializer_obj = RegisterSerializer(data=request.data)
            
            if serializer_obj.is_valid():
                ''' here serializer validate our request data create and store into db'''
                serializer_obj.save()
                send_email_to_user(request,serializer_obj.data['email'])
                hash_pass = make_password(request.data['password'])
                hash_confirm_pass = make_password(request.data['confirm_password'])
                user = User.objects.all().filter(email=request.data['email']).update(username=request.data['email'],password=hash_pass,confirm_password=hash_confirm_pass)
                
                
                return Response({"Message":"User Register Successfully" ,"user":serializer_obj.data,},status=status.HTTP_200_OK)

            return Response( {"Error":serializer_obj.errors} ,status=status.HTTP_400_BAD_REQUEST)
        

        except Exception as e:
            print(e)
            Response( {"Error":"Internal Server Error"} ,status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UserReactivate(APIView):

    def post(self,request,*args,**kwargs):
       
        # Check if the account was deleted within the last 30 days
        try:
            email = request.data['email']
            user_profile = User.objects.get(email=email)
            
            if user_profile.deletion_date:
                
                days_since_deletion = (datetime.now(timezone.utc) - user_profile.deletion_date).days
                
                if days_since_deletion <= 30:
                    user_profile.is_active = True
                    user_profile.deletion_date = None
                    user_profile.save()
                    return Response({'message': 'Account reactivated successfully'})
                else:
                    return Response({'error': 'Account cannot be reactivated'})

               
        except Exception as e:
            return Response({'message': 'Internal Server Error'})

        
        return Response({'error': 'Account cannot be reactivated'})



class UserLoginView(APIView):
     
        serializer_class = LoginSerializer
        def post(self,request,*args,**kwargs):
            
            try:

                serializer = LoginSerializer(data=request.data)
               
                if serializer.is_valid():
                    
                    username = serializer.data['username']
                    password = serializer.data['password']
                    
                    user = authenticate(request,username=username,password=password)
                    

                    # user_for_token= User.objects.filter(email=user)
                   
                    if user is None:
                        return Response( {"Message: Invalid Username And Password"} ,status=status.HTTP_401_UNAUTHORIZED)
                    
                    else:
                        
                        login(request, user)
                        refresh = RefreshToken.for_user(user)
                        access_token = str(refresh.access_token)
                        refresh_token = str(refresh)

                        return Response( {"Message":"Login Successfully", 'access_token': access_token,
                                          'refresh_token': refresh_token,},status=status.HTTP_200_OK)

                return Response( {"Message": serializer.errors } ,status=status.HTTP_400_BAD_REQUEST)

            except Exception as e:
                 print(e)
                 Response( {"Message:Something Went Wrong"} ,status=status.HTTP_500_INTERNAL_SERVER_ERROR)

 

class UserLogoutView(APIView):

    
    def get(self, request, format=None):
        
        logout(request)

        return Response( {"Message:Logout Successfull"} ,status=status.HTTP_200_OK)




    
class AccountsView(APIView):
    
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


    def get_object(self, pk):
        try:
            return BrokerageAccount.objects.get(pk=pk)
        except BrokerageAccount.DoesNotExist:
            return None

    def get(self, request,pk=None,*args,**kwargs):

        try:
            if pk is not None:

                account_instance = self.get_object(pk)
                
                if account_instance is None:
                    return Response({"detail": "Resource not found."},
                                    status=status.HTTP_404_NOT_FOUND)

                serializer = AccountSerializer(account_instance)

                return Response({"Message":serializer.data}, status=status.HTTP_200_OK)

            all_account = BrokerageAccount.objects.all()

            serializer = AccountSerializer(all_account,many=True)

            return Response({"Message":serializer.data}, status=status.HTTP_200_OK)
        except Exception as e:

            return Response({"Error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    
    def put(self, request,pk,*args,**kwargs):

        account_instance = self.get_object(pk)

        if account_instance is None:
                    return Response({"detail": "Resource not found."},
                                    status=status.HTTP_404_NOT_FOUND)

        serializer = AccountSerializer(account_instance,data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({"Message":serializer.data}, status=status.HTTP_200_OK)
    
        return Response({"Error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request,pk,*args,**kwargs):

        account_instance = self.get_object(pk)

        if account_instance is None:
                    return Response({"detail": "Resource not found."},
                                    status=status.HTTP_404_NOT_FOUND)

        account_instance.delete()
        return Response({"Message": "Resource deleted successfully."},
                    status=status.HTTP_204_NO_CONTENT)


    def post(self, request,*args,**kwargs):

        serializer_class = AccountSerializer

        serializer_obj = serializer_class(data=request.data)

        try:
            if serializer_obj.is_valid():
            
                serializer_obj.save()

                return Response({"Message":"Account Created Successfull"},status=status.HTTP_201_CREATED)

            return Response({"Message":serializer_obj.errors},status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:

            Response ({"Error":serializer_obj.errors},status=status.HTTP_400_BAD_REQUEST)

   






class TransactionView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    
    def get_object(self, pk):

        try:
            return Transaction.objects.get(pk=pk)
        except Transaction.DoesNotExist:
            return None


    def get(self, request,pk=None,*args,**kwargs):

        try:
                if pk is not None:

                    transaction_instance = self.get_object(pk)
                    
                    if transaction_instance is None:
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

                    serializer = TransactionSerializer(transaction_instance)

                    return Response(serializer.data, status=status.HTTP_200_OK)

                all_transaction = Transaction.objects.all()

                serializer = TransactionSerializer(all_transaction,many=True)

                return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:

            return Response("Bad Request", status=status.HTTP_400_BAD_REQUEST)      


    def put(self, request,pk,*args,**kwargs):

            transaction_instance = self.get_object(pk)

            if transaction_instance is None:
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

            serializer = TransactionSerializer(transaction_instance,data=request.data)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
        
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request,pk,*args,**kwargs):

            transaction_instance = self.get_object(pk)

            if transaction_instance is None:
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

            transaction_instance.delete()
            return Response({"message": "Resource deleted successfully."},
                        status=status.HTTP_204_NO_CONTENT)


    def post(self, request,*args,**kwargs):

        serializer_class = TransactionSerializer

        serializer = serializer_class(data=request.data)

        try:
            if serializer.is_valid():

                serializer.save()

                try:
                    account = serializer.data['account']
                    amount =  serializer.data['amount']
                    Br_account=BrokerageAccount.objects.get(id=account)

                    if serializer.data['transaction_type'] == 'Deposit':
                        
                            Br_account.balance=Br_account.balance+amount
                            Br_account.save()

                    else:
                            Br_account.balance=Br_account.balance-amount
                            Br_account.save()

                except Br_account.DoesNotExist:

                    return  Response({"Message":"Account Not Found"},status=status.HTTP_404_NOT_FOUND)


                return  Response({"Message":"Transaction Done Successfully","data":serializer.data},status=status.HTTP_200_OK)
            
            return  Response({"Error":serializer.errors},status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return  Response({"Error":serializer.errors},status=status.HTTP_400_BAD_REQUEST)
    
    


class TradeView(APIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):

            try:
                return AddTrade.objects.get(pk=pk)
            except AddTrade.DoesNotExist:
                return None


    def get(self, request,pk=None,*args,**kwargs):

        try:
                if pk is not None:

                    trade_instance = self.get_object(pk)
                    
                    if trade_instance is None:
                        logger.warning(f"Trade with ID {pk} not found.")
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

                    serializer = TradeSerializer(trade_instance)

                    return Response({"Message":serializer.data}, status=status.HTTP_200_OK)

                all_trade = AddTrade.objects.all()

                serializer = TradeSerializer(all_trade,many=True)

                global_trade =calculate_global_trade(request,*args,**kwargs)
                
                response_trade = [serializer.data,global_trade]
                
                return Response({"Message":response_trade}, status=status.HTTP_200_OK)
        except Exception as e:
            logger.exception("An error occurred in the 'get' method.")
            return Response("Bad Request", status=status.HTTP_400_BAD_REQUEST)


    def put(self, request,pk,*args,**kwargs):

            try:
                trade_instance = self.get_object(pk)
                if trade_instance is None:
                            logger.warning(f"Trade with ID {pk} not found.")
                            return Response({"detail": "Resource not found."},
                                            status=status.HTTP_404_NOT_FOUND)

                serializer = TradeSerializer(trade_instance,data=request.data)

                if serializer.is_valid():
                    serializer.save()
                    return Response({"Message":serializer.data}, status=status.HTTP_200_OK)

                logger.warning(f"Invalid data for updating trade with ID {pk}.")
                return Response({"Error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                 logger.exception("An error occurred in the 'put' method.")
                 return Response({"Error":"Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request,pk,*args,**kwargs):

        try:
            trade_instance = self.get_object(pk)

            if trade_instance is None:
                        logger.warning(f"Trade with ID {pk} not found.")
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

            trade_instance.delete()
            return Response({"message": "Resource deleted successfully."},
                        status=status.HTTP_204_NO_CONTENT)

        except Exception as e:
            logger.exception("An error occurred in the 'delete' method.")
            return Response({"Error":"Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)





    def post(self,request,*args,**kwargs):
        
        serializer_class = TradeSerializer

        serializer = serializer_class(data=request.data)

        try:
            if serializer.is_valid():
                
                serializer.save()

                gross_net_percentage_data = {'entry_price':serializer.data['entry_price'],
                                             'exit_price':serializer.data['exit_price'],
                                             'brokrage_tax':serializer.data['brokrage_tax'],
                                             'tradeside':serializer.data['teadeside'],
                                             'qty':serializer.data['qty']}

                calculated_trade =calculate_single_trade(request,gross_net_percentage_data)
                logger.info(f"Calculated trade: {calculated_trade}")
                trade_id = int(serializer.data['id'])
                AddTrade.objects.filter(id=trade_id).update(gross_profit_loss=calculated_trade['gross_profit_n_loss'],
                                                                     net_profit_loss=calculated_trade['net_profit_and_loss'],
                                                                     return_percentage=calculated_trade['return_percentage'])

                return  Response({"Message":"Trade Add Successfully","data":serializer.data},status=status.HTTP_201_CREATED)
            
            logger.warning(f"Invalid data for creating a new trade: {serializer.errors}")
            return  Response({"Error":serializer.errors},status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            logger.exception("An error occurred in the 'post' method.")
            return  Response({"Error":serializer.errors},status=status.HTTP_400_BAD_REQUEST)




class BulkTradeView(APIView):
    pass




class TradeLabelView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get_object(self, pk):

            try:
                return TradeLabel.objects.get(pk=pk)
            except TradeLabel.DoesNotExist:
                return None


    def get(self, request,pk=None,*args,**kwargs):

        try:
                if pk is not None:

                    label_instance = self.get_object(pk)
                    
                    if label_instance is None:
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

                    serializer = TradeLabelSerializer(label_instance)

                    return Response({"Message":serializer.data}, status=status.HTTP_200_OK)

                all_trade_label = TradeLabel.objects.all()

                serializer = TradeLabelSerializer(all_trade_label,many=True)

                return Response({"Message":serializer.data}, status=status.HTTP_200_OK)
        except Exception as e:

            return Response("Bad Request", status=status.HTTP_400_BAD_REQUEST)

    def put(self, request,pk,*args,**kwargs):

            try:
                label_instance = self.get_object(pk)
                if label_instance is None:
                            return Response({"detail": "Resource not found."},
                                            status=status.HTTP_404_NOT_FOUND)

                serializer = TradeLabelSerializer(label_instance,data=request.data)

                if serializer.is_valid():
                    serializer.save()
                    return Response({"Message":serializer.data}, status=status.HTTP_200_OK)
            
                return Response({"Error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                 return Response({"Error":"Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def delete(self, request,pk,*args,**kwargs):

        try:
            label_instance = self.get_object(pk)

            if label_instance is None:
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

            label_instance.delete()
            return Response({"message": "Resource deleted successfully."},
                        status=status.HTTP_204_NO_CONTENT)

        except Exception as e:
            return Response({"Error":"Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



    def post(self,request,*args,**kwargs):
        
        serializer_class = TradeLabelSerializer

        serializer = serializer_class(data=request.data)

        try:
            if serializer.is_valid():
                
                serializer.save()

                return  Response({"Message":"TradeLabel Add Successfully","data":serializer.data},status=status.HTTP_201_CREATED)
            
            return  Response({"Error":serializer.errors},status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return  Response({"Error":serializer.errors},status=status.HTTP_400_BAD_REQUEST)

