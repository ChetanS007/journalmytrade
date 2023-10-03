import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import "./heatmap.css";

function subtractDaysFromDate(inputDate) {
  const date = new Date(inputDate); // Create a new Date object based on the input date
  date.setDate(date.getDate() - 1); // Subtract the specified number of days

  return date;
}
function getMonthName(monthDate) {
  const date = new Date(monthDate);

  // Get the month from the date
  const month = date.getMonth();
  // Add 1 to the month to adjust for zero-based indexing (January is 0)
  const monthNumber = month + 1;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[monthNumber - 1];
}
function Heatmap({ startDate, endDate, values }) {
  // Generate sample data for each day with 'summary'

  return (
    <>
      <div>{getMonthName(startDate)}</div>
      <CalendarHeatmap
        startDate={subtractDaysFromDate(startDate)}
        endDate={endDate}
        values={[
          { date: "2023-05-01", count: -11 },
          { date: "2023-07-22", count: 122 },
          { date: "2023-10-03", count: 0 },
        ]}
        showWeekdayLabels={false}
        showMonthLabels={false}
        showOutOfRangeDays={false}
        onClick={(value) => console.log(value)}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          if (value.count > 0) {
            return `color-scale-1`;
          } else if (value.count < 0) {
            return `color-scale-2`;
          } else {
            return `color-scale-3`;
          }
        }}
        gutterSize={2}
      />
    </>
  );
}

export default Heatmap;
