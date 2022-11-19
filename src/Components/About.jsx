import React from 'react';


const About = () => {

    return (
        <>
            <section className="about" data-aos="fade-up">
                <div style={{marginTop: '110px'}}  className="container col-md-10">
                    <div className="row col-md-">
                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} class="col-lg-6 text-start pt-4 pt-lg-0">
                            <h3 style={{fontWeight:'bolder'}} className='text-light fw-900 fs-1'>Weathercom Website</h3>
                            <p className="fst-italic fs-5 fw-bold text-light">
                            weather com is a user-friendly website dedicated to searching the weather with full details in any country at any time it has an 
                            auto-complete feature search to make it easier to do the search and the user can reach the forecasting weather
                            for seven days also with fully detailed information 
                            </p>
                            <ul>
                                <h3 className='text-light'>Features</h3>
                                <li className='text-light'><i className="bi bi-check2-circle"></i> Fast and easy to use</li>
                                <li className='text-light'><i className="bi bi-check2-circle"></i>Available any time for everyone</li>
                                <li className='text-light'><i className="bi bi-check2-circle"></i>Provide you with fully detailed information about the weather in any country</li>
                            </ul>
                            {/* <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;