import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexRound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [29, 44, 19, 7, 66],
      options: {
        chart: {
          type: "donut",
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 400,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <>
        <div className="chart-container">
          <ReactApexChart
            series={this.state.series}
            type="donut"
            height={450}
            width={450}
            options={this.state.options}
          />
        </div>
      </>
    );
  }
}

export default ApexRound;
