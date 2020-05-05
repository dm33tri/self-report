from django.db.models import Q

from rest_framework.generics import ListAPIView, get_object_or_404, GenericAPIView
from rest_framework import permissions
from apps.main.serializers import (
    DialogSerializer
)

from apps.main.models.dialogs import Dialog


class DialogView(ListAPIView):

    serializer_class = DialogSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        query = Q(recipient_id=self.request.GET['id']) | Q(sender_id=self.request.GET['id'])
        return Dialog.objects.filter(query).order_by('id')
