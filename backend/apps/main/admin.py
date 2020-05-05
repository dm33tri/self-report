from django.contrib import admin

from .models import Profile
from .models import Dialog
from .models import Message
from .models import Task


admin.site.register(Profile)
admin.site.register(Dialog)
admin.site.register(Message)
admin.site.register(Task)
