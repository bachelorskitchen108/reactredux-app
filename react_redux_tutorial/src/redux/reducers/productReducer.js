// Reducer all ways take the initalState and action as parameter
import { ActionTypes } from "../constents/action-types";
const initialState = {
    products:[
        {
        id: 1,
        title: "Jayanth",
        category: "Developer"
    },
  ],
};

// obj destructing the action to --> {type, payload}
export const productReducer = (state = initialState, {type, payload}) => {
         switch (type) {
            case ActionTypes.SET_PRODUCTS:
                return state
            default:
                return state;
         }
}