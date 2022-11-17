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
import './style.css';
import axios from "axios";



const CurrentWeather = (props) => {

    // console.log(props.country + "from currnet weather");

    const cityName = props.country;

    const [cityData, setCityData] = useState([]);


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
                            <MDBCard className="mt-4" style={{ color: "#4B515D", borderRadius: "35px", marginBottom: '93px' }}>
                                <MDBCardBody style={{ backgroundColor: 'rgb(38, 84, 175)', borderRadius: '5px' }} className="p-4">
                                    <div id="add-flex" className="d-flex ">
                                        <MDBTypography id="head-text" style={{ display: 'inline' }} className="flex-grow-1 text-light">
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
                                        <span className="small text-light" style={{ color: "#868B94" }}>
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
                                                        style={{ color: "#ffffff" }}
                                                    />{" "}
                                                    <span className="ms-1 text-light">feels Like : {(cityData.main.feels_like - 273.15).toFixed(1)}°C</span>
                                                </div>
                                                <div style={{ width: '200px', textAlign: 'left' }}>
                                                    <MDBIcon
                                                        fas
                                                        icon="wind fa-fw"
                                                        style={{ color: "#ffffff" }}
                                                    />{" "}
                                                    <span className="ms-1 text-light">winds :{cityData.wind.speed} km/h</span>
                                                </div>
                                                <div style={{ width: '200px', textAlign: 'left' }}>
                                                    <MDBIcon
                                                        fas
                                                        icon="tint fa-fw"
                                                        style={{ color: "#ffffff" }}
                                                    />{" "}
                                                    <span className="ms-1 text-light">humidity : {cityData.main.humidity}% </span>
                                                </div>
                                                <div style={{ width: '200px', textAlign: 'left' }}>
                                                    <MDBIcon
                                                        fas
                                                        icon="thermometer"
                                                        style={{ color: "#ffffff" }}
                                                    />{" "}
                                                    <span className="ms-1 text-light">Pressure : {cityData.main.pressure}millibars </span>
                                                </div>

                                            </div>
                                        </div>
                                        <div>
                                            {/* <MDBIcon className="ms-1" fas icon="sun" size="3x" style={{backgroundColor:'yellow'}} /> */}
                                            <img alt="Weather" src={`icons/${cityData.weather[0].icon}.png`} />
                                        </div>
                                    </div>
                                </MDBCardBody>
                                <MDBBtn tag="a" href={`forecast/${cityData.name}`} className="stretched-link mt-3 p-2"><MDBTypography className="d-inline fs-6">Weather for 7 days</MDBTypography></MDBBtn>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    )
}

export default CurrentWeather;