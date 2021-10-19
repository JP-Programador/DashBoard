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
            'red',
            'blue',
            'green',
            'yellow',
            'orange'
        ],
        borderWidth: 4,
        borderColor: 1
        }]
    
  });
}

useEffect(() => loadData(), []);

return (
    
    <div>
        <Pie data={data}


        height={400}
        width={640}






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
                        size: 18
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