import { useState } from 'react'
import './App.css'

export default function App() {
  const [agenda, setAgenda] = useState([])
  const [mostrarTabela, setMostrarTabela] = useState(false)


  const buscarDados = () => {
    fetch('http://localhost:5000/agenda')
      .then((response) => response.json())
      .then((data) => {
        setAgenda(data)
        setMostrarTabela(true)
      })
      .catch((error) => {
        console.error('Erro ao buscar a agenda:', error)
      })
  }

  return (
    <div>
      <h1>Agenda</h1>
      <button onClick={buscarDados}>
        Pesquisar
      </button>

      {mostrarTabela && (
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Nascimento</th>
            <th>Idade</th>
            <th>CPF</th>
            <th>Telefone</th>
           </tr>
         </thead>
        <tbody>
          {agenda.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.nome}</td>
              <td>{el.nascimento}</td>
              <td>{el.idade}</td>
              <td>{el.cpf}</td>
              <td>{el.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
    )
}