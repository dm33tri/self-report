import { createStore } from 'redux';

const ADD_MESSAGES = 'addMessages';
export const addMessages = (messages) => ({ type: ADD_MESSAGES, messages });

const ADD_DIALOGS = 'addDialogs';
export const addDialogs = (dialogs) => ({ type: ADD_DIALOGS, dialogs });

const initialState = {
    messages: [],
    dialogs: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGES:
            return { ...state, messages: [...state.messages, ...action.messages] };
        case ADD_DIALOGS:
            return { ...state, dialogs: action.dialogs };
    }

    return initialState;
};

const store = createStore(reducer);

export default store;