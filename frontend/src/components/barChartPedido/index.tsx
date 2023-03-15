import axios from 'axios'
import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { PedidoExpedicao } from 'types/pedido'
import { SaleSucess } from 'types/sale'
import { round } from 'utils/format'
import { BASE_URL } from 'utils/requests'

type SeriesData = {
  name: string
  data: number[]
}

type ChartData = {
  labels: {
    categories: string[]
  }
  series: SeriesData[]
}

const BarChartPedido = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: '',
        data: [],
      },
    ],
  })

  useEffect(() => {
    //axios.get(`${BASE_URL}/sales/sucess-by-seller`)
    axios(
      'http://bluedot-ti.com.br/dashboard-0.1/pedidosexpedicao/somatorio-diario-por-funcionario',
    ).then((response) => {
      const data = response.data as PedidoExpedicao[] //fazendo o cast convertendo a resposta em SaleSum definido em types/sale
      const myLabels = data.map((x) => x.nome)
      const mySeries = data.map((x) => x.embalado)
      setChartData({
        labels: {
          categories: myLabels,
        },
        series: [
          {
            name: 'Qtd Embalados',
            data: mySeries,
          },
        ],
      })
    })
  }, [])

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  }

  return (
    <Chart //passando os parametos para o componente Chart
      options={{ ...options, xaxis: chartData.labels }} //...options indica para pegar o componete options como ele esta e depois acrescentar mais outras coisas/ xaxis = eixo X
      series={chartData.series}
      type="bar"
      height="240"
    />
  )
}

export default BarChartPedido
