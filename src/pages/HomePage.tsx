import {useEffect, useState} from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup} from '@mui/material';
import Spinner from '../components/Spinner.tsx';
import CatalogCards from '../components/CatalogCards.tsx';

function HomePage() {
    const [catalog, setCatalog] = useState([]);
    const [loading, setLoading] = useState(true);
    const [param, setParam] = useState({
        selectedRadio: '',
        searchBar: ''
    });

    useEffect(() => {
        const fetchCatalog = async () => {
            let apiUrl = '/api/catalog';
            const params = new URLSearchParams();

            if (param.selectedRadio) {
                params.append('species', param.selectedRadio);
            }

            if (param.searchBar) {
                params.append('name', param.searchBar);
            }

            const queryString = params.toString();

            if (queryString) {
                apiUrl += `?${queryString}`;
            }

            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setCatalog(data);
            } catch (error) {
                console.log('Error fetching data', error);
            } finally {
                setLoading(false);
            }
        };

         fetchCatalog();
    }, [param]);


    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParam({...param, selectedRadio: event.target.value});
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParam({...param, searchBar: event.target.value});
    };


    return (
        <>
            <div className="ml-20 mt-2 mb-2">
                <FormControl>
                    <div className="flex gap-5">
                        <RadioGroup row aria-labelledby='demo-row-radio-buttons-group-label'
                                    name='row-radio-buttons-group'
                                    value={param.selectedRadio} onChange={handleRadioChange}>
                            <FormControlLabel value='' control={<Radio/>} label='All'/>
                            <FormControlLabel value='dog' control={<Radio/>} label='dogs'/>
                            <FormControlLabel value='cat' control={<Radio/>} label='cats'/>
                            <FormControlLabel value='bird' control={<Radio/>} label='birds'/>
                        </RadioGroup>
                        <div className="md:w-80">
                            <input type="search" id="default-search"
                                   className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   value={param.searchBar}
                                   onChange={handleSearchChange}
                                   name="searchBar"
                            />
                        </div>
                        <button type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                        </button>

                    </div>

                </FormControl>
            </div>
            {loading ? <Spinner loading={loading}/> :
                <CatalogCards catalog={catalog}/>}
        </>
    );
}

export default HomePage;