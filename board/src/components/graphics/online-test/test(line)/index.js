import { Bar } from 'react-chartjs-2'

const BarChart = () => {

return (
    <div>
        <Bar data={{
                    labels: ['Presencial','Online'],
                    datasets: [
                        {   label: 'Provas',
                            data: [12, 42],
                            fill: true,
                        }
                        
                    ],
        }}


        height={400}
        width={546}





        options={{

            elements: {
                line: {
                    borderWidth: 4,
                    borderColor: 1
                }
              },

            maintainAspectRatio: false,
            layout: {
                padding: 20
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Prova Presencial',
                    padding: 10
                },
               
            },
        
     
        }}
        />

    </div>
)

}

export default  BarChart