from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.generics import ListAPIView, get_object_or_404, GenericAPIView
from rest_framework import permissions
from apps.main.serializers import (
    FullUserSerializer,
    ProfileSerializer
)
from apps.main.models.users import Profile


class UserView(ListAPIView):

    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):

        user = Profile.objects.filter(user_id=self.kwargs['id'])
        return user
