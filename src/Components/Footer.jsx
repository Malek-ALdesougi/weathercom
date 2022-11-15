import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';






const Footer = () => {

    return (

        <>

            <MDBFooter className='text-center text-white bg-primary mt-5' >
                <MDBContainer className='p-4'>Weather.Com Website</MDBContainer>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2022 Copyright :
                    <a className='text-white' href='https://mdbootstrap.com/'>
                        Malek AL-Desougi
                    </a>
                </div>
            </MDBFooter>

        </>

    )

}

export default Footer ;