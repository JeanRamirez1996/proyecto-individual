import { Link } from "react-router-dom";
import Header from '../components/Header';

const Main = ()=> {

    return (
        <div className="container py-4">
            <Header/>
            <h4>QUICK OPTIONS</h4>
            
            <Link to={'/order'}><button className="btn btn-primary">New Order</button></Link>
                            
        </div>
    )
}
export default Main;