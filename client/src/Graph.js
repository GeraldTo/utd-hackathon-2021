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
        console.log(xAxis)
        console.log(yAxis)
    }
    return {
        labels: xAxis,
        datasets: [
            {
                type: 'line',
                label: 'Dataset 1',
                borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
                borderWidth: 2,
                fill: false,
                data: yAxis
            },
        ],
    }
};

const options = {

};

const Graph = (props) => {


    const [data, setData] = useState(genData(props));

    useEffect(() => {
        setData(genData(props))
    }, [props]);

    return (
        <>
            <div className='header'>
                <h1 className='title'>Crazy Chart</h1>

            </div>
            <Line data={data} options={options} />
        </>
    );
};

export default Graph;
