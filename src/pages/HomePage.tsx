import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogCards from '../components/CatalogCards.tsx';
import Spinner from '../components/Spinner.tsx';
import { getCatalog } from '../service/global.service.ts';

function HomePage() {
  const { loading, animal } = useSelector((state: any) => state.catalog);
  const [param, setParam] = useState({
    selectedRadio: '',
    searchBar: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getCatalog(param, dispatch);
  }, [dispatch, param]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParam({ ...param, selectedRadio: event.target.value });
  };
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParam({ ...param, searchBar: event.target.value });
  };

  return (
    <>
      <div className="ml-20 mt-2 mb-2">
        <FormControl>
          <div className="flex gap-5">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={param.selectedRadio}
              onChange={handleRadioChange}>
              <FormControlLabel value="" control={<Radio />} label="All" />
              <FormControlLabel value="dog" control={<Radio />} label="dogs" />
              <FormControlLabel value="cat" control={<Radio />} label="cats" />
              <FormControlLabel
                value="bird"
                control={<Radio />}
                label="birds"
              />
            </RadioGroup>
            <div className="md:w-80">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={param.searchBar}
                onChange={handleSearchChange}
                name="searchBar"
              />
            </div>
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Search
            </button>
          </div>
        </FormControl>
      </div>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <CatalogCards catalog={animal} />
      )}
    </>
  );
}

export default HomePage;
