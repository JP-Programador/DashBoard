import axios from 'axios'
import {useEffect, useState } from 'react'

import { Bar} from 'react-chartjs-2'


const BarCharts = () => {
     const [data, setData] = useState({label:[], datasets:[]});

async function loadData() {
    const resp = await axios.get('https://insf-vestibular-2022.herokuapp.com/inscricoesPorDia');
    const labels  = resp.data.map(x => x.data);
    const qtdData = resp.data.map(x => x.qtd);
    const total   = resp.data.reduce((prev, curr) => prev + curr.qtd, 0);


    setData({
        labels: labels,
        datasets: [{
            display: true,
            fontSize: 22,
        labels: 'total de alunos ' + total,
       
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
        ]
        }]
    
  });
}

useEffect(() => loadData(), []);

return (
    
    <div>
        <Bar data={data}


        height={400}
        width={440}






                options={
                    {
                    maintainAspectRatio: false,
                    layout: {
                        padding: 20
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Inscrição por dia'

                        },
                    
                }

            
        }}
        />

    </div>
)

}

export default  BarCharts