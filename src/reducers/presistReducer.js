/* Presist Reducer
 * handles presist states in the app
 */
import createReducer from './createReducer';

const initialState = {
    data: []
};

export const presistReducer = createReducer(initialState, {
    //Save data
    ["SAVE_PRESIST_REDUCER"](state, action) {
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.reducerVariable]: action.response,
            }
        };
    },

    //Clear data
    ["CLEAR_PRESIST_REDUCER"](state) {
        return {
            ...state,
            data: []
        }
    },


});
