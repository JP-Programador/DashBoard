import axios from 'axios'
import {useEffect, useState } from 'react'

import { Bar} from 'react-chartjs-2'

const BarChart = () => {
    const [data, setData] = useState({label:[], datasets:[]});

    
async function loadData() {
    const resp = await axios.get('https://insf-vestibular-2022.herokuapp.com/inscricoesPorDia');
    const labels  = resp.data.map(x => x.data);
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
        borderColor: [
            'gray'
        ],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 3,
        hoverBorderColor: '#000'
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