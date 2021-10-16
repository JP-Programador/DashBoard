import { Container } from "./styled"
import axios from "axios";

import {useEffect, useState } from 'react'
 

export default function Cabecalho () {

    const [InsTotal, setInsTotal] = useState(0);


    const [AgenTotal, setAgenTotal] = useState(0);



    async function loadData() {
        const dd = await axios.get('https://insf-vestibular-2022.herokuapp.com/inscricoesPorCurso');

        const r = await axios.get('https://insf-vestibular-2022.herokuapp.com/inscricoesPorDia');

//        const resp = await axios.get('https://insf-vestibular-2022.herokuapp.com/agendaramENaoVieram?dateMin=2021-10-13&dateMax=2021-10-21');


       let inscrito = dd.data.reduce((prev, curr) => prev + curr.qtd, 0);
       setInsTotal(inscrito);


       let agendamentos = r.data.reduce((prev, curr) => prev + curr.qtd, 0);
       setAgenTotal(agendamentos);

       //let ignorados = resp.data.map(x => x.qtd);
       //setIgnoTotal(ignorados);

    }

    const [clock, setClock] = useState('');



    function getCurrentTime() {
        let time = new Date().toLocaleTimeString();
        setClock(time);
    }

    useEffect(() => {
        loadData();
        window.setInterval(getCurrentTime, 1000);

      }, [])
    



    
   
    var meses = new Array("janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    let d = new Date();
    let dia = d.getDate();
    let x = d.getMonth();
    let mes = meses[x];


    return(
        <Container>
            <div className="box-info">
                <div className="messenger"> Olá, Teresa, Vamos Trabalhar !</div>
                <div className="box1">
                    <div className="dates"> 
                        <div> <img src="./assets/images/calendar.svg" alt="" /></div>
                        <div> <b> Hoje, </b> {dia} de {mes}</div>
                  
                    </div>
                    <div className="schedule">
                        <div className=""> <img src="./assets/images/relogio.svg" alt="" /> </div>
                        <div className="hours"> {clock} </div>
                    </div>
                </div>
            </div>
            
            <div className="box-card">
                <div className="card1">
                    <div className=""> <img src="./assets/images/user.svg" alt=""/></div>
                    <div className="car-name"> Total Cadastrados </div>
                    <div className="car-resul"> {InsTotal} </div>
                </div>
                <div className="card1">
                    <div className="">  <img src="./assets/images/google_calendar_.svg" alt=""/></div>
                    <div className="car-name"> Total de Agendamentos </div>
                    <div className="car-resul"> {AgenTotal} </div>
                </div>
                <div className="card1">
                    <div className="">  <img src="./assets/images/google_calendar_.svg" alt=""/></div>
                    <div className="car-name"> Agendamentos Ignorados </div>
                    <div className="car-resul"style={{color: 'red'}}> 0</div>
                </div>
                <div className="card1">
                    <div className="car-img"> <img src="./assets/images/check.svg" alt=""/></div>
                    <div className="car-name"> Prova Presencial </div>
                    <div className="car-resul" style={{color: '#6B1AF0'}}> 0 / <span>{InsTotal} </span> </div>
                </div>
            </div>
        </Container>
    )

}