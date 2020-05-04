import getApi from '../services/api';
import fetchMessages from './fetchMessages';

export default function sendMessage({ text, audio }) {
    const data = new FormData();

    if (audio) {
        data.append('media', [audio], 'file');
    }
    if (text) {
        data.append('text', text);
    }

    return getApi().post('/send_message', data, { headers: { 'Content-Type': 'multipart/form-data' } })
        .finally(fetchMessages);
}