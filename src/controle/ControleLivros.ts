import Livro from '../modelo/Livros';

class ControleLivros {
  private livros: Array<Livro>;

  constructor() {
    // Inicializando a variável livros com alguns elementos em formato JSON
    this.livros = [
      new Livro(1, 1, 'Livro 1', 'Resumo 1', ['Autor 1']),
      new Livro(2, 2, 'Livro 2', 'Resumo 2', ['Autor 2']),
      new Livro(3, 3, 'Livro 3', 'Resumo 3', ['Autor 3']),
    ];
  }

  // Método para obter todos os livros
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  // Método para incluir um novo livro
  incluir(novoLivro: Livro): void {
    // Encontrar o código mais alto no vetor
    const novoCodigo = Math.max(...this.livros.map((livro) => livro.codigo)) + 1;
    // Atribuir o novo código ao livro
    novoLivro.codigo = novoCodigo;
    // Adicionar o novo livro ao vetor
    this.livros.push(novoLivro);
  }

  // Método para excluir um livro com base no código
  excluir(codigoLivro: number): void {
    // Encontrar o índice do livro com o código fornecido
    const index = this.livros.findIndex((livro) => livro.codigo === codigoLivro);
    // Remover o livro com o uso de splice
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}

export default ControleLivros;
export {};