from django.contrib.postgres.fields import ArrayField

from django.db.models import (
    Model, ForeignKey, DateTimeField,
    TextField, CASCADE, CharField
)

from django.db.models.signals import post_save
from django.dispatch import receiver

from .users import Profile
from .dialogs import Dialog

from apps.main.bot import bot_answer

class Message(Model):
    text = TextField('Текст')
    media = ArrayField(
        CharField(max_length=200, blank=True),
        size=10,
        blank=True
    )
    date = DateTimeField('Время создания', auto_now_add=True)

    # dialog = pass TODO
    recipient = ForeignKey(
        Profile, verbose_name='Получатель',
        on_delete=CASCADE, related_name='message_recipient'
    )
    sender = ForeignKey(
        Profile, verbose_name='Отправитель',
        on_delete=CASCADE, related_name='message_sender'
    )
    dialog = ForeignKey(
        Dialog, verbose_name='Диалог',
        on_delete=CASCADE, related_name='dialog_related'
    )

    def can_edit(self, user):
        return user.is_authenticated and user.id == self.sender_id

    def can_delete(self, user):
        return user.is_authenticated and user.id == self.sender_id

    def __str__(self):
        return f'{self.sender}: {self.text}'

    class Meta:
        verbose_name = 'Сообщение'
        verbose_name_plural = 'Сообщения'


@receiver(post_save, sender=Message)
def handle_new_message(sender, **kwargs):
    bot_answer(Message, **kwargs)
