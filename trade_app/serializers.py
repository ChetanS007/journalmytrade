from rest_framework import serializers
from .models import *
# from rest_framework_simplejwt.tokens import RefreshToken,TokenError

class RegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True, required=True)

    # profile_photo = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = ['id','email','password','confirm_password','first_name','last_name','phone','country','currency','financial_year','profile_photo']

    def validate_profile_photo(self, value):

        return value  
    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match.")
        return data
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
        # fields = ['account','symbol','segment','qty','trade_type','teadeside','brokrage_tax','profit_n_loss',
        #           'trade_notes','gross_profit_loss','net_profit_loss','return_percentage','date']
        fields = '__all__'


class TradeLabelSerializer(serializers.ModelSerializer):

    class Meta:
        model = TradeLabel
        fields = '__all__'



        