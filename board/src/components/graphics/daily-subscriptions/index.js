import { Bar } from 'react-chartjs-2'
import axios from 'axios';


export default async function loadData() {
const resp = axios.get('https://insf-vestibular-2022.herokuapp.com/inscricoesPorCurso');
const labels  = resp.data.map(x => x.data);
const Qtddata = resp.data.map(x => x.qtd)
return (
    <div>
        <Bar data={{
                    labels: labels,
                    datasets: [
                        {
                            label: 'Total de Alunos',
                            data: Qtddata,
                            backgroundColor: ['red'],
                            borderColor: ['red']
                        }
                        
                    ],
        }}


        height={500}
        width={60}





        options={{
            maintainAspectRatio: false,
            layout: {
                padding: 20
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Inscrições Diárias'
                }
            }
     
        }}
        />

    </div>
)

}

