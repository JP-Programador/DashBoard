import { Doughnut } from 'react-chartjs-2'

const BarChart = () => {

return (
    <div>
        <Doughnut data={{
                    labels: ['Presencial','Online'],
                    datasets: [
                        {   label: 'On',
                            data: [12, 42],
                            backgroundColor: ['rgb(66, 234, 0)', '#6B1AF0']
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
                    text: 'Prova Presencial'
                }
            }
     
        }}
        />

    </div>
)

}

export default  BarChart