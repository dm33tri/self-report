import React from 'react';
import { Provider } from 'react-redux'
import store from '../store';

import './styles.css';

export default function App({ Component, pageProps }) {
    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
}