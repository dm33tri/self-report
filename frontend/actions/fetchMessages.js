import axios from 'axios';
import store, { addMessages } from '../store';

export default function fetchMessages() {
    return axios.get('/api/get_messages').then((response) => {
        return store.dispatch(addMessages(response.data));
    });
}