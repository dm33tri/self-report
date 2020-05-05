import getApi from '../services/api';
import fetchMessages from './fetchMessages';
import fetchDialogs from './fetchDialogs';
import store from '../store';

export default function sendMessage({ text, audio }) {
    const data = new FormData();
    const { currentDialog } = store.getState();

    if (audio) {
        data.append('media', [audio], 'file');
    }
    if (text) {
        data.append('text', text);
    }
    if (currentDialog) {
        data.append('dialog_id', currentDialog)
    }

    return getApi().post('/send_message', data, { headers: { 'Content-Type': 'multipart/form-data' } })
        .finally(() => {
            fetchMessages();
            fetchDialogs();
        });
}