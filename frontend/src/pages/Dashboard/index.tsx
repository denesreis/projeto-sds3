import BarChart from "components/barChart";
import DataTable from "components/dataTable";
import DonutChart from "components/donutChart";
import Footer from "components/footer";
import NavBar from "components/navBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">DashBoard de Vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas a Vendas</h5>
                        <DonutChart />
                    </div>

                </div>
                <div className="py-3">
                    <h2 className="text-primary"> Todas as Vendas</h2>

                </div>



                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;