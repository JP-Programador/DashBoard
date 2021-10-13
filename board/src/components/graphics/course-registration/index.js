import { Bar} from 'react-chartjs-2'

const BarChart = () => {

return (
    <div>
        <Bar data={{
                    labels: ['Adm', 'Informatica', 'Inglês', 'Com. Visual', 'EletroTecnica'],
                    datasets: [
                        {
                            label: 'Manhã',
                            data: [12, 2, 32, 4],
                            backgroundColor: ['red'],
                            borderColor: ['blue']
                        },

                        {
                            label: 'Tarde',
                            data: [15, 24, 2,5],
                            backgroundColor: ['blue'],
                        },
                        {
                            label: 'Noite',
                            data: [5, 4, 3],
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
                    text: 'Inscrições por Curso'
                }
            }
     
        }}
        />

    </div>
)

}

export default  BarChart