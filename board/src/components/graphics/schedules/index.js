import { Bar} from 'react-chartjs-2'

const BarChart = () => {

return (
    <div>
        <Bar data={{
                    labels: ['Agendamentos', 'Agendamentos ao Dia', 'Agendarão (Não Compareceu)'],
                    datasets: [
                        {
                            label: 'Agendados',
                            data: [12],
                            backgroundColor: ['red'],
                        },

                        {
                            label: 'Expectativa',
                            data: [0, 24, 2,5],
                            backgroundColor: ['blue'],
                        },
                        {
                            label: 'Realidade',
                            data: [0, 4, 3],
                            backgroundColor: ['green'],
                        }
                        
                    ],
        }}


        height={500}
        width={200}





        options={{
            maintainAspectRatio: false,
            layout: {
                padding: 20
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Agendamentos'
                }
            }
     
        }}
        />

    </div>
)

}

export default  BarChart