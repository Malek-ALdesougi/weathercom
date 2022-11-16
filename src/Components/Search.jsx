import './style.css'
import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react';
// import { GEO_API_URL, geoApiOptions } from '../api';
import axios from 'axios';

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) => {

        const config = {
            method: 'get',
            url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            headers: {
                'X-RapidAPI-Key': 'd36a2e103bmsh99c55e53fcf454cp19c9c1jsn2e341dd4e678',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        };
        return axios(config)
            .then((response) => {
                return {
                    options: response.data.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)
    };

    // console.log(search);

    return (
        <div className='col-md-12 d-flex'>
            <AsyncPaginate id='search'
                placeholder='Search for a City'
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions} />
        </div>
    )
}

export default Search;


// AIzaSyBY1J1i5x1RJS_OrDxpiz2yG_nvBUYZH2w