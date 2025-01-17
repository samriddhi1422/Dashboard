import React from 'react'

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);  

function BarChart() {
    const data = {
        labels: ['Product-A', 'Product-B', 'Product-C', 'Product-D'], 
        datasets: [
          {
            label: 'sales',
            data: [30, 50, 20, 40], 
            backgroundColor: [
             
              'rgb(128, 192, 232)', 
            
            ],
            
           
          },
          {
            label:'Profit',
            data:[20,40,10,30],
            backgroundColor: [
                'rgb(99, 107, 255)', 
               
              ],
             
             
          },
          {
            label:'Loss',
            data:[30,10,20,40],
            backgroundColor: [
             
                'rgb(131, 132, 207)', 
             
              ],
             
             
          }
        ],
      };

      const options = {
        responsive: true, 
        plugins: {
          legend: {
            display: true, 
            position: 'top', 
          },
          title: {
            display: true, 
            text: 'Products Performance'
          },
        },
    }

  return (
    <div>
         <div>
      <Bar data={data} options={options} />
    </div>
      
    </div>
  )
}

export default BarChart
