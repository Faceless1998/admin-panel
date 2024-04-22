//ApexChart.js

import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            series:[{
                data:[46,19,27,24,11,15,29,30,35,22,12,28]
            }],
            options:{
                chart:{
                    height:450,
                    type:"bar",
                    events:{
                        click: function(chart,w,e){
                            console.log(chart,w,e)
                        }
                    }
                },
                colors:['#008FFB'],
                plotOptions:{
                    bar:{
                        columnWidth:'70%',
                        distributed:true,
                    }
                },
                dataLabels:{
                    enabled:false
                },
                legend:{
                    show:false
                },
                xaxis:{
                    categories:[
                        'იანვარი',
                        'თებერვალი',
                        'მარტი',
                        'აპრილი',
                        'მაისი',
                        'ივნისი',
                        'ივლისი',
                        'აგვისტო',
                        'სექტემბერი',
                        'ოქტომბერი',
                        'ნოემბერი',
                        'დეკემბერი',
                    ],
                    labels:{
                        style:{
                            fontSize:'12px'
                        }
                    }
                }
            }

        }
    }

render(){
    return(
        <>
        <div className="chart-container">
            <ReactApexChart options={this.state.options} series={this.state.series} type="bar"  height={450} width={450}/>
        </div>
        </>
    )
}

}

export default ApexChart;