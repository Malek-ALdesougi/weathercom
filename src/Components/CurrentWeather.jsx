import React, { useEffect, useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import '../Components/styles/style.css'
import axios from "axios";



const CurrentWeather = (props) => {

    const cityName = props.country;

    const [cityData, setCityData] = useState([]);

    //Get the current location of the user--------
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');

    const successCallback = (position) => {
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
    };
    const errorCallback = (error) => {
        console.log(error);
    };
    function getLocation() {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
    //End of current location of user------------



    //  current location fetch 
    useEffect(() => {

        axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=eaa24e08cac968fbaa5d8222a940e6a7`)
            .then(function (response) {
                console.log(response);
                setCityData(response.data);
            }).catch(function (err) {
                console.log(err);
            })

    }, [lat, lon])

    // standard fetch
    // we must fix this and remove jordan as the default coutry 
    useEffect(() => {

        axios(`https://api.openweathermap.org/data/2.5/weather?appid=ec6531490be8447c526f8350ffc1e879&q=jordan`)
            .then(function (response) {
                console.log(response.data);
                setCityData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    useEffect(() => {

        if (cityName) {
            axios(`https://api.openweathermap.org/data/2.5/weather?appid=ec6531490be8447c526f8350ffc1e879&q=${cityName ? cityName : 'jordan'}`)
                .then(function (response) {
                    console.log(response.data);
                    setCityData(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [cityName])

    // const celsiusTemp = (cityData.main.temp - 273.15).toFixed(2);
    // console.log(cityData.name);
    if (cityData.length == 0) {
        return console.log(cityData + 'from if beforre');
    }
    return (

        <>
            <section className="vh-50 mt-5">
                <MDBContainer className="h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol md="8" lg="6" xl="4">
                            <MDBCard className="mt-1" style={{ color: "#4B515D", borderRadius: "35px", marginBottom: '93px' }}>
                                <MDBCardBody style={{ backgroundColor: '#ffffff', borderRadius: '35px' }} className="p-4">
                                    <div id="add-flex" className="d-flex ">
                                        <MDBTypography id="head-text" style={{ display: 'inline' }} className="flex-grow-1 text-dark">
                                            {cityData.name}
                                        </MDBTypography>
                                    </div>
                                    <div className="d-flex flex-column text-center mt-5 mb-4">
                                        <MDBTypography
                                            tag="h6"
                                            className="display-4 mb-0 font-weight-bold "
                                            style={{ color: "#1C2331" }}>
                                            {(cityData.main.temp - 273.15).toFixed()}°C
                                        </MDBTypography>
                                        <span className="small text-dark" style={{ color: "#868B94" }}>
                                            {cityData.weather[0].main}
                                        </span>
                                    </div>
                                    <div className="d-flex ">
                                        <div className="flex-grow-1 d-flex justify-content-start" style={{ fontSize: '1rem' }}>
                                            <div style={{ width: '120px' }} className="d-flex align-items-start flex-column ms-4 justify-content-center">

                                                <div style={{ width: '200px', textAlign: 'left' }}>
                                                    <MDBIcon
                                                        fas
                                                        icon="robot"
                                                        style={{ color: "#000000" }}
                                                    />{" "}
                                                    <span className="ms-1 text-dark">feels Like : {(cityData.main.feels_like - 273.15).toFixed(1)}°C</span>
                                                </div>
                                                <div style={{ width: '200px', textAlign: 'left' }}>
                                                    <MDBIcon
                                                        fas
                                                        icon="wind fa-fw"
                                                        style={{ color: "#000000" }}
                                                    />{" "}
                                                    <span className="ms-1 text-dark">winds :{cityData.wind.speed} km/h</span>
                                                </div>
                                                <div style={{ width: '200px', textAlign: 'left' }}>
                                                    <MDBIcon
                                                        fas
                                                        icon="tint fa-fw"
                                                        style={{ color: "#000000" }}
                                                    />{" "}
                                                    <span className="ms-1 text-dark">humidity : {cityData.main.humidity}% </span>
                                                </div>
                                                <div style={{ width: '200px', textAlign: 'left' }}>
                                                    <MDBIcon
                                                        fas
                                                        icon="thermometer"
                                                        style={{ color: "#000000" }}
                                                    />{" "}
                                                    <span className="ms-1 text-dark">Pressure : {cityData.main.pressure}millibars </span>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            {/* <MDBIcon className="ms-1" fas icon="sun" size="3x" style={{backgroundColor:'yellow'}} /> */}
                                            <img alt="Weather" src={`icons/${cityData.weather[0].icon}.png`} />
                                        </div>
                                    </div>
                                </MDBCardBody>
                                <div className="">
                                    <MDBBtn onClick={getLocation} ><MDBTypography className="d-inline fs-6">Get the weather for current location</MDBTypography></MDBBtn>
                                    <MDBBtn tag="a" href={`forecast/${cityData.name}`} className="stretched-link mt-3 mb-3 p-2"><MDBTypography className="d-inline fs-6">Weather for 7 days</MDBTypography></MDBBtn>
                                </div>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    )
}

export default CurrentWeather;