from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.fields import (
    CharField, SerializerMethodField,
    IntegerField, ImageField, DateTimeField
)


from apps.main.models.users import Profile
from apps.main.models.dialogues import Dialogue
from apps.main.models.messages import Message


class IdUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class IdProfileSerializer(serializers.ModelSerializer):
    user = IdUserSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = ['user']


class IdDialogueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dialogue
        fields = ['id']


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
            'id',
            'name',
            'description',
            'recipient',
            'sender'
        ]


class MessageSerializer(serializers.ModelSerializer):
    text = CharField()
    media = serializers.ListField(child=serializers.CharField())
    date = DateTimeField()

    recipient = IdProfileSerializer(read_only=True)
    sender = IdProfileSerializer(read_only=True)
    dialogue = IdDialogueSerializer(read_only=True)

    class Meta:
        model = Message
        fields = [
            'id',
            'text',
            'media',
            'date',
            'recipient',
            'sender',
            'dialogue'
        ]
