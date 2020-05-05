import getApi from '../services/api';
import store, { addMessages } from '../store';

export default function fetchMessages() {
    const { messages, userId } = store.getState();
    const latest = messages.length > 0 ? messages[messages.length - 1].date : 0;

    return getApi().get('/get_messages', { params: { from: latest, id: userId }}).then((response) => {
        return store.dispatch(addMessages(response.data));
    });
}