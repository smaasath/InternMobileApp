import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Category: [],
    SelectedCategory: "",
    data: [],
    itemdata: [],
    searchtext: "",
    filtereddata: [],
    items: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        setCategory: (state, action) => {
            state.Category = action.payload;
        },
        setSelectedCategory: (state, action) => {
            state.SelectedCategory = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        setItemData: (state, action) => {
            state.itemdata = action.payload;
        },
        setSearchText: (state, action) => {
            state.searchtext = action.payload;
        },
        setFilteredData: (state, action) => {
            state.filtereddata = action.payload;
        },
        addItemToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
        
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            return state;
        },

  

        decrementQuantity : (state,action) => {
            const itemInCart = state.items.find((item) => item.id == action.payload.id);
            if(itemInCart.quantity == 1){
                const removeFromCart = state.items.filter((item) => item.id !== action.payload.id);
                state.items = removeFromCart;
            }else{
                itemInCart.quantity--;
            }

        },
        
    },
});

export const {
    setCategory,
    setSelectedCategory,
    setData,
    setItemData,
    setSearchText,
    setFilteredData,
    addItemToCart,
    decrementQuantity,
} = userSlice.actions;

export default userSlice.reducer;
