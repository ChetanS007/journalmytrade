from django.core.mail import send_mail
from datetime import datetime



def send_email_to_user(request,email):

    if request.method == 'DELETE':
        
        subject = 'This is a test email for user account deletion.'
        message = f'Your account is deleted, you can reactive within 30 days click here.http://127.0.0.1:8000/api/reactivate-account'
        recipient_list = [email]

        send_mail(subject, message, 'sender_email@example.com', recipient_list)

    elif request.method == 'POST':

        subject = 'This is a test email.'
        message = f'Welcome on TradeAudit'
        recipient_list = [email]

        send_mail(subject, message, 'sender_email@example.com', recipient_list)