import os
import secrets

from django.contrib.auth.models import User
from django.db.models import (
    Model, OneToOneField, CASCADE,
    CharField,
    IntegerField, ImageField
)


def avatar_upload_to(instance, filename):
    name, ext = os.path.splitext(filename.lower())
    return f'avatars/{instance.user.username}/{secrets.token_urlsafe(16)}{ext}'


class Profile(Model):
    user = OneToOneField(User, on_delete=CASCADE, primary_key=True)
    job_position = CharField('Должность', max_length=200, blank=True)
    avatar = ImageField('Аватар', max_length=256, blank=True, null=True, upload_to=avatar_upload_to)
    supervisor_id = IntegerField('Id начальника', default=0)

    def __str__(self):
        return str(self.user)

    class Meta:
        verbose_name = 'Профиль'
        verbose_name_plural = 'Профили'
