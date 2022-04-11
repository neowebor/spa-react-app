const SET_SEARCH = 'SET_SEARCH';

const initialState = {
  searchValue: '',
}

const controlReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchValue: action.payload
      }
    default:
      return state
  }
}

export const setSearchCreator = (value) => ({type: SET_SEARCH, payload: value})

export default controlReducer;
