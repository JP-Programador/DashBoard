import {Container} from "./styled"
export default function Menu() {
    return (
            <Container>
                <div className="nav1">
                    <div className="borda1"> </div>
                    <div className="name1"> <h3> DashBoard </h3> </div>
                </div>
                <div className="nav1">
                    <div className="borda2"> </div>
                    <div className="name2"> <h3>  Inscrições</h3> </div>
                </div>
                <div className="nav1">
                    <div className="borda3"> </div>
                    <div className="name3"> <h3>Agendamentos</h3> </div>
                </div>
            </Container>
    )
}   