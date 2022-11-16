import { useParams } from 'react-router-dom';
import './style.css'


const Forecast = () => {

    let {name} = useParams();

    

    return (

        <>

        <h1>{`This is my name ${name}`}</h1>
        <h1>forecast page</h1>

        </>
    )

}

export default Forecast ;