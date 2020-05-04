from django.urls import include, path

from .views import users
from .views import dialogs
from .views import messages
from .views import tasks


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('get_user/<str:id>', users.UserView.as_view(), name='users'),
    path(
        'get_dialogs',
        dialogs.DialogView.as_view(),
        name='dialogs_sender'
    ),
    path(
        'get_messages',
        messages.MessageView.as_view(),
        name='messages_recipient'
    ),
    path(
        'get_task/<str:id>',
        tasks.TaskView.as_view(),
        name='task'
    ),

    path(
        'get_tasks_by_user/<str:id>',
        tasks.TaskByProfileView.as_view(),
        name='task'
    ),

    path('send_message', messages.CreateMessageView.as_view(), { 'pk': 1 }),
]
