import axios from 'axios'
import {useEffect, useState } from 'react'

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
        borderColor: [
            'gray'
        ]
        }]
    
  });
}

useEffect(() => loadData(), []);

return (
    
    <div>
        <Pie data={data}


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
                    text: 'Métodos de  Divulgação'

                },
            },
     
        }}
        />

    </div>
)

}

export default  BarCharts