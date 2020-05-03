from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.fields import (
    CharField, SerializerMethodField,
    IntegerField, ImageField, DateTimeField
)


from apps.main.models.users import Profile
from apps.main.models.dialogues import Dialogue


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


class DialogueSerializer(serializers.ModelSerializer):
    name = CharField()
    description = CharField()

    recipient = ProfileSerializer()
    sender = ProfileSerializer()

    class Meta:
        model = Dialogue
        fields = [
            'name',
            'description',
            'recipient',
            'sender'
        ]
