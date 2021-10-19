import {useEffect, useState } from 'react'
import axios from 'axios';
import { Pie} from 'react-chartjs-2'


const BarCharts = () => {
     const [data, setData] = useState({label:[], datasets:[]});

async function loadData() {
    const resp = await axios.get('https://insf-vestibular-2022.herokuapp.com/comoconheceu');
    const labels  = resp.data.map(x => x.tipo);
    const qtdData = resp.data.map(x => x.qtd);


    setData({
        labels: labels,
        datasets: [{
        label: `#Como conheceu`,
        data: qtdData,
        backgroundColor: [
            'rgba(204, 0, 0, 0.7)',
            'rgba(258, 128, 0, 0.7)',
            'rgba(0, 0, 204, 0.7)',
            'rgba(102, 51, 0, 0.7)',
            'rgba(0, 204, 204, 0.7)',
        ],
    }
]
        
    
  });
}

useEffect(() => loadData(), []);

return (
    
    <div>
        <Pie data={data}


        height={500}
        width={540}






        options={
            {
            maintainAspectRatio: false,
            layout: {
                padding: 20
            },
            plugins: {

                datalabels: {
                    color: "black",
                    textAlign: "center",
                    
                  },

                title: {
                    display: true,
                    text: 'Métodos de  Divulgação',
                    padding: {
                        top: 10,
                        bottom: 30
                    },
                    font: {
                        size: 22
                    }
                },
                legend: {
                    position: 'right',
                    labels: {
                        fontColor: '#000',
                        font: {
                            size: 20
                          }, 
                    },
                
                   
                }
            },
     
        }}
        />

    </div>
)

}

export default  BarCharts