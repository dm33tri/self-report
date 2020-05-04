from django.contrib.postgres.fields import ArrayField

from django.db.models import (
    Model, ForeignKey, DateTimeField,
    TextField, CASCADE, IntegerField
)

from .users import Profile


class Task(Model):
    text = TextField('Текст')
    story_points = IntegerField(
        'Стори поинты',
        blank=True,
        default=1
    )

    start_date = DateTimeField('Время создания', auto_now_add=True)
    end_date = DateTimeField('Время создания', auto_now_add=False)

    executor = ForeignKey(
        Profile, verbose_name='Исполнитель',
        on_delete=CASCADE, related_name='task_executor'
    )

    def __str__(self):
        return f'{self.id}'

    class Meta:
        verbose_name = 'Задача'
        verbose_name_plural = 'Задачи'
