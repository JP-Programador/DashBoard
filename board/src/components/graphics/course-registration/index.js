import {useEffect, useState } from 'react'
import axios from 'axios';
import { Bar} from 'react-chartjs-2'


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
            'red',
            'blue',
            'green',
            'yellow',
            'orange'
        ],
        }
      ]

    });

  }
  useEffect(() => loadData(), []);

  return (
    <div>
        <Bar data={data}


        height={400}
        width={640}






        options={
          {
            maintainAspectRatio: false,
            layout: {
                padding: 2
            },
            
            plugins: {
                title: {
                    display: true,
                    text: 'Inscrições por Curso'

                },
            },
     
        }}
        />

    </div>
  )
}

export default BarCharts