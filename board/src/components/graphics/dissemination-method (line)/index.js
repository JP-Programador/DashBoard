import { Bar} from 'react-chartjs-2'


const BarChart = () => {


    
return (

    
    
    <div>
        
        <Bar data={{
                    labels: ["Informática Básica - Execel"," mídias sociais","Administração","Eletricista Instalador","ingles semipresencial( noturno)", "ingles melhor idade","ingles avançado", "ingles Pré-avançado", "ingles intermediario(noturno)", "ingles Basico (noturno)", "ingles Basico - intermediario (diurno)", "Qualificação em Eletromecânica de Autos", "Técnico em Administração", "Qualificação em Eletrotécnica", "Técnico em Secretariado", "Técnico em Informática", "Técnico em Comunicação Visual" ],
                    datasets: [
                        {
                            label: 'Incrições por curso',
                            data: [10, 20, 35, 10, 20, 40, 10, 20, 10, 20, 35, 10, 20, 40, 10, 20, 20],
                            backgroundColor: [  'rgb(0, 138, 14)'],
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