import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function Heatmap() {
  // Generate sample data for each day with 'summary'

  return (
    <div>
      <CalendarHeatmap
        startDate={new Date("2016-01-01")}
        endDate={new Date("2016-04-31")}
        values={[
          { date: "2016-01-01", count: 12 },
          { date: "2016-01-22", count: 122 },
          { date: "2016-01-30", count: 38 },
        ]}
        showWeekdayLabels={true}
        showMonthLabels={false}
        showOutOfRangeDays={false}
      />
    </div>
  );
}

export default Heatmap;
