import { Pie} from 'react-chartjs-2'


const BarChart = () => {


    
return (

    
    
    <div>
        
        <Pie data={{
                    labels: ['Familia', 'Ex Alunos', 'Amigos', 'Professores'],
                    datasets: [
                        {
                            label: 'Divulgação',
                            data: [10, 20, 35, 10],
                            backgroundColor: ['red', 'blue', 'black', 'green', 'yellow'],
                        }
                        
                    ],
        }}


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

export default  BarChart