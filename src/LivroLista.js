import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

const LinhaLivro = ({ livro, onExcluir, controleEditora }) => {
  const [nomeEditora, setNomeEditora] = useState('');

  useEffect(() => {
    // Obtendo o nome da editora
    const nome = controleEditora.getNomeEditora(livro.codEditora);
    setNomeEditora(nome || 'Editora não encontrada');
  }, [livro.codEditora, controleEditora]);

  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>
        <button className="btn btn-danger" onClick={() => onExcluir(livro.codigo)}>
          Excluir
        </button>
      </td>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

// Componente LivroLista
const LivroLista = () => {
  const controleLivro = new ControleLivros();
  const controleEditora = new ControleEditora();
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const obterLivros = () => {
      setLivros(controleLivro.obterLivros());
    };

    obterLivros();
  }, [controleLivro]);

  // Função excluir o livro
  const excluirLivro = (codigoLivro) => {
    controleLivro.excluir(codigoLivro);
    setLivros([...controleLivro.obterLivros()]);
  };

  return (
    <main className="container mt-4">
      <h1 className="mb-4">Lista de Livros</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th className='bg-dark text-white'></th>
            <th className='bg-dark text-white'>Código</th>
            <th className='bg-dark text-white'>Título</th>
            <th className='bg-dark text-white'>Editora</th>
            <th className='bg-dark text-white'>Resumo</th>
            <th className='bg-dark text-white'>Autores</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: 'rgba(255, 255, 200, 0.3)' }}>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} onExcluir={excluirLivro} controleEditora={controleEditora} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
