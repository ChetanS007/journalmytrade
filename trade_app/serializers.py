from rest_framework import serializers
from .models import *
# from rest_framework_simplejwt.tokens import RefreshToken,TokenError

class RegisterSerializer(serializers.ModelSerializer):

    # profile_photo = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = ['email','password','first_name','last_name','phone','country','currency','financial_year','profile_photo']

    def validate_profile_photo(self, value):
        return value  


class LoginSerializer(serializers.ModelSerializer):


    class Meta:
        model = User
        fields = ['username','password',]



class AccountSerializer(serializers.ModelSerializer):


    class Meta:
        model = BrokerageAccount
        # exclude = ['account_creation_date']
        fields = '__all__'


class TransactionSerializer(serializers.ModelSerializer):


    class Meta:
        model = Transaction
        fields = '__all__'


class TradeSerializer(serializers.ModelSerializer):


    class Meta:
        model = AddTrade
        fields = '__all__'



class TradeLabelSerializer(serializers.ModelSerializer):

    class Meta:
        model = TradeLabel
        fields = '__all__'



        