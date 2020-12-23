import React, {useState, useEffect } from 'react';
import Services from '../Services';
import {Line, Bar } from 'react-chartjs-2';
import styles from './Charts.module.css';
 

const Charts = ({ data: {confirmed, deaths, recovered}, country}) =>{
   console.log(confirmed);
    const [dailyData, setDailyData] = useState([]); 

    useEffect(()=>{
        const apiData = async () => {
            setDailyData(await Services.fetchDailyData());
        }
        apiData();
    }, []);

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

    const barChart = (
        confirmed
        ?(
            <Bar
            data={{
                labels: ['infected', 'Recovered', 'Deaths'],
                datasets: [{
                label: 'People', 
                backgroundColor: [ 
                    'blueviolet',
                    'blue',
                    'red'
                ],
                data:[ confirmed, recovered, deaths]
            }],
            }}
            options={{
                legend: { display: false},
                title: { display: true, text: `covid status in ${country}`},
            }}
            />
        ) : null
    );
 
    return(
        <div className={styles.container}>
            { country ? barChart : lineChart}
            
        </div>
    )

}

export default Charts;