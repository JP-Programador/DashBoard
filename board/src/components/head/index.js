import { Container } from "./styled"

export default function Cabecalho () {
    return(
        <Container>
            <div className="box-info">
                <div className="messenger">Bom dia, Usuário </div>
                <div className="box1">
                    <div className="dates"> 
                        <div> <img src="./assets/images/calendar.svg" alt="" /></div>
                        <div> Hoje, 8 de Setembro</div>
                    </div>
                    <div className="schedule">
                        <div className=""> <img src="./assets/images/relogio.svg" alt="" /> </div>
                        <div className="hours"> 21:08 </div>
                    </div>
                </div>
            </div>
            
            <div className="box-card">
                <div className="card1">
                    <div className=""> <img src="./assets/images/user.svg" alt=""/></div>
                    <div className="car-name"> Total de Inscrições </div>
                    <div className="car-resul"> 0 </div>
                </div>
                <div className="card1">
                    <div className="">  <img src="./assets/images/google_calendar_.svg" alt=""/></div>
                    <div className="car-name"> Total de Agendamentos </div>
                    <div className="car-resul"> 0 </div>
                </div>
                <div className="card1">
                    <div className="">  <img src="./assets/images/google_calendar_.svg" alt=""/></div>
                    <div className="car-name"> Agendamentos Ignorados </div>
                    <div className="car-resul"style={{color: 'red'}}> 0 </div>
                </div>
                <div className="card1">
                    <div className="car-img"> <img src="./assets/images/check.svg" alt=""/></div>
                    <div className="car-name"> Prova Presencial </div>
                    <div className="car-resul" style={{color: '#6B1AF0'}}> 0 / <span>100</span> </div>
                </div>
            </div>
        </Container>
    )

}