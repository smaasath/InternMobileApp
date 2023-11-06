// userReducers.js
import { SET_CATEGORY, SET_SELECTED_CATEGORY, SET_DATA, SET_ITEM_DATA,SET_SEARCH_TEXT ,SET_FILTERED_DATA} from "./actions";

const initialState = {
    Category: [],
    SelectedCategory: "",
    data: [],
    itemdata: [],
    searchtext : "",
    filtereddata :[],
};

function userReducers(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY:
            return { ...state, Category: action.payload };

        case SET_SELECTED_CATEGORY:
            return { ...state, SelectedCategory: action.payload };

        case SET_DATA:
            return { ...state, data: action.payload };

        case SET_ITEM_DATA:
            return { ...state, itemdata: action.payload };
        
        case SET_SEARCH_TEXT:
                return { ...state, searchtext: action.payload };

        case SET_FILTERED_DATA:
                return { ...state, filtereddata: action.payload };



        default:
            return state;
    }
}

export default userReducers;

