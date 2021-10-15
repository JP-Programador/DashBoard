
import loadVestData from './datajk'

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';


export default function Grafico() {
  const [data, setData] = useState({label:[], datasets:[]});

  async function loadData() {
    let data = await loadVestData();
    setData(data);
  }

  useEffect(() => {
    loadData();
  }, [])


  return (
    <div>
      <h1> Gráfico </h1>
      <button onClick={loadData}> Atualizar </button>

      <div style={{width: '70%'}}>
        <Bar data={data}  />
      </div>

    </div>
  )
}