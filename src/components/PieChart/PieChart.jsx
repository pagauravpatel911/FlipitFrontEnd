import "./PieChart.css"
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import ViewerTable from "../ViewerTable/ViewerTable";

const color = ["#ffd380", "#ffa600", "#ff8531", "#ff6361", "#bc5090", "#8a508f", "#2c4875", "#003f5c", "#00202e"]

const DUMMY_DATA = [
    {
        id: 1,
        city: "Mumbai",
        count: 100,
    },
    {
        id: 2,
        city: "Pune",
        count: 90,
    },
    {
        id: 3,
        city: "Dehli",
        count: 80,
    },
    {
        id: 4,
        city: "Noida",
        count: 70,
    },
    {
        id: 5,
        city: "Bangalore",
        count: 60,
    },
    {
        id: 6,
        city: "Chennai",
        count: 50,
    },
    {
        id: 7,
        city: "Bhopal",
        count: 40,
    },
    {
        id: 8,
        city: "Paipur",
        count: 30,
    },
    {
        id: 9,
        city: "Kochi",
        count: 20,
    },
    {
        id: 10,
        city: "Agra",
        count: 10
    }
]

const PieChart = (props) => {
    const i = 1
    const cities = DUMMY_DATA.map(data => {
        return {
            name: data.city,
            y: data.count
        }
    })
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Top Viewers Of Documents'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Likes',
            colorByPoint: true,
            data: cities
        }]
    }
    return (
        <div className="outer-container">
            <div className="pie-chart">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />
            </div>
            <div className="view-table">
                <ViewerTable data={cities}/>   
            </div>
        </div>
    )
}

export default PieChart;