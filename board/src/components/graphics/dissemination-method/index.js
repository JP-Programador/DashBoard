import { Bar} from 'react-chartjs-2'


const BarChart = () => {


    
return (

    
    
    <div>
        
        <Bar data={{
                    labels: ['08/10', '09/10', '10/10', '11/10', '12/10', '13/10', '14/10', '15/10'],
                    datasets: [
                        {
                            label: 'Incrições Diárias',
                            data: [10, 20, 35, 10, 20, 40, 10, 20],
                            backgroundColor: ['red'],
                            borderColor: ['red']
                            
                        }
                        
                    ],
        }}


        height={500}
        width={60}





        options={
            {
            maintainAspectRatio: false,
            layout: {
                padding: 20
            },
            plugins: {
                title: {
                    display: true,
                    
                },
            },

           
     
        }}
        />

    </div>
)

}

export default  BarChart