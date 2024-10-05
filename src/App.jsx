import { useState } from 'react'
import './App.css'

function App() {
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
      <button onClick={buscarDados} className="btn btn-primary">
        Pesquisar
      </button>

      {mostrarTabela && (
        <table className="table">
          <thead>
            <tr>
              <th>R.A</th>
              <th>Nome</th>
              <th>Nascimento</th>
              <th>Idade</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {agenda.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.nascimento}</td>
                <td>{item.idade} anos</td>
                <td>{item.cpf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  ) 
}

export default App 