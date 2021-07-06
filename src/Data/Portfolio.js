import cubo from '../Images/cubo.png';
import fumaca from '../Images/fumaca.png';
import calculadora from '../Images/calculadora.png';

const portfolio = [
  {
    id: 3,
    category: 'Css',
    repository: 'https://github.com/flaviolunaferreira/cubo',
    view: 'https://flaviolunaferreira.github.io/cubo/',
    img: cubo,
    title: 'Cubo animado',
    description: 'Exercitando css para fazer um efeito de movimentação de um cubo com fotos de ,personagens Marvel'
  },
  {
    id: 2,
    category: 'Html',
    repository: 'https://github.com/flaviolunaferreira/fuma-a',
    view: 'https://flaviolunaferreira.github.io/fuma-a/',
    img: fumaca,
    title: 'Efeito Funaça',
    description: 'Efeito de texto esfumaçado usando Css. '
  },
    {
    id: 1,
    category: 'Html',
      repository: 'https://github.com/flaviolunaferreira/calculadora',
      view: 'https://flaviolunaferreira.github.io/calculadora/',
    img: calculadora,
    title: 'Calculadora',
    description: 'Brincando com HTML para fazer uma calculadora simples'
  }
]

export default portfolio;
