import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";


const LogoutButton = ({changeStatus}) => {

    const handelLogout = () => {
        localStorage.removeItem('loggedin');
        changeStatus();
    }


    return <Link onClick={handelLogout} to={'login'} className='text-light fs-5 fw-4'><MDBBtn className='bg-light'><span className='fs-6' style={{color:' #167bff'}}>Logout</span></MDBBtn></Link>


}

export default LogoutButton;