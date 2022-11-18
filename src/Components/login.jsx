import { useState } from 'react';
import '../Components/styles/login.css'
import { useNavigate } from 'react-router-dom';
import ReactJsAlert from "reactjs-alert"



const Login = (logStatus) => {

    const [userLoginData, setUserLoginData] = useState({
        email: '',
        password: ''
    })
    const [status, setStatus] = useState(false);
    const [type, setType] = useState("error");
    const [title, setTitle] = useState("Email or Password is not correct!! please try again");
    const navigate = useNavigate();

    //Handel login
    const handelLogin = (e) => {
        e.preventDefault();

        const localDataLogin = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];

        //check email and  password are not empty
        if(userLoginData.email === '' || userLoginData.password === ''){
            return setStatus(true);
        }
        // check email and password are exist 
        let isRegistered = localDataLogin.find((e) => e.registerEmail === userLoginData.email && e.registerPassword === userLoginData.password)

        console.log(isRegistered);

        if (isRegistered){
            console.log('after if its true ');
            localStorage.setItem('loggedin', true);
            navigate('/');
        }else{
            console.log('its false');
            return setStatus(true)
        }

        //the best practice for this situation is to let the home page as the default page of the  webiste

    }

    return (

        <>
            <div className="container login-container col-md-4">
                <div className="login-container d-flex justify-content-center">
                    <form onSubmit={handelLogin} method='get' className='col-md-8 text-start mt-2'>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                name='email'
                                value={userLoginData.email}
                                onChange={(e) => setUserLoginData({
                                    ...userLoginData, [e.target.name]: e.target.value
                                })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                name='password'
                                value={userLoginData.password}
                                onChange={(e) => setUserLoginData({
                                    ...userLoginData, [e.target.name]: e.target.value
                                })}
                            />
                        </div>
                        <div className="mb-3">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                />
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="d-grid">
                            <button onClick={() => logStatus} type="submit" className="btn btn-primary mb-5">
                                Submit
                            </button>
                        </div>
                        <p className='text-center'>Don't have an email <a href='register'><span style={{ color: 'red' }}>register?</span></a></p>
                    </form>

                    {
                        <ReactJsAlert
                            status={status} // true or false
                            type={type} // success, warning, error, info
                            title={title}
                            Close={() => setStatus(false)} />
                    }
                </div>
            </div>

        </>

    )

}

export default Login;