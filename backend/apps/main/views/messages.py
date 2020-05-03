from rest_framework.generics import ListAPIView, get_object_or_404, GenericAPIView
from rest_framework import permissions
from apps.main.serializers import (
    MessageSerializer
)

from apps.main.models.messages import Message


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
