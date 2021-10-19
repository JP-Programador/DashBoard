import axios from 'axios'
import {useEffect, useState } from 'react'

import { Bar} from 'react-chartjs-2'

const BarChart = () => {
    const [data, setData] = useState({label:[], datasets:[]});

    
async function loadData() {
    const resp = await axios.get('https://insf-vestibular-2022.herokuapp.com/');
    const labels  = resp.data.map(x => x.data);
    const qtdData = resp.data.map(x => x.qtd);


    setData({
        labels: labels,
        datasets: [{
        label: `Total de Alunos`,
        data: qtdData,
        backgroundColor: [
            '#FF0000',
          '#FF8000',
          '#FFFF00',
          '#80FF00',
          '#00FF00',
          '#00FF80',
          '#00FFFF',
          '#0080FF',
          '#0000FF',
          '#7F00FF',
          '#7F00FF',
          '#FF00FF',
          '#FF007F',
          '#FF007F',
          '#330019',
          '#663300',
          '#FF9999',
          '#004C99',
          '#660000',
          '#FF99CC'
        ],
        borderWidth: 4,
        borderColor: 1
        }]
    
  });
}

useEffect(() => loadData(), []);


return (
    <div>
        <Bar data={data}


        height={500}
        width={200}





        options={{
            maintainAspectRatio: false,
            layout: {
                padding: 20
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Agendamentos',
                    padding: {
                        top: 10,
                        bottom: 30
                    },
                    font: {
                            size: 18
                    }
                }
            }
     
        }}
        />

    </div>
)

}

export default  BarChart