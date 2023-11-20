import Editora from '../modelo/Editora';

class ControleEditora {
  private editoras: Array<Editora>;

  constructor() {
    // Inicializando a variável editoras com alguns elementos em formato JSON
    this.editoras = [
      new Editora(1, 'Editora A'),
      new Editora(2, 'Editora B'),
      new Editora(3, 'Editora C'),
    ];
  }

  // Método para obter todas as editoras
  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  // Método para obter o nome da editora com base no código
  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find(
      (editora) => editora.codEditora === codEditora
    );

    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }
}

export default ControleEditora;
export {};