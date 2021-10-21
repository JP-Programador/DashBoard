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
          'rgba(7, 172, 7, 0.7)',
          'rgba(51, 250, 51, 0.7)',
          'rgba(242, 121, 0, 0.7)',
          'rgba(255, 178, 0, 0.7)',
          'rgba(204, 0, 102, 0.7)',
          'rgba(255, 255, 0, 0.7)',
          'rgba(255, 255, 113, 0.7)',
          'rgba(0, 51, 51, 0.7)',
          'rgba(0, 255, 255, 0.7)', 
          'rgba(0, 153, 153, 0.7)',
          'rgba(0, 0, 204, 0.7)',
          'rgba(51, 51, 255, 0.7)',
          'rgba(51, 153, 255, 0.7)',
          'rgba(51, 0, 51, 0.7)',
          'rgba(102, 0, 102, 0.7)',
          'rgba(153, 0, 153, 0.7)',
          'rgba(204, 0, 204, 0.7)',
          'rgba(255, 0, 255, 0.7)',
          'rgba(255, 51, 255, 0.7)',
          'rgba(255, 102, 255, 0.7)',
          'rgba(255, 153, 255, 0.7)',
          'rgba(255, 204, 255, 0.7)',
          'rgba(255, 204, 229, 0.8)',
          'rgba(102, 0, 51, 0.8)',
          'rgba(153, 0, 76, 0.8)',



          
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
            
          
        }}
        />

    </div>
  )
}

export default BarCharts