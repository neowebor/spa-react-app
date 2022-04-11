const SET_REGION = 'SET_REGION';

const initialState = {
    region: '',
}

const regionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGION:
            return {
                ...state,
                region: action.payload
            }

        default:
            return state;
    }
}

export const setRegionCreator = (value) => ({type: SET_REGION, payload: value})

export default regionReducer;