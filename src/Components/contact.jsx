




function Contact() {

    return (
        <>

            <section className="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div style={{marginTop: '100px'}} className="container">

                    <div className="row">

                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} className="col-lg-6">

                            <div className="row">
                                <div className="col-md-12 mt-5">
                                    <div className="info-box">
                                        <i className="bx bx-map"></i>
                                        <h3 className="text-light" >Our Address</h3>
                                        <p className="text-light">A108 Haji Street, Amman,JO 43334</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bx bx-envelope"></i>
                                        <h3 className="text-light">Email Us</h3>
                                        <p className="text-light">weathercom@info.com<br></br>weathercome@yahoo.com</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bx bx-phone-call"></i>
                                        <h3 className="text-light">Call Us</h3>
                                        <p className="text-light">+962-78083546<br></br>+962-73457342</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} className="col-lg-6">
                            <form method="post" role="form" className="php-email-form mt-5">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="sent-message text-light">your suggestions are very welcome anytime </div>
                                </div>
                                <div className="text-center"><button className="text-light" style={{backgroundColor:' #167bff', border:'none', marginBottom:'4px'}} type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )

}

export default Contact;