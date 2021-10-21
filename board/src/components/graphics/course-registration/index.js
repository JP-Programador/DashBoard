import {useEffect, useState } from 'react'
import axios from 'axios';
import {Bar} from 'react-chartjs-2'


const BarCharts = () => {
  const [data, setData] = useState({label:[], datasets:[]});


 async function loadData() {
  const resp = await axios.get('https://insf-vestibular-2022.herokuapp.com/inscricoesPorCurso');

  const labels  = resp.data.map(x =>  `${x.curso} - ${x.periodo}`);
  const qtdData = resp.data.map(x => x.qtd);
   
  setData({
        labels: labels,
        datasets: [{
        label: `Total de Alunos`,
        data: qtdData,
        backgroundColor: [
          'rgba(204, 0, 0, 0.7)',
          'rgba(228, 86, 86, 0.7)',
          'rgba(0, 153, 0, 0.7)',
          'rgba(51, 250, 51, 0.7)',
          'rgba(204, 102, 0, 0.7)',
          'rgba(255, 128, 0, 0.7)',
          'rgba(204, 0, 102, 0.7)',
          'rgba(255, 255, 0, 0.7)',
          'rgba(255, 255, 102, 0.7)',
          'rgba(0, 51, 51, 0.7)',
          'rgba(0, 102, 102, 0.7)',
          'rgb(0, 191, 165)',
          'rgb(29, 233, 182)',
          'rgba(51, 51, 255, 0.7)',
          'rgb(26, 35, 126)',
          'rgb(40, 53, 147)',
          'rgb(48, 63, 159)',
          'rgb(57, 73, 171)',
          'rgb(63, 81, 181)',
          'rgb(92, 107, 192)',
          'rgb(121, 134, 203)',
          'rgb(159, 168, 218)',
          'rgb(197, 202, 233)',
          'rgb(209, 196, 233)',
          'rgba(51, 0, 25, 0.8)',
          'rgba(102, 0, 51, 0.8)'



          
        ],

        opacity: 0.1,
        borderWidth: 1,
        borderColor: 1
        }
      ]
      

    });

  }
  useEffect(() => loadData(), []);

  return (
    <div>
        <Bar data={data}


        height={700}
        width={640}






        options={
          {
            maintainAspectRatio: false,
            layout: {
                padding: 0
            },
            plugins: {
              title: {
                  display: true,
                  text: 'Inscrições por Curso',
                  padding: {
                      top: 20,
                      bottom: 30
                  },
                  font: {
                          size: 18
                  }

              },
              legend: {
                  display: false,
                 
              }
          
      }
          
        }}
        />

    </div>
  )
}

export default BarCharts