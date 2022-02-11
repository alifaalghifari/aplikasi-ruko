import React from "react";
import { Bar, Chart } from 'react-chartjs-2'
// import Chart from 'chart.js'
// import ChartDataLabels from 'chartjs-plugin-datalabels'
// Chart.register(ChartDataLabels)
class Penjualan extends React.Component {
    render() {
        return (
            <div>
                <div className="h-50">
                    <div className="w-50">
                        <Bar
                            data={{
                                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                datasets: [{
                                    label: 'Pendapatan',
                                    data: [12, 19, 3, 5, 2, 3],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(255, 159, 64, 0.2)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        'rgba(255, 159, 64, 1)'
                                    ],
                                    borderWidth: 1
                                }]
                            }}
                            options={{
                                maintainAspectRatio: false
                            }}
                            height={300}
                            width={50}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Penjualan