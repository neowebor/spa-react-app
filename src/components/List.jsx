import styled from 'styled-components';
import {Card} from "./Card";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {useEffect, useMemo} from "react";
import {ALL_COUNTRIES} from "../config";
import {setCountriesCreator, setFilteredCountriesCreator} from "../reducers/countryReducer";
import {useNavigate} from 'react-router-dom';
import {API} from "../Service/API/API";

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem
  }
`;

export const List = () => {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countriesInfo.countries);
  const filteredCountries = useSelector(state => state.countriesInfo.filteredCountries);
  const searchValue = useSelector(state => state.control.searchValue);
  const region = useSelector(state => state.regionData.region);

  const arrForMap = filteredCountries.length || (searchValue || region) ? filteredCountries : countries;

  const history = useNavigate()



  const getCountries = () => {
    if (!countries.length) {
      API.get(ALL_COUNTRIES).then(
        ({data}) => dispatch(setCountriesCreator(data))
      )
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  return (
    <Wrapper>
      {
        arrForMap.map(c => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString()
              },
              {
                title: 'Region',
                description: c.region
              },
              {
                title: 'Capital',
                description: c.capital
              },
            ]
          };

          return (
            <Card key={c.name}
                  executorOnCLick={() => history(`/country/${c.name}`, {state: countryInfo})} {...countryInfo}/>
          )
        })
      }
    </Wrapper>
  );
};
