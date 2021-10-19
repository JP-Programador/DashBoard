import { Link } from "react-router-dom"
import {Container} from "./styled"
export default function Menu() {
    return (
            <Container>
                <div className="kkk">
                <div className="log"> <img src="./assets/images/logo.png" alt="" width="500" height="130"/></div>
                <div className="name"> <h6> Instituto Social  <br/>Nossa Senhora de Fátima</h6></div>
                </div>
                <div className="navs">
                    <div className="nav1">
                        <div className="borda1"> </div>
                        <div className="name1"> <Link to="/"> <h3> DashBoard </h3> </Link> </div>
                    </div>
                    <div className="nav1">
                        <div className="borda2"> </div>
                        <div className="name2"> <Link to="/register"> <h3>  Inscrições</h3> </Link> </div>
                    </div>
                    <div className="nav1">
                        <div className="borda3"> </div>
                        <div className="name3"> <Link to="schedule"> <h3>Agendamentos</h3> </Link> </div>
                    </div>
                </div>    
            </Container>
    )
}   