import BarChart from 'components/barChart'
import DataTable from 'components/dataTable'
import DonutChart from 'components/donutChart'
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
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">
              Quantidade de Pedidos (No mês)
            </h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">
              Quantidade de Volumes (No mês)
            </h5>
            <DonutChart />
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
