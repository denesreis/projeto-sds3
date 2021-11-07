import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';
//Não usa o export porque vai ser usado somente neste modulo
type ChartData = {
    labels : string[];
    series : number[];

}

const DonutChart = () => {
    //chartData = nome do estado - setChartData nome da função que altera o valor do dado
    //ChartData>({labels:[] , series:[]} -> defino o tipo e passa um valor inicial
    const [chartData,setChartData] = useState<ChartData>({labels:[] , series:[]});

    useEffect(()=> {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
        //o código é equivalente a (response) => {console.log(response.data)} response é parametro da função then
        //como pe apenas um parametro não precisa do abre e fecha parenteses
        .then(response => {
            const data = response.data as SaleSum[]; //fazendo o cast convertendo a resposta em SaleSum definido em types/sale
            const myLabels = data.map(x => x.saleName);
            const mySeries = data.map(x => x.sum);
            //chartData = {labels : myLabels, series : mySeries} //Atribuindo os valores para o chartData
            setChartData({labels : myLabels, series : mySeries});
        });

    },[])

   /* //Importante  é let e não const porque vai mudar o valor 
    let chartData : ChartData = { labels:[] , series:[] }; //Instanciando do conteudo mais simples possível*/

    //Usando a crase digita tudo e as variáveis ficam entre chaves
    //FORMA ERRADA
    /*axios.get(`${BASE_URL}/sales/amount-by-seller`)
        //o código é equivalente a (response) => {console.log(response.data)} response é parametro da função then
        //como pe apenas um parametro não precisa do abre e fecha parenteses
        .then(response => {
            const data = response.data as SaleSum[]; //fazendo o cast convertendo a resposta em SaleSum definido em types/sale
            const myLabels = data.map(x => x.saleName);
            const mySeries = data.map(x => x.sum);
            //chartData = {labels : myLabels, series : mySeries} //Atribuindo os valores para o chartData
            setChartData({labels : myLabels, series : mySeries});
            console.log(chartData)
        });*/


   /* const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }*/
    
    const options = {
        legend: {
            show: true
        }
    }

    return (

        <Chart //passando os parametos para o componente Chart
            options = {{...options, labels: chartData.labels}} //...options indica para pegar o componete options como ele esta e depois acrescentar mais outras coisas/ xaxis = eixo X
            series = {chartData.series}
            type = "donut"
            height = "240"
        
        />

    );
}

export default DonutChart;