from django.urls import include, path

from .views import users
from .views import dialogues
from .views import messages


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('get_user/<str:id>/', users.UserView.as_view(), name='users'),
    path(
        'get_dialogues_recipient/<str:id>/',
        dialogues.DialogueRecipientView.as_view(),
        name='dialogues_recipient'
    ),
    path(
        'get_dialogs/<str:id>/',
        dialogues.DialogueSenderView.as_view(),
        name='dialogues_sender'
    ),
    path(
        'get_messages_recipient/<str:id>/',
        messages.MessageRecipientView.as_view(),
        name='messages_recipient'
    ),
    path(
        'get_messages/<str:id>/',
        messages.MessageSenderView.as_view(),
        name='messages_sender'
    ),
    path(
        'get_messages_recipient_dialogue/<str:id>/<str:dialogue_id>',
        messages.MessageRecipientDialogueView.as_view(),
        name='messages_recipient_dialogue'
    ),
    path('send_message/<str:pk>/', messages.CreateMessageView.as_view()),
]
