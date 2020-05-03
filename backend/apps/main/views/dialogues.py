from rest_framework.generics import ListAPIView, get_object_or_404, GenericAPIView
from rest_framework import permissions
from apps.main.serializers import (
    DialogueSerializer
)

from apps.main.models.dialogues import Dialogue


class DialogueView(ListAPIView):

    serializer_class = DialogueSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        print('!!!!!')
        print(Dialogue.objects.all()[0].__dict__)
        user = Dialogue.objects.filter(user_id=self.kwargs['id'])
        return user


class DialogueRecipientView(ListAPIView):

    serializer_class = DialogueSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        dialogues = Dialogue.objects.filter(recipient_id=self.kwargs['id'])
        return dialogues


class DialogueSenderView(ListAPIView):

    serializer_class = DialogueSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        dialogues = Dialogue.objects.filter(sender_id=self.kwargs['id'])
        return dialogues
