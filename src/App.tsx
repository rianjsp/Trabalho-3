import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Menu de navegação usando Bootstrap */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Livros React</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Lista de Livros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dados">Dados do Livro</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Rotas */}
        <div className="container mt-4">
          <Route path="/" exact component={LivroLista} />
          <Route path="/dados" component={LivroDados} />
        </div>
      </div>  
    </Router>
  );
};

export default App;
