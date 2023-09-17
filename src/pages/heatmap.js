import React from 'react';
import CalendarHeatmap from 'reactjs-calendar-heatmap';


function Heatmap() {
  // Generate sample data for each day with 'summary'
  const generateData = () => {
    const data = [];
    const startDate = new Date('2023-01-01'); // Define your start date
    const endDate = new Date('2023-12-31');   // Define your end date

    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      data.push({
        date: currentDate.toISOString().split('T')[0], // Format date as "YYYY-MM-DD"
        count: Math.floor(Math.random() * 10), // Replace with your actual data
        summary: 'Some summary data', // Include a 'summary' property
      });

      // Increment the current date by one day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
  };

  const seriesData = generateData();

  return (
    <div id="calendar-heatmap">
      <CalendarHeatmap
        values={seriesData}
        startDate={new Date('2023-01-01')} // Replace with your desired start date
        endDate={new Date('2023-12-31')}   // Replace with your desired end date
      />
    </div>
  );
}

export default Heatmap;
