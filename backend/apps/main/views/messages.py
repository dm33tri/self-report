import datetime

from django.db.models import Q

from rest_framework.generics import ListAPIView, get_object_or_404, GenericAPIView
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status

from apps.main.serializers import (
    MessageSerializer, DialogSerializer
)

from apps.main.models.messages import Message
from apps.main.models.dialogs import Dialog
from django.contrib.auth.models import User

class MessageView(ListAPIView):
    serializer_class = MessageSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        all_messages = Q(sender_id=self.request.GET['id']) | Q(recipient_id=self.request.GET['id']) 
        dialog_messages = Q(dialog_id=self.request.GET['dialog_id']) if self.request.GET.get('dialog_id') else Q()

        return Message.objects.filter(all_messages & dialog_messages)


class CreateMessageView(GenericAPIView):
    queryset = Dialog.objects.all()
    permission_classes = [permissions.AllowAny]

    def post(self, request, pk):
        data = request.data

        sender = data.get('sender', None)
        recipient = data.get('recipient', None)
        text = data.get('text', None)
        media = data.get('media', [])

        date = datetime.datetime.now()
        dialog = self.get_object()
        sender = sender if sender is not None else \
            self.get_object().sender
        recipient = recipient if recipient is not None else \
            self.get_object().recipient

        Message.objects.create(
            text=text,
            media=media,
            date=date,
            recipient=recipient,
            sender=sender,
            dialog=dialog
        )
        return Response({})
