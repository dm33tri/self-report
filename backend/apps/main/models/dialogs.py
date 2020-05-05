from django.db.models import Model, CharField, ForeignKey, CASCADE

from .users import Profile


class Dialog(Model):
    name = CharField('Название', max_length=100, blank=False)
    description = CharField('Описание', max_length=200, blank=True)

    recipient = ForeignKey(
        Profile, verbose_name='Получатель',
        on_delete=CASCADE, related_name='dialog_recipient'
    )
    sender = ForeignKey(
        Profile, verbose_name='Отправитель',
        on_delete=CASCADE, related_name='dialog_sender'
    )

    def __str__(self):
        return f'{self.id}. {self.name}'

    class Meta:
        verbose_name = 'Диалог'
        verbose_name_plural = 'Диалоги'
