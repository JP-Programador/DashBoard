import axios from 'axios'
import {useEffect, useState } from 'react'

import { Bar} from 'react-chartjs-2'


const BarCharts = () => {
     const [data, setData] = useState({label:[], datasets:[]});

     

async function loadData() {
    const resp = await axios.get('https://insf-vestibular-2022.herokuapp.com/inscricoesPorDia');
    const labels  = resp.data.map(x => x.data);
    const qtdData = resp.data.map(x => x.qtd);

    


    setData(
        
        {

        
        
        labels: labels,
        datasets: [{

        label: "total de alunos" ,
       
        data: qtdData,
        backgroundColor: [
            'rgba(132, 35, 35, 0.7)',
            'rgba(204, 0, 0, 0.7)',
            'rgba(204, 102, 0, 0.7)',
            'rgba(204, 204, 0, 0.7)',
            'rgba(102, 204, 0, 0.7)',
            'rgba(0, 204, 0, 0.7)',
            'rgba(0, 204, 102, 0.7)',
            'rgba(0, 204, 204, 0.7)',
            'rgba(0, 104, 204, 0.7)',
            'rgba(0, 0, 204, 0.7)',
            'rgba(102, 0, 204, 0.7)',
            'rgba(204, 0, 204, 0.7)',
            'rgba(204, 0, 102, 0.7)',
            'rgba(102, 0, 0, 0.7)',
            'rgba(102, 51, 0, 0.7)',
            'rgba(102, 102, 0, 0.7)',
            'rgba(51, 102, 0, 0.7)',
            'rgba(0, 102, 102, 0.7)',
            'rgba(51, 0, 102, 0.7)',
            'rgba(102, 51, 35, 0.7)',
            
          ],
  
          opacity: 0.1,
          borderWidth: 2,
          borderColor: 1
          }
        ]
        
  
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