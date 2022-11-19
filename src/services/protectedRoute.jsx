import { Outlet, Navigate, useNavigate } from "react-router-dom";


const ProtectedRoutes = ({ children }) => {
    const auth = localStorage.getItem('loggedin');
    const navigate = useNavigate();

    if (!auth) {
        return <Navigate to='/login' />
    }

    return children;
}


export default ProtectedRoutes;