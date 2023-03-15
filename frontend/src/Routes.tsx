import Dashboard from 'pages/Dashboard'
import DashboardPedidoExpedicao from 'pages/DashboardPedidoExpedicao'
import Home from 'pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard">
          <DashboardPedidoExpedicao />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
