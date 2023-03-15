import Footer from 'components/footer'
import NavBar from 'components/navBar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">SCA Sistemas</h1>
          <p className="lead">Acompanhamento de análise de desempenho</p>
          <hr />
          <p>Apresentação de Dashboard.</p>
          <Link className="btn btn-primary btn-lg" to="/dashboard">
            Dashboard Controle de Expedição
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
