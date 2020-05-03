# from rest_framework.exceptions import ValidationError, PermissionDenied
# from rest_framework.generics import ListAPIView, get_object_or_404, GenericAPIView
#
# # from main.models import Problem, ProblemComment, ProblemRef, File
# from main.serializers import ProblemCommentSerializer
#
#
# class ProblemCommentsView(ListAPIView):
#
#     serializer_class = ProblemCommentSerializer
#
#     def get_queryset(self):
#         problem = get_object_or_404(ProblemRef, uuid=self.kwargs['uuid'])
#         if not problem.can_read(self.request.user):
#             if not problem.has_restricted_access(self.request):
#                 raise PermissionDenied
#         return problem.problem.problemcomment_set.order_by('-id')
#

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from apps.main.serializers import UserSerializer, GroupSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]