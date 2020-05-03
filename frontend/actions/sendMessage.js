import axios from 'axios';
import fetchMessages from './fetchMessages';
export default function sendMessage({ text, audio }) {
    const data = new FormData();

    if (audio) {
        data.append('audio', audio, 'file');
    }
    if (text) {
        data.append('message', text);
    }

    return axios.post('/api/send_message', data, { headers: { 'Content-Type': 'multipart/form-data' } })
        .finally(fetchMessages);
}