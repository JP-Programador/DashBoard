import axios from 'axios'
import {useEffect, useState } from 'react'

import { Bar, Chart} from 'react-chartjs-2'


const BarCharts = () => {
     const [data, setData] = useState({label:[], datasets:[]});

     

async function loadData() {
    const resp = await axios.get('https://insf-vestibular-2022.herokuapp.com/inscricoesPorDia');
    const labels  = resp.data.map(x => x.data);
    const qtdData = resp.data.map(x => x.qtd);
    const total   = resp.data.reduce((prev, curr) => prev + curr.qtd, 0);

    


    setData(
        
        {

        
        
        labels: labels,
        datasets: [{

        labels: "total de alunos"  + total,
       
        data: qtdData,
        backgroundColor: [
            'maroon',
            'red',
            'coral',
            'gold',
            'khaki',
            'olive',
            'green',
            'lime',
            'teal',
            'aqua',
            'turquoise',
            'navy',
            'blue',
            'purple',
            'violet',
            'beige',
            'sienna',
            'chocolate',
            'plum'
        ],
        borderColor: [
            'gray'
        ],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 4,
        hoverBorderColor: '#000'

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
                            text: 'Inscrição por dia',
                            fontSize: 22

                        },
                        legend: {
                            position: 'left',
                            labels: {
                                fontColor: '#000'
                            }
                        }
                    
                }

            
        }}
        />

    </div>
)

}

export default  BarCharts