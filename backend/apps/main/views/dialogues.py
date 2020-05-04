from rest_framework.generics import ListAPIView, get_object_or_404, GenericAPIView
from rest_framework import permissions
from apps.main.serializers import (
    DialogueSerializer
)

from apps.main.models.dialogues import Dialogue


class DialogueRecipientView(ListAPIView):

    serializer_class = DialogueSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        dialogues = Dialogue.objects.filter(recipient_id=self.request.GET.get('id', None))
        return dialogues


class DialogueSenderView(ListAPIView):

    serializer_class = DialogueSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        dialogues = Dialogue.objects.filter(sender_id=self.request.GET.get('id', None))
        return dialogues
