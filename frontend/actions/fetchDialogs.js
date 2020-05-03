import axios from 'axios';
import store, { addDialogs } from '../store';

export default function fetchMessages() {
    return axios.get('/api/get_dialogs').then((response) => {
        return store.dispatch(addDialogs(response.data));
    });
}