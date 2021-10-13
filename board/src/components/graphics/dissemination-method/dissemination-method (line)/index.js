import { Line} from 'react-chartjs-2'


const BarChart = () => {


    
return (

    
    
    <div>
        
        <Line data={{
                    labels: ['Familia', 'Ex Alunos', 'Amigos', 'Professores'],
                    datasets: [
                        {
                            label: 'Divulgação',
                            data: [10, 20, 35, 10],
                            backgroundColor: ['red'],
                            borderColor: ['red'],
                        }
                        
                    ],
        }}


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
                    text: 'Métodos de  Divulgação'

                },
            },

            animations: {
                tension: {
                  duration: 1000,
                  easing: 'linear',
                  from: 1,
                  to: 0,
                  loop: true
                }
              },  
     
              scales: {
                y: { // defining min and max so hiding the dataset does not change scale range
                  min: 0,
                  max: 100
                }
              }
        }}
        />

    </div>
)

}

export default  BarChart