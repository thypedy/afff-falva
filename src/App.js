import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>O que é React?</h1>
        <p>React é uma biblioteca JavaScript para construção de interfaces de usuário.</p>

        <h1>O que é SPA?</h1>
        <p>SPA (Single-Page Application) é uma aplicação web que carrega uma única página HTML e atualiza o conteúdo dinamicamente à medida que o usuário interage com ela, sem a necessidade de recarregar a página inteira.</p>

        <h1>Para que serve o NPX no React?</h1>
        <p>NPX é uma ferramenta do Node.js que permite executar comandos de pacotes diretamente no terminal, sem precisar instalá-los globalmente no sistema. No React, o NPX pode ser usado para executar comandos relacionados ao gerenciamento de projetos, como criar um novo projeto com o create-react-app. </p>
      </header>

      <footer>
        <h1>Eric Yuji Ito rm 14293, William weile Feng rm13675</h1>
        <table className="table">
          <tr>
            <td>cor preferida</td>
          <td>roxo</td>
          <td>azul</td>
          </tr>
          
          <tr>
            <td>bairro que mora</td>
            <td>vila mariana</td>
            <td>brás</td>
          </tr>

          <tr><td>seu cantor/a preferido</td>
          <td>MC divertida</td>
          <td>MC pipokinha</td>
          </tr>

          <tr>
          <td>sua idade</td>
          <td>17</td>
          <td>18</td>
          </tr>

        </table>
      </footer>
    </div>
  );
}

export default App;
