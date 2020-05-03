import { createStore } from 'redux';

const ADD_MESSAGES = 'addMessages';
export const addMessages = (messages) => ({ type: ADD_MESSAGES, messages });

const initialState = {
    messages: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGES:
            return { messages: [...state.messages, ...action.messages] };
    }

    return initialState;
};

const store = createStore(reducer);

export default store;