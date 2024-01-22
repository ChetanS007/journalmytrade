from .base import *

from dotenv import load_dotenv
load_dotenv(".env.prod")
# Rest of your settings...


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

DEBUG = False

ALLOWED_HOSTS = ["api.journalmytrade.com","www.api.journalmytrade.com","103.191.208.227"]

DATABASES = {
    "default": {
        # "ENGINE": "django.db.backends.postgresql",
         "ENGINE": "django.db.backends.mysql",
        "NAME": config('DB_NAME'),
        "USER": config('DB_USER_NAME'),
        "PASSWORD": config('DB_PWD'),        
        "HOST": config('DB_HOST_NAME'),
        "PORT": config('DB_PORT'),
    }
}

CORS_ALLOWED_ORIGINS = [
    'https://api.journalmytrade.com',  # Replace with your React app's URL
]

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = config('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD')
EMAIL_USE_TLS = True
EMAIL_USE_SSL = False

