import { Container } from "./styled"

export default function Cabecalho () {
   
    var meses = new Array(["janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"])
    let d = new Date();
    let dia = d.getDate();
    let x = d.getMonth();
    let mes = meses[x];

    let horas = d.getHours();
    let minutos = d.getMinutes();
    let Segundos = d.getSeconds();
    let horario = horas + ":" + minutos + ":" + Segundos;

    return(
        <Container>
            <div className="box-info">
                <div className="messenger"> {horas > 4 && horas < 13 ? 'Bom dia' : 'Boa Tarde'}, Teresa</div>
                <div className="box1">
                    <div className="dates"> 
                        <div> <img src="./assets/images/calendar.svg" alt="" /></div>
                        <div> <b> Hoje</b>, {dia} de {mes}</div>
                    </div>
                    <div className="schedule">
                        <div className=""> <img src="./assets/images/relogio.svg" alt="" /> </div>
                        <div className="hours"> {horario} </div>
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