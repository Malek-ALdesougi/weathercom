import {MDBBtn} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



const LoginButton = () => {
    return <Link to={'login'} className='text-light fs-6 fw-4'><MDBBtn className='bg-light'><span className='fs-6' style={{color:' #167bff'}}>Login</span></MDBBtn></Link>
}

export default LoginButton;