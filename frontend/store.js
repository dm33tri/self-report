import { createStore } from 'redux';

const ADD_MESSAGES = 'addMessages';
export const addMessages = (messages) => ({ type: ADD_MESSAGES, messages });

const ADD_dialogs = 'adddialogs';
export const adddialogs = (dialogs) => ({ type: ADD_dialogs, dialogs });

const SWITCH_DIALOG = 'switchDialog';
export const switchDialog = (dialog) => ({ type: SWITCH_DIALOG, dialog });

const initialState = {
    userId: 1,
    messages: [],
    dialogs: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGES:
            return { ...state, messages: action.messages }; // Пока не сделано получение по кускам
            // return { ...state, messages: [...state.messages, ...action.messages] };
        case ADD_dialogs:
            return { ...state, dialogs: action.dialogs };
        case SWITCH_DIALOG:
            return { ...state, currentDialog: action.dialog };
    }

    return initialState;
};

const store = createStore(reducer);

export default store;