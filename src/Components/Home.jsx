import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import { createContext, useState } from "react";
import './style.css'





const Home = () => {

    const [searchData, setSearchData] = useState('');

    const CityName = createContext();

    const handleonSearchChange = (searchData) => {
        console.log(searchData.label);
        if (searchData) {

            setSearchData(searchData.label);
        }
    }

    return (
        <>
            <h1>HOme page</h1>
            <CityName.Provider value={searchData}>
                <Search onSearchChange={handleonSearchChange} />
                <CurrentWeather country={searchData} />
            </CityName.Provider>
        </>
    )

}

export default Home;