import { Bar } from 'react-chartjs-2'

const BarChart = () => {

return (
    <div>
        <Bar data={{
                    labels: ['11/10', '12/10', '12/10', '14/10', '15/10', '16/10', '17/10', '18/10'],
                    datasets: [
                        {
                            label: 'Total de Alunos',
                            data: [12, 2, 32, 4, 7, 3, 9, 1],
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

export default  BarChart