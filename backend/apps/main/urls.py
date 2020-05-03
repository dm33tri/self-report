from django.urls import include, path

from .views import users
from .views import dialogues


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
        'get_dialogues_sender/<str:id>/',
        dialogues.DialogueSenderView.as_view(),
        name='dialogues_sender'
    ),
]
