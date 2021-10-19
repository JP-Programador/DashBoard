import axios from 'axios'
import { useEffect, useState } from 'react';
import { Line} from 'react-chartjs-2'


const BarChart = () => {
    const [data, setData] = useState({label:[], datasets:[]});


    async function loadData() {
        const resp = await axios.get('https://insf-vestibular-2022.herokuapp.com/comoconheceu');
        const labels  = resp.data.map(x => x.tipo);
        const qtdData = resp.data.map(x => x.qtd);
    
        setData({
            labels: labels,
            datasets: [{
            label: `Total de Alunos`,
            data: qtdData,
            backgroundColor: [
                '#FF00D5',
                '#00D5FF',
                '#64569E',
                '#FF00D5',
                '#137A8E'
            ],
            borderColor: [
                '#994CBA',
            ],
        borderWidth: 2,            
            }]
        });
    }

    useEffect(() => loadData(), []);

        
    return (
            <Line data={data}
                height={500}
                width={200}
                options={
                    {
                    maintainAspectRatio: false,
                    layout: {
                        padding: 20
                    },
                    plugins: {
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
                            display: false,
                           
                        }
                    },
                
            
                    
                }}
                />
    )

}


export default  BarChart