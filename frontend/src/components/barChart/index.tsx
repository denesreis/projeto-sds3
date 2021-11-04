import Chart from 'react-apexcharts';

const BarChart = () => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = { //Mockdata é porque são dados fictícios
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    return (

        <Chart //passando os parametos para o componente Chart
            options = {{...options, xaxis: mockData.labels}} //...options indica para pegar o componete options como ele esta e depois acrescentar mais outras coisas/ xaxis = eixo X
            series = {mockData.series}
            type = "bar"
            height = "240"
        
        />

    );
}

export default BarChart;