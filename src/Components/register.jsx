import { useState } from 'react';
import '../Components/styles/login.css'
import { useNavigate } from 'react-router-dom';
import ReactJsAlert from "reactjs-alert"



const Register = () => {

    //Handel Register
    const navigate = useNavigate();
    const [registerInputs, setRegisterInputs] = useState({
        firstName: '',
        lastName: '',
        registerEmail: '',
        registerPassword: ''
    })

    const [status, setStatus] = useState(false);
    const [type, setType] = useState("error");
    const [title, setTitle] = useState("All fileds are requierd! ");

    const array = [];
    const user1 = { firstName: 'malek', lastName: 'saleh', registerEmail: 'malek@yahoo.com', registerPassword: '232334' }
    localStorage.setItem('users', JSON.stringify(array))


    
    //On submit for the form ------>
    const handelRegisterSumbit = (e) => {
        e.preventDefault();

        if(!registerInputs.firstName || !registerInputs.lastName || !registerInputs.registerEmail || !registerInputs.registerPassword){
            return setStatus(true)
        }
        //here we need to check the local storage data if exist
        const localData = JSON.parse(localStorage.getItem('users')) || [];

        let isExist = localData.find((e) => e.registerEmail === registerInputs.registerEmail)
        if (isExist) {
            return alert('This email is used')
        }
        array.push(registerInputs)
        localStorage.setItem('users', JSON.stringify(array));

        navigate('/about')

        return console.log('user registered successfully');
    }



    return (
        <>
            <div className="container login-logout-container col-md-4">
                <div className="signup-container d-flex justify-content-center">
                    <form onSubmit={handelRegisterSumbit} id='register' className='col-md-8 text-start'>
                        <h3>Sign Up</h3>
                        <div className="mb-3">
                            <label>First name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                                name='firstName'
                                value={registerInputs.firstName}
                                onChange={(e) => setRegisterInputs({
                                    ...registerInputs, [e.target.name]: e.target.value
                                })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" name='lastName'
                                value={registerInputs.lastName}
                                onChange={(e) => setRegisterInputs({
                                    ...registerInputs, [e.target.name]: e.target.value
                                })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email"
                                name='registerEmail'
                                value={registerInputs.registerEmail}
                                onChange={(e) => setRegisterInputs({
                                    ...registerInputs, [e.target.name]: e.target.value
                                })}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                                name='registerPassword'
                                value={registerInputs.registerPassword}
                                onChange={(e) => setRegisterInputs({
                                    ...registerInputs, [e.target.name]: e.target.value
                                })}
                            />
                        </div>
                        <div className="d-grid mb-2">
                            <button type="submit" className="btn btn-primary">
                                Sign Up
                            </button>
                        </div>
                        <p>Alredy registered <a href='/login'><span style={{color:'red'}}>Login?</span></a></p>

                        {<ReactJsAlert
                            status={status} // true or false
                            type={type} // success, warning, error, info
                            title={title}
                            Close={() => setStatus(false)}
                        />}
                    </form>
                </div>
            </div>
        </>
    )

}


export default Register;