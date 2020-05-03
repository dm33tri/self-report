from django.urls import include, path

from .views import users


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('user/<str:id>/', users.UserView.as_view(), name='users'),
]
