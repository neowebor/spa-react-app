import React, {useEffect} from 'react';
import {Search} from './Search'
import {CustomSelect} from "./CustomSelect";
import {useDispatch, useSelector} from "react-redux";
import {setRegionCreator} from "../reducers/regionReducer";
import styled from 'styled-components'
import {logDOM} from "@testing-library/react";

const options = [
  {value: 'Africa', label: 'Africa'},
  {value: 'America', label: 'America'},
  {value: 'Asia', label: 'Asia'},
  {value: 'Europe', label: 'Europe'},
  {value: 'Oceania', label: 'Oceania'},
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Controls = ({executorOnSearch}) => {
  const dispatch = useDispatch();

  const search = useSelector(state => state.control.searchValue);
  const regionValue = useSelector(state => state.regionData.region);

  const setRegion = (region) => {
    if (region === null) {
      dispatch(setRegionCreator(region));
    } else {
      dispatch(setRegionCreator(region.value));
    }
  }

  useEffect(() => {
    executorOnSearch(search, regionValue)
  }, [search, regionValue])

  return (
    <Wrapper>
      <Search/>
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        onChange={setRegion}
      />
    </Wrapper>
  );
};

export default Controls;