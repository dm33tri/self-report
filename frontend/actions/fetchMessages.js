import axios from 'axios';
import store, { addMessages } from '../store';

export default function fetchMessages() {
    const messages = store.getState().messages;
    const latest = messages.length > 0 ? messages[messages.length - 1].date : 0;

    return axios.get('/api/get_messages', { params: { from: latest }}).then((response) => {
        return store.dispatch(addMessages(response.data));
    });
}