const SET_COUNTRIES = 'SET_COUNTRIES';
const SET_FILTERED_COUNTRIES = 'SET_FILTERED_COUNTRIES';

const initialState = {
  countries: [],
  filteredCountries: []
}

const countryReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countries: [...action.payload]
      }

    case SET_FILTERED_COUNTRIES:
      return {
        ...state,
        filteredCountries: [...action.payload]
      }

    default:
      return state;
  }
}

export const setCountriesCreator = (value) => ({type: SET_COUNTRIES, payload: value})

export const setFilteredCountriesCreator = (value) => ({type: SET_FILTERED_COUNTRIES, payload: value})

export default countryReducer;