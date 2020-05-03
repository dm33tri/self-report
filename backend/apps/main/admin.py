from django.contrib import admin

from .models import Profile
from .models import Dialogue
from .models import Message

admin.site.register(Profile)
admin.site.register(Dialogue)
admin.site.register(Message)

