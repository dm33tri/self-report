import re
import datetime
from django.contrib.auth.models import User

def parse_message(text):
    if re.match('Привет', text):
        return 'Привет'

def bot_answer(Message, **kwargs):
    message = kwargs['instance']
    if message.recipient.user.username == 'Bot':
        answer = parse_message(message.text)
        if answer is not None:
            Message.objects.create(
                text = answer,
                date = datetime.datetime.now(),
                recipient = message.sender,
                sender = message.recipient,
                dialog = message.dialog,
                media = []
            )