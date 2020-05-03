# from django.contrib.auth.models import User
#
# from rest_framework import serializers
#
# from main.models import Dialogue, Profile, Message
#
#
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'email', 'name']
#
#
# class DialogueSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Dialogue
#         fields = [
#
#         ]
#     name = serializers.CharField(max_length=100)
#     description = serializers.CharField(max_length=200)
#     # sender = pass
#     # recepient = pass
#
#
# class ProfileShortSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Profile
#         fields = ['user', 'supervisor_id']
#
#
# class MessageSerializer(serializers.ModelSerializer):
#
#
#     class Meta:
#         model = Message
#         fields = [
#             'text',
#             'media',
#             'date',
#             'recipient',
#             'sender',
#             'dialogue'
#         ]
#     text = serializers.CharField()
#     media = serializers.ListField(child=serializers.CharField())
#     date = serializers.DateTimeField()
#     pass


from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'groups']


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name']
