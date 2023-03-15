import axios from 'axios'
import PaginationPedido from 'components/pedidoExpedicaoPaginado'
import { useEffect, useState } from 'react'
import { PedidoPaginado } from 'types/pedido'
import { BASE_URL_PEDIDO } from 'utils/requests'

const TabelaPedido = () => {
  const [activePage, setActivePage] = useState(0) ///Não precisa parametrizar inicia com 0

  const [page, setPage] = useState<PedidoPaginado>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  })
  const [totalTimesInSeconds, settotalTimesInSeconds] = useState(1 * 60)

  const minutes = Math.floor(totalTimesInSeconds / 60)
  const seconds = totalTimesInSeconds % 60

  useEffect(() => {
    if (totalTimesInSeconds === 0) {
      settotalTimesInSeconds(1 * 60)

      axios
        .get(
          //`${BASE_URL_PEDIDO}}/pedidosexpedicao/somatorio-diario-por-funcionario-paginado?page=${activePage}&size=20&sort=date,desc`,
          //'http://localhost:8080/pedidosexpedicao/somatorio-diario-por-funcionario-paginado',
          'http://bluedot-ti.com.br/dashboard-0.1/pedidosexpedicao/somatorio-diario-por-funcionario-paginado',
        )
        .then((response) => {
          setPage(response.data) //Pega o corpo da resposta e joga no page porque tem a mesma estrutura do objeot que a api responde
        })
      return
    } else {
      setTimeout(() => {
        settotalTimesInSeconds(totalTimesInSeconds - 1)
      }, 1000)
    }
  }, [totalTimesInSeconds])

  useEffect(() => {
    axios
      .get(
        //`${BASE_URL_PEDIDO}}/pedidosexpedicao/somatorio-diario-por-funcionario-paginado?page=${activePage}&size=20&sort=date,desc`,
        'http://bluedot-ti.com.br/dashboard-0.1/pedidosexpedicao/somatorio-diario-por-funcionario-paginado',
        //'http://localhost:8080/pedidosexpedicao/somatorio-diario-por-funcionario-paginado',
      )
      .then((response) => {
        setPage(response.data) //Pega o corpo da resposta e joga no page porque tem a mesma estrutura do objeto que a api responde
      })
  }, [activePage])

  const changePage = (index: number) => {
    setActivePage(index)
  }
  return (
    <>
      <PaginationPedido page={page} onPageChange={changePage} />
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Quantidade de Pedidos</th>
              <th>Quantidade de Volume</th>
              <th>Total Peso Líquido</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map((item) => (
              <tr key={item.nome}>
                <td>{item.nome}</td>
                <td>{item.embalado}</td>
                <td>{item.volume}</td>
                <td>{item.pesoLiquido.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h6 className="text-center py-1">
          Próxima atualização começa em: {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')} minutos
        </h6>
      </div>
    </>
  )
}

export default TabelaPedido
