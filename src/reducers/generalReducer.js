/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from './createReducer';

const initialState = {
    Loading: [],
    data: []
};

export const generalReducer = createReducer(initialState, {

    //Loaders
    ["ENABLE_LOADER"](state, action) {
        return {
            ...state,
            Loading: { ...state.Loading, [action.apiType]: true }
        };
    },

    ["DISABLE_LOADER"](state, action) {
        return { ...state, Loading: { ...state.Loading, [action.apiType]: false } };
    },

    ["CLEAR_PRESIST_REDUCER"](state) {
        return {
            ...state,
            data: []
        }
    },

    //Save data
    ["SAVE_GENERAL_REDUCER"](state, action) {
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.reducerVariable]: action.response
            }
        }
    }
});
