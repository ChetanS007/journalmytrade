from django.shortcuts import render

# Create your views here.
from curses.ascii import US
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate,logout
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions
# from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from django.contrib.auth.hashers import make_password
from .models import *
# from .config_auth import get_tokens_for_user
# from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import *
import json

# Create your views here.


class RegisterUser(APIView):

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

                    return Response(serializer.data, status=status.HTTP_200_OK)

                all_user = User.objects.all()

                serializer = RegisterSerializer(all_user,many=True)

                return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:

            return Response("Bad Request", status=status.HTTP_400_BAD_REQUEST)


    def put(self, request,pk,*args,**kwargs):

            try:
                user_instance = self.get_object(pk)
                if user_instance is None:
                            return Response({"detail": "Resource not found."},
                                            status=status.HTTP_404_NOT_FOUND)

                serializer = RegisterSerializer(user_instance,data=request.data)

                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
            
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                 return Response({"Message":"Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request,pk,*args,**kwargs):

        try:
            user_instance = self.get_object(pk)

            if user_instance is None:
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

            user_instance.delete()
            return Response({"message": "Resource deleted successfully."},
                        status=status.HTTP_204_NO_CONTENT)

        except Exception as e:
            return Response({"Message":"Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)





    
    try:

       
        serializer_class = RegisterSerializer 
        def post(self,request,*args,**kwargs,):

            try:
                serializer_obj = RegisterSerializer(data=request.data)
                
                if serializer_obj.is_valid():
                    ''' here serializer validate our request data create and store into db'''
                    serializer_obj.save()
                    hash_pass = make_password(request.data['password'])
                    user = User.objects.all().filter(email=request.data['email']).update(username=request.data['email'],password=hash_pass)
                   
                    
                    return Response({"Message":"User Register Successfully" ,"user":serializer_obj.data,},status=status.HTTP_200_OK)

                return Response( {"Message":serializer_obj.errors} ,status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                print(e)
                return Response( {"Message":"Bad Request"} ,status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
         print(e)
         Response( {"Message":"Internal Server Error"} ,status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class UserLoginView(APIView):

    try :
               
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
                        
                        return Response( {"Message":"Login Successfully", },status=status.HTTP_200_OK)

                return Response( {"Message": serializer.errors } ,status=status.HTTP_400_BAD_REQUEST)

            except Exception as e:
                 print(e)
                 Response( {"Message:Something Went Wrong"} ,status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    except Exception as e:
        print(e)
        Response( {"Message:Something Went Wrong"} ,status=status.HTTP_500_INTERNAL_SERVER_ERROR)





class UserLogoutView(APIView):

    
    def get(self, request, format=None):
        
        logout(request)

        return Response( {"Message:Logout Successfull"} ,status=status.HTTP_200_OK)




    
class AccountsView(APIView):


    try:

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

                    return Response(serializer.data, status=status.HTTP_200_OK)

                all_account = BrokerageAccount.objects.all()

                serializer = AccountSerializer(all_account,many=True)

                return Response(serializer.data, status=status.HTTP_200_OK)
            except Exception as e:

                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        
        def put(self, request,pk,*args,**kwargs):

            account_instance = self.get_object(pk)

            if account_instance is None:
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

            serializer = AccountSerializer(account_instance,data=request.data)

            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
        
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        def delete(self, request,pk,*args,**kwargs):

            account_instance = self.get_object(pk)

            if account_instance is None:
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

            account_instance.delete()
            return Response({"message": "Resource deleted successfully."},
                        status=status.HTTP_204_NO_CONTENT)


    except Exception as e:

             Response ({"Msg":"Something went wrong"},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        


    try:
        def post(self, request,*args,**kwargs):

            serializer_class = AccountSerializer

            serializer_obj = serializer_class(data=request.data)

            try:
                if serializer_obj.is_valid():
                
                    serializer_obj.save()

                    return Response({"Msg":"Account Created Successfull"},status=status.HTTP_201_CREATED)

                return Response({"Msg":serializer_obj.errors},status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:

                Response ({"Msg":serializer_obj.errors},status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:

        Response ({"Msg":"Something went wrong"},status=status.HTTP_500_INTERNAL_SERVER_ERROR)






class TransactionView(APIView):

    try:
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
    except Exception as e:
        Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)



    try:
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
                
                return  Response({"Message":serializer.errors},status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return  Response({"Message":serializer.errors},status=status.HTTP_400_BAD_REQUEST)
    
    except Exception as e:
        Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

   

       



    


class TradeView(APIView):


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
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

                    serializer = TradeSerializer(trade_instance)

                    return Response(serializer.data, status=status.HTTP_200_OK)

                all_trade = AddTrade.objects.all()

                serializer = TradeSerializer(all_trade,many=True)

                return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:

            return Response("Bad Request", status=status.HTTP_400_BAD_REQUEST)


    def put(self, request,pk,*args,**kwargs):

            try:
                trade_instance = self.get_object(pk)
                if trade_instance is None:
                            return Response({"detail": "Resource not found."},
                                            status=status.HTTP_404_NOT_FOUND)

                serializer = TradeSerializer(trade_instance,data=request.data)

                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
            
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                 return Response({"Message":"Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request,pk,*args,**kwargs):

        try:
            trade_instance = self.get_object(pk)

            if trade_instance is None:
                        return Response({"detail": "Resource not found."},
                                        status=status.HTTP_404_NOT_FOUND)

            trade_instance.delete()
            return Response({"message": "Resource deleted successfully."},
                        status=status.HTTP_204_NO_CONTENT)

        except Exception as e:
            return Response({"Message":"Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)





    def post(self,request,*args,**kwargs):
        
        serializer_class = TradeSerializer

        serializer = serializer_class(data=request.data)

        try:
            if serializer.is_valid():
                
                serializer.save()

                return  Response({"Message":"Trade Add Successfully","data":serializer.data},status=status.HTTP_201_CREATED)
            
            return  Response({"Message":serializer.errors},status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return  Response({"Message":serializer.errors},status=status.HTTP_400_BAD_REQUEST)




class TradeLabelView(APIView):

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

                    return Response(serializer.data, status=status.HTTP_200_OK)

                all_trade_label = TradeLabel.objects.all()

                serializer = TradeLabelSerializer(all_trade_label,many=True)

                return Response(serializer.data, status=status.HTTP_200_OK)
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
                    return Response(serializer.data, status=status.HTTP_200_OK)
            
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                 return Response({"Message":"Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


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
            return Response({"Message":"Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



    def post(self,request,*args,**kwargs):
        
        serializer_class = TradeLabelSerializer

        serializer = serializer_class(data=request.data)

        try:
            if serializer.is_valid():
                
                serializer.save()

                return  Response({"Message":"TradeLabel Add Successfully","data":serializer.data},status=status.HTTP_201_CREATED)
            
            return  Response({"Message":serializer.errors},status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return  Response({"Message":serializer.errors},status=status.HTTP_400_BAD_REQUEST)

