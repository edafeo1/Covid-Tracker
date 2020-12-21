import React, {useState, useEffect } from 'react';
import Services from '../Services';
import {Line, Bar } from 'react-chartjs-2';
 

const Charts = () =>{

    const [dailyData, setDailyData] = useState([]); 

    useEffect(()=>{
        const apiData = async () => {
            setDailyData(await Services.fetchDailyData());
        }
        apiData();
    });

    const lineChart = (
        dailyData.length
        ? (<Line 
            data={{
            labels: dailyData.map(({date}) => date),
            datasets: [{
                 data: dailyData.map(({confirmed})=> confirmed),
                 label: 'Infected',
                 borderColor: '#3333ff',
                 backgroundColor: 'rgba(255, 0, 0, 0.5)',
                 fill: true,
            }, {
                 data: dailyData.map(({deaths})=> deaths),
                 label: 'Deaths',
                 borderColor: 'Red',
                 backgroundColor: 'rgba(255, 0, 0, 0.5)',
                 fill: true,
            }],
        }}
        />
        ) : null

    );
 
    return(
        <div className="">
            {lineChart}
            
        </div>
    )

}

export default Charts;