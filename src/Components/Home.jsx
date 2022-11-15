import './style.css'
import { AsyncPaginate } from 'react-select-async-paginate';
import { useState } from 'react';
import axios from "axios";
import { GEO_API_URL, geoApiOptions } from '../api';



const Home = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) => {

        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            })
            .catch((err) => console.error(err));

    };


    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData)
    };

    // console.log(search);

    return (
        <AsyncPaginate id='search'
            placeholder='Search for a City'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions} />

    )
}

export default Home;


// AIzaSyBY1J1i5x1RJS_OrDxpiz2yG_nvBUYZH2w