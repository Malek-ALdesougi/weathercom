import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import { createContext, useState } from "react";
import '../Components/styles/style.css'





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
        <div>
            <h3 className="mt-">Welcome To WeatherCom</h3>
            <CityName.Provider value={searchData}>
                <Search onSearchChange={handleonSearchChange} />
                <CurrentWeather country={searchData} />
            </CityName.Provider>
        </div>
    )

}

export default Home;