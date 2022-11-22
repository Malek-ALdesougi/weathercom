import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import './style.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import '../Components/styles/forecast.css'
import { MDBBtn } from 'mdb-react-ui-kit';

const weekDays = ['Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// const favArray = [];

const Forecast = () => {

    const currentDay = new Date().getDay();

    const forecastDay = weekDays.slice(currentDay, weekDays.length).concat(weekDays.slice(0, currentDay))


    let { name } = useParams();

    const [forecastData, setForecastData] = useState([]);

    useEffect(() => {

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=ec6531490be8447c526f8350ffc1e879&q=${name}&units=metric`)
            .then((response) => {
                console.log(response);
                setForecastData(response.data.list.splice(0, 7));
            })
            .catch((err) => console.log(err))

    }, [name])

    const handelFav = () => {
        const fav = name;
        const items = JSON.parse(localStorage.getItem('fav')) || [];
        items.push(fav);

        localStorage.setItem('fav', JSON.stringify(items))

    }

    console.log(forecastData);

    return (

        <>
            <label className='title'>Daily</label><br></br>
            <Accordion allowMultipleExpanded>
                {forecastData.map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='container d-flex justify-content-center mt-3'>
                                    <div className='daily-item col-md-6'>
                                        <img alt='weather' className='icon-small' src={`/icons/${item.weather[0].icon}.png`} />
                                        <label style={{ cursor: 'inherit', color: '#212121', fontWeight: '600px', marginLeft: '15px' }} className='my-day'>{forecastDay[index]}</label>
                                        <label className='description'>{item.weather[0].description}</label>
                                        <label className='min-max text-dark'>{Math.round(item.main.temp_min)}°C/ {Math.round(item.main.temp_max)}°C</label>
                                    </div>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='container d-flex justify-content-center'>
                                <div className='daily-grid col-md-6'>
                                    <div className='div1'>
                                        <div className='d-flex justify-content-around'>
                                            <p className='text-light' style={{ display: 'inline' }}>Pressure</p><span className='text-light'>{item.main.pressure}hPa</span>
                                        </div>
                                        <div className='d-flex justify-content-around'>
                                            <p className='text-light' style={{ display: 'inline' }}>Clouds</p><span className='text-light'>{item.clouds.all}%</span>
                                        </div>
                                        <div className='d-flex justify-content-around'>
                                            <p className='text-light' style={{ display: 'inline' }}>Sea Level</p><span className='text-light'>{item.main.sea_level}m</span>
                                        </div>

                                    </div>
                                    <div className='div2'>
                                        <div className='d-flex justify-content-around'>
                                            <p className='text-light' style={{ display: 'inline' }}>Humidity</p><span className='text-light'>{item.main.humidity}%</span>
                                        </div>
                                        <div className='d-flex justify-content-around'>
                                            <p className='text-light' style={{ display: 'inline' }}>Wind speed</p><span className='text-light'>{item.wind.speed}m/s</span>
                                        </div>
                                        <div className='d-flex justify-content-around'>
                                            <p className='text-light' style={{ display: 'inline' }}>Feels like</p><span className='text-light'>{item.main.feels_like}°C</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
                <Link to={'/'}><MDBBtn className='bg-light text-dark fs-6'>Back</MDBBtn></Link>
                <MDBBtn onClick={handelFav} className='bg-warning text-dark fs-6 ms-5'>Add favoaite</MDBBtn>

            </Accordion>

        </>
    )

}

export default Forecast;