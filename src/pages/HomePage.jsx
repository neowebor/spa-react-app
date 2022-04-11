import Controls from "../components/Controls";
import {List} from "../components/List";
import {setFilteredCountriesCreator} from "../reducers/countryReducer";
import {useDispatch, useSelector} from "react-redux";

export const HomePage = () => {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countriesInfo.countries);

  const handleSearch = (search, region) => {

    let data = countries.map(country => ({...country}))

    if (region) {
      data = data.filter(country => country.region.includes(region))
    }

    if (search) {
      data = data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
    }

    dispatch(setFilteredCountriesCreator(data));
  }

  return (
    <div>
      <Controls executorOnSearch={handleSearch}/>
      <List />
    </div>
  )
}