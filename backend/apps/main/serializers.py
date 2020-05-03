from django.contrib.auth.models import User, Group
from rest_framework import serializers
from rest_framework.fields import CharField, SerializerMethodField, IntegerField, ImageField

from sorl.thumbnail import get_thumbnail
from django.conf import settings


from apps.main.models.users import Profile


class FullUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name']


class ProfileSerializer(serializers.ModelSerializer):
    user = FullUserSerializer(read_only=True)
    job_position = CharField()
    supervisor_id = IntegerField()
    avatar = ImageField()

    class Meta:
        model = Profile
        fields = [
            'user',
            'job_position',
            'avatar',
            'supervisor_id'
        ]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'groups']


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name']
