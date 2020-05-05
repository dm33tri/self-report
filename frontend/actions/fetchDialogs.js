import getApi from '../services/api';
import store, { adddialogs } from '../store';

export default function fetchMessages() {
    const { userId } = store.getState();

    return getApi().get('/get_dialogs', { params: { id: userId }}).then((response) => {
        return store.dispatch(adddialogs(response.data));
    });
}