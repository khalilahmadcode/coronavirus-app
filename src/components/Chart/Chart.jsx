import React, {useState, useEffect} from 'react'
import './Chart.module.css'
import { fetchDailyData } from '../../api';
import {Line, Bar} from 'react-chartjs-2'

const  Charts = ({ data:{confirmed, recovered, deaths}, country }) => {
    const [dailyData, setDailyData] = useState([]); 

    useEffect (() => {
        const fetchAPI = async () => {
            const dailyDatas = await fetchDailyData();
            setDailyData(dailyDatas)
        }

        fetchAPI();
    }, []);

    /** Line Chart for global */
    const lineChart = (
        dailyData.length
        ? (
        <Line
            data = {{
                labels: dailyData.map(({date}) => date), 
                datasets: [{
                    data: dailyData.map(({confirmed})=>confirmed),
                    label: 'Infected', 
                    borderColor: '#3333ff', 
                    fill: true,
                }, {
                    data: dailyData.map(({deaths})=>deaths),
                    label: 'Deaths', 
                    borderColor: 'red', 
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }]
            }}
        />
        ) : null
    );

    /** bar chart for eact country */ 
    const barGraph = (
        confirmed ? (
            <Bar 
                data ={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label:'People', 
                        backgroundColor: [
                            'rgb(27, 161, 161)', 
                            'rgb(75, 192, 80)', 
                            'rgb(192, 75, 75)'
                        ], 
                        data:[confirmed.value, recovered.value, deaths.value]
                    }]
                }}

                options = {{
                    legend: {display: false}, 
                    title: {display:true, text: `Current state in ${country}`}
                }}
            />
        ) : null
    ); 

    return (
        <div className="container mt-5 mb-5">
            {country ? barGraph : lineChart}
        </div>
    )
}

export default Charts
