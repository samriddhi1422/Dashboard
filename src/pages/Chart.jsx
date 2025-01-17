import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    axios
      .get('https://jsonplaceholder.typicode.com/posts') 
      .then((response) => {
       
        const ids = response.data.slice(0, 6).map((item) => item.id);

        setChartData({
          labels: ['Item-1' ,'Item-2','Item-3','Item-4','Item-5'], 
          datasets: [
            {
              label: 'Sample Data',
              data: ids,
              borderColor: 'rgb(3, 117, 117)',
              backgroundColor: 'rgba(7, 148, 148, 0.2)',
              tension: 0.2,
              pointBackgroundColor: 'rgba(7, 148, 148, 0.2)'
            },
          ],
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2></h2>
      <Line data={chartData} options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart From API',
          },
        },
      }} />
    </div>
  );
};

export default Chart;
