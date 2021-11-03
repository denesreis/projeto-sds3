import DataTable from "components/dataTable";
import Footer from "components/footer";
import NavBar from "components/navBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container"> 
        <h1 className="text-primary">Olá Mundo</h1>

        <DataTable />
      </div>
      <Footer />
    </>
        );
}

        export default App;
