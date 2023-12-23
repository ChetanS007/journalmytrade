from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from .views import *
urlpatterns = [

    path('api/register/',RegisterUser.as_view(),name='register'),
    path('api/user/',RegisterUser.as_view(),name='user'),
    path('api/user/<int:pk>/',RegisterUser.as_view(),name='user'),
    path('api/reactivate-account/', UserReactivate.as_view(), name='reactivate-account'),


    path('api/login/',UserLoginView.as_view(),name='login'),
    path('api/logout/', UserLogoutView.as_view(), name='logout'),
    
    path('api/account/<int:pk>/', AccountsView.as_view(), name='account'),
    path('api/account/', AccountsView.as_view(), name='account'),
    
    path('api/transaction/', TransactionView.as_view(), name='transaction'),
    path('api/transaction/<int:pk>/', TransactionView.as_view(), name='transaction'),


    path('api/trade/',TradeView.as_view(),name='trade'),
    path('api/trade/<int:pk>/',TradeView.as_view(),name='trade'),

    path('api/label/',TradeLabelView.as_view(),name='label'),
    path('api/label/<int:pk>/',TradeLabelView.as_view(),name='label')


   
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)