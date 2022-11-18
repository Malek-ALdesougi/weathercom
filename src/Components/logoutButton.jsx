import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";


const LogoutButton = () => {

    const handelLogout = () => {
        localStorage.removeItem('loggedin');
    }


    return <Link onClick={handelLogout} to={'login'} className='text-light fs-5 fw-4'><MDBBtn>Logout</MDBBtn></Link>


}

export default LogoutButton;