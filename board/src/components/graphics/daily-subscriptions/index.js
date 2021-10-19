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

    


    setData(
        
        {

        
        
        labels: labels,
        datasets: [{

        label: "total de alunos" ,
       
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
                        padding: 10
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: 'Inscrição Diárias',
                            padding: {
                                top: 10,
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

export default  BarCharts