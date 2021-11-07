import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSucess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type SeriesData = {
    name : string;
    data: number[];
};

type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}

const BarChart = () => {

    const [chartData,setChartData] = useState<ChartData>({ 
            labels: {
                categories: []
            },
            series: [
                {
                    name: "",
                    data: []                   
                }
            ]
        });

        useEffect(()=> {
            axios.get(`${BASE_URL}/sales/sucess-by-seller`)
            .then(response => {
                const data = response.data as SaleSucess[]; //fazendo o cast convertendo a resposta em SaleSum definido em types/sale
                const myLabels = data.map(x => x.seelerName);
                const mySeries = data.map(x => round((x.deals / x.visited)*100,1));
                setChartData(
                    { 
                        labels: {
                            categories: myLabels
                        },
                        series: [
                            {
                                name: "% de Sucesso",
                                data: mySeries                  
                            }
                        ]
                    }

                );
            });      
        },[])             


    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    /*const mockData = { //Mockdata é porque são dados fictícios
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };*/

    return (

        <Chart //passando os parametos para o componente Chart
            options = {{...options, xaxis: chartData.labels}} //...options indica para pegar o componete options como ele esta e depois acrescentar mais outras coisas/ xaxis = eixo X
            series = {chartData.series}
            type = "bar"
            height = "240"
        
        />

    );
}

export default BarChart;