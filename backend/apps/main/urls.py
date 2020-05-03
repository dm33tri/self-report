from django.urls import include, path
from rest_framework import routers

from .views import users


# urlpatterns = [
#     path('users/<str:uuid>', users.ProblemCommentsView.as_view(), name='problem_comments'),
# ]

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    # path('', include(router.urls)),
    path('users/', users.UserViewSet.as_view({'get' : 'list'}), name='users'),

]
