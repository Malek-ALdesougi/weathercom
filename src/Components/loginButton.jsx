import {MDBBtn} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



const LoginButton = () => {


    return <Link to={'register'} className='text-light fs-6 fw-4'><MDBBtn>Login</MDBBtn></Link>

}

export default LoginButton;