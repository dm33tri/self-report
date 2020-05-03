import datetime

from rest_framework.generics import ListAPIView, get_object_or_404, GenericAPIView
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status

from apps.main.serializers import (
    MessageSerializer, DialogueSerializer
)

from apps.main.models.messages import Message
from apps.main.models.dialogues import Dialogue



class MessageRecipientView(ListAPIView):

    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        messages = Message.objects.filter(recipient_id=self.kwargs['id'])
        return messages


class MessageSenderView(ListAPIView):

    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        messages = Message.objects.filter(sender_id=self.kwargs['id'])
        return messages


class MessageRecipientDialogueView(ListAPIView):

    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        messages = Message.objects.filter(recipient_id=self.kwargs['id']).filter(
           dialogue_id=self.kwargs['dialogue_id']
        )
        return messages


class CreateMessageView(GenericAPIView):
    queryset = Dialogue.objects.all()
    permission_classes = [permissions.AllowAny]

    def post(self, request, pk):
        data = request.data

        sender = data.get('sender', None)
        recipient = data.get('recipient', None)
        text = data.get('text', None)
        media = data.get('media', [])

        date = datetime.datetime.now()
        dialogue = self.get_object()
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
            dialogue=dialogue
        )
        return Response({})
