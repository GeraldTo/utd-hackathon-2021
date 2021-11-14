import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const rand = () => Math.floor(Math.random() * 255);


const genData = function (props) {
    if (props.value !== undefined) {

        var x = props.value.revenueStructure;
        var xAxis = [];
        var yAxis = [];
        for (let i = 0; i < x.length; i++) {
            xAxis.push(x[i].flowPerDay);
        }
        for (let i = 0; i < x.length; i++) {
            yAxis.push(x[i].dollarsPerDay);
        }

    }
    return {
        labels: xAxis,
        datasets: [
            {
                type: 'line',
                label: 'Current Dataset',
                borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
                borderWidth: 2,
                fill: false,
                data: yAxis
            },
        ],
    }
};

const options = {
    scales: {
        xAxes: [{
            type: 'time',
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Date'
            },
            ticks: {
                major: {
                    fontStyle: 'bold',
                    fontColor: '#FF0000'
                }
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'value'
            }
        }]
    }
};

const Graph = (props) => {


    const [data, setData] = useState(genData(props));

    useEffect(() => {
        setData(genData(props))
    }, [props]);

    return (
        <>
            <div className='header'>
                <h2 className='title'>{props.value.name}</h2>

            </div>
            <Line data={data} options={options} />
        </>
    );
};

export default Graph;
