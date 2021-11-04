import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }

    return (

        <Chart //passando os parametos para o componente Chart
            options = {{...options, labels: mockData.labels}} //...options indica para pegar o componete options como ele esta e depois acrescentar mais outras coisas/ xaxis = eixo X
            series = {mockData.series}
            type = "donut"
            height = "240"
        
        />

    );
}

export default DonutChart;