import re
import datetime
import time
from django.contrib.auth.models import User
from apps.main.models.dialogs import Dialog

def bot_answer(Message, **kwargs):
    message = kwargs['instance']
    if message.recipient.user.username == 'Bot':
        text = ''
        buttons = []
        dialog = Dialog.objects.latest('id')
        if re.match('Привет', message.text):
            Message.objects.create(
                text = 'Привет! Бот SelfReport на связи. Я помогу разобраться в управлении задачами.',
                date = datetime.datetime.now(),
                recipient = message.sender,
                sender = message.recipient,
                dialog = dialog,
                buttons = [],
                media = []
            )
            Message.objects.create(
                text = 'Слева находится блок “Все сообщения” и список текущих задач. Если нажать на “Все сообщения” или на одну из задач – откроется диалог в котором можно фиксировать прогресс с помощью голосовых и текстовых сообщений.',
                date = datetime.datetime.now(),
                recipient = message.sender,
                sender = message.recipient,
                dialog = dialog,
                buttons = [],
                media = []
            )
            text = 'Давайте начнем работать вместе! Вам рекомендуется задача\n#### \[[BACK-213]\] Расширение storage\n- сейчас данные хранятся в текстовом столбце, нужно перенест их в новый json столбец\n- при вставке мапить новые значения в json\n- научиться фильтровать/прочитывать сообщения по типу\n\n_Оценка задачи: 6_\n\n_Рекомендуемое время выполнения: 6 часов_'
            buttons = ['Взять в работу ✅', 'Изменить время ⏱', 'Отправить на доработку ❌']
        if re.match('В работе', message.text):
            text = 'Хорошо'
        if re.match('Взять в работу', message.text):
            text = 'Хорошо'
            if dialog.id == 1:
                dialog = Dialog.objects.create(
                    name = '[BACK-213] Расширение storage',
                    description = 'Осталось примерно 6 часов',
                    recipient = message.recipient,
                    sender = message.sender
                )
            else:
                dialog = Dialog.objects.create(
                    name = '[BACK-201] До api не пробрасываются данные в ручке upload',
                    description = 'Осталось примерно 8 часов',
                    recipient = message.recipient,
                    sender = message.sender
                )
        if re.match('/pass (\d+)', message.text):
            hours = int(re.match('/pass (\d+)', message.text).group(1))
            d_hours = int(re.match('Осталось примерно (\d+) часов', dialog.description).group(1))
            new_hours = d_hours - hours
            dialog.description = 'Осталось примерно ' + str(new_hours) + ' часов'
            dialog.save()
            text = 'Сообщите о текущем прогрессе и оставшемся времени'
        if re.match('Завершено', message.text):
            text = 'Спасибо. Отличная работа! Вам рекомендуется задача\n#### \[[BACK-201]\] До api не пробрасываются данные в ручке upload\nПри отправке картинок и файлов не отправляется данные в мета информации сообщения.\n\n_Оценка задачи: 8_\n_Рекомендуемое время выполнения: 7 часов_\n'
            dialog.description = 'Завершено'
            dialog.save()
            buttons = ['Взять в работу ✅', 'Изменить время ⏱', 'Отправить на доработку ❌']
        if re.match('Еще не готово', message.text):
            text = 'Статистика по рекомендуемому времени обновлена. А для вас – полезные советы, как оставаться продуктивным: [https://lifehacker.ru/sovety-produktivnaya-rabota/]'
            dialog.description = 'Осталось примерно 5 часов'
            dialog.save()
        if text != '':
            Message.objects.create(
                text = text,
                date = datetime.datetime.now(),
                recipient = message.sender,
                sender = message.recipient,
                dialog = dialog,
                buttons = buttons,
                media = []
            )