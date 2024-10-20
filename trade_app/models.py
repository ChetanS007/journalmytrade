from django.db import models

# Create your models here.
from datetime import datetime
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from Trade_Audit_Daily.config import COUNTRY,CURRENCY, TRANSACTION_TYPE,FINANCIAL_YEAR,TRADE_SIDE

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None):
        """
        Creates and saves a superuser with the given email and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.is_admin     = True
        user.is_active    = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    username    = models.CharField(max_length=500, blank=True, null=True)
    first_name  = models.CharField(max_length=250, blank=True, null=True)
    last_name   = models.CharField(max_length=250, blank=True, null=True)
    phone       = models.CharField(max_length=100, blank=True, null=True,unique=True)
    country     = models.CharField(max_length=20, choices=COUNTRY,default='India')
    currency    = models.CharField(max_length=20, choices=CURRENCY,default='INR')
    financial_year = models.CharField(max_length=20, choices=FINANCIAL_YEAR,default='1')
    is_premium  = models.BooleanField(default=False)
    is_superadmin = models.BooleanField(default=False)
    profile_photo = models.ImageField(upload_to='photo/',max_length=255,null=True,blank=True)
    created     = models.DateTimeField(auto_now_add=True)
    is_active       = models.BooleanField(default=True, help_text = 'Enable or disable user account')
    deletion_date = models.DateTimeField(null=True, blank=True)
    is_staff = models.BooleanField(
        default=False,
        help_text=("Designates whether the user can log into this admin site."),
    )
    is_admin        = models.BooleanField(default=False)

    confirm_password = models.CharField(max_length=255)

    objects         = UserManager()

    USERNAME_FIELD = 'email'

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        return self.is_admin
    
    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
	    # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
	    # Simplest possible answer: Yes, always
        return True

    def __str__(self):
        return f'{self.email}'




class BrokerageAccount(models.Model):

    user =  models.ForeignKey(User, related_name='user' , on_delete=models.CASCADE)
    account_name = models.CharField(max_length=500)
    balance = models.IntegerField()
    total_trade = models.IntegerField()
    win = models.IntegerField()
    loss = models.IntegerField()
    profit_and_loss_amount = models.IntegerField()
    profit_and_loss_percentage = models.IntegerField()
    broker_tax = models.IntegerField()
    account_creation_date     = models.DateTimeField()
   
   


    def __str__(self):
        return f'{self.account_name}'


class Transaction(models.Model):

    account = models.ForeignKey(BrokerageAccount, related_name='account' , on_delete=models.CASCADE)
    transaction_type     = models.CharField(max_length=20, choices=TRANSACTION_TYPE)
    amount = models.IntegerField()
    date     = models.DateTimeField()

    


class AddTrade(models.Model):

    account = models.ForeignKey(BrokerageAccount, related_name='trade_in_account' , on_delete=models.CASCADE)
    symbol = models.CharField(max_length=255)
    segment = models.CharField(max_length=255)
    qty    = models.IntegerField()
    trade_type = models.CharField(max_length=255)
    teadeside = models.CharField(max_length=20, choices=TRADE_SIDE)
    entry_price = models.IntegerField(null=True,blank=True,default=0)
    entry_date = models.DateTimeField(null=True,blank=True)
    exit_price = models.IntegerField(null=True,blank=True,default=0)
    exit_date =  models.DateTimeField(null=True,blank=True)
    stop_loss = models.IntegerField(blank=True, null=True,default=0)
    take_profit = models.IntegerField(blank=True, null=True)
    brokrage_tax = models.IntegerField(null=True,blank=True,default=0)
    profit_n_loss = models.IntegerField(null=True,blank=True,default=0)
    chart_img = models.ImageField(upload_to='photo',max_length=255,null=True,blank=True)
    trade_notes = models.TextField()
    gross_profit_loss = models.IntegerField(blank=True, null=True)
    net_profit_loss = models.IntegerField(blank=True, null=True)
    return_percentage = models.IntegerField(blank=True, null=True)
    date     = models.DateTimeField()

    def __str__(self):
        return f'{self.account}-{self.symbol}'


class TradeLabel(models.Model):

    trade = models.ForeignKey(AddTrade, related_name='trade' , on_delete=models.CASCADE)
    label_name = models.CharField(max_length=255)
    notes = models.TextField()

    def __str__(self):
        return f'{self.label_name}'









    
