export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';
export const SET_DATA = 'SET_DATA';
export const SET_ITEM_DATA = 'SET_ITEM_DATA';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const SET_FILTERED_DATA = 'SET_FILTERED_DATA';



export const setFilteredData = filtereddata => dispatch => {
    dispatch({
      type: SET_FILTERED_DATA,
      payload: filtereddata,
    })
  };


export const setSearchText = searchtext => dispatch => {
    dispatch({
      type: SET_SEARCH_TEXT,
      payload: searchtext,
    })
  };

export const setItemData = itemdata => dispatch => {
  dispatch({
    type: SET_ITEM_DATA,
    payload: itemdata,
  })
};

export const setCategory = Category => dispatch =>{
    dispatch({
        type : SET_CATEGORY,
        payload : Category,
    })
};

export const setSelectedCategory = SelectedCategory => dispatch =>{
    dispatch({
        type : SET_SELECTED_CATEGORY,
        payload : SelectedCategory,
    })
};

export const setData = data => dispatch =>{
    dispatch({
        type : SET_DATA,
        payload : data,
    })
};

