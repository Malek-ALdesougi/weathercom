
import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardHeader,
    MDBBtn,
    MDBTypography,
    MDBTableHead,
    MDBTableBody,
    MDBTable
} from 'mdb-react-ui-kit';

const userData = JSON.parse(localStorage.getItem('users'));


const Profile = () => {
    const fav = JSON.parse(localStorage.getItem('fav'));

    const [filter, setFilter] = useState();

    const removeCity = (favCity) => {
        console.log(fav);
        const find = fav.filter(city);

        console.log(find);
        console.log(filter);

        function city(name) {
            return name !== favCity
        }


        setFilter(find);
        localStorage.removeItem('fav');
        localStorage.setItem('fav', JSON.stringify(find));
    }

    return (
        <>
            <div style={{ marginBottom: '208px' }} className='container mt-5 col-md-12 d-flex gap-5 flex-wrap justify-content-center'>
                <div className="col-md-4">
                    <MDBCard background='light' className='text-white mb-3'>
                        <MDBCardHeader className='fs-2 text-primary'>Your Information</MDBCardHeader>
                        <MDBCardBody className='text-center'>
                            <MDBCardTitle className='text-primary ps-3'> First Name :{userData[0].firstName}</MDBCardTitle>
                            <MDBCardTitle className='text-primary ps-3'> Last Name :{userData[0].lastName}</MDBCardTitle>
                            <MDBCardTitle className='text-primary ps-3'> Email :{userData[0].registerEmail}</MDBCardTitle>
                            {/* <MDBCardTitle className='text-primary ps-3'> Password :{userData[0].registerPassword}</MDBCardTitle> */}
                            <MDBCardText>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>




                <div className="col-md-6">
                    <MDBCard background='primary' className='text-white  mb-3'>
                        <MDBCardHeader className='fs-2'>Your favoraite Cities</MDBCardHeader>
                        <MDBCardBody>
                            <MDBTable align='middle'>
                                <MDBTableHead light>

                                    <tr key={fav}>
                                        <th scope='col'>#</th>
                                        <th scope='col'>City</th>
                                        <th scope='col'>Remove</th>
                                    </tr>

                                    {fav?.map((fav, index) => {
                                        return (
                                                <tr>
                                                    <th scope='row'>{index + 1}</th>
                                                    <td>{fav}</td>
                                                    <td>
                                                        <MDBBtn onClick={() => removeCity(fav)} color='link' size='sm'>
                                                            <i className='fas fa-times text-danger'></i>
                                                        </MDBBtn>
                                                    </td>
                                                </tr>
                                                )})}
                                </MDBTableHead>
                                <MDBTableBody>

                                </MDBTableBody>
                            </MDBTable>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </>
    )

}

export default Profile;