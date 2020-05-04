import datetime

from rest_framework.generics import ListAPIView, get_object_or_404, GenericAPIView
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status

from apps.main.serializers import (
    TaskSerializer
)

from apps.main.models.tasks import Task


class TaskView(ListAPIView):

    serializer_class = TaskSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        tasks = Task.objects.filter(id=self.kwargs['id'])
        return tasks


class TaskByProfileView(ListAPIView):

    serializer_class = TaskSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        print('aaaaaaaaaaaaaaaaa')
        tasks = Task.objects.filter(executor_id=self.kwargs['id'])
        return tasks
