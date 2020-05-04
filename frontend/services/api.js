import axios from 'axios';
import cookie from 'cookie';

let instance;

export default function getApi() {
    if (!instance) {
        let csrfToken;
        if (process.browser) {
            csrfToken = cookie.parse(document.cookie).csrftoken;
        }

        instance = axios.create({
            baseURL: `/api`,
            headers: {
                common: {
                    'X-CSRFToken': csrfToken,
                },
            }
        });
    }

    return instance;
}