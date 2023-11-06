// userReducers.js
import { SET_CATEGORY, SET_SELECTED_CATEGORY, SET_DATA, SET_ITEMS_DATA } from "./actions";

const initialState = {
    Category: [],
    SelectedCategory: "",
    data: [],
    itemdata: "lve", 
};

function userReducers(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY:
            return { ...state, Category: action.payload };

        case SET_SELECTED_CATEGORY:
            return { ...state, SelectedCategory: action.payload };

        case SET_DATA:
            return { ...state, data: action.payload };

        case SET_ITEMS_DATA:
            return { ...state, itemdata: action.payload };

        default:
            return state;
    }
}

export default userReducers;

