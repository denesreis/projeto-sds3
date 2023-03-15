import './dashboardPedidoExpedicao.css'
import BarChart from 'components/barChart'
import BarChartPedido from 'components/barChartPedido'
import DataTable from 'components/dataTable'
import DonutChart from 'components/donutChart'
import DonutChartPedido from 'components/donutChartPedido'
import Footer from 'components/footer'
import NavBar from 'components/navBar'
import TabelaPedido from 'components/tabelaPedido'

const DashboardPedidoExpedicao = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">DashBoard de Pedidos Expedição</h1>
        <div className="row px-3">
          <div className="col-sm-12">
            <h4 className="text-center text-secondary">
              Quantidade de Pedidos Embalados (No mês)
            </h4>
            <BarChartPedido />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary"> Relação por Funcionário</h2>
        </div>
        <TabelaPedido />
      </div>
      <Footer />
    </>
  )
}

export default DashboardPedidoExpedicao
