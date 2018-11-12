import React from 'react';


import Cartao from './cartao';

class ListaCartao extends React.Component {
  render() {
    let noticias = [
      { titulo: 'Titulo 1', descricao: 'Descrição 1', detalhe: 'Detalhe', imagem: 'https://materializecss.com/images/office.jpg', link: '#' },
      { titulo: 'Titulo 2', descricao: 'Descrição 2', detalhe: 'Detalhe', imagem: 'https://materializecss.com/images/office.jpg', link: '#' },
      { titulo: 'Titulo 3', descricao: 'Descrição 3', detalhe: 'Detalhe', imagem: 'https://materializecss.com/images/office.jpg', link: '#' },
      { titulo: 'Titulo 4', descricao: 'Descrição 4', detalhe: 'Detalhe', imagem: 'https://materializecss.com/images/office.jpg', link: '#' },
      { titulo: 'Titulo 5', descricao: 'Descrição 5', detalhe: 'Detalhe', imagem: 'https://materializecss.com/images/office.jpg', link: '#' }
    ];

    let aux = [];
    let novaLista = [];

    for (let k = 0; k < noticias.length; k++) {
      aux.push(noticias[k]);
      if (aux.length == this.props.qtdLinha) {
        novaLista.push(aux);
        aux = [];
      } else if (k == noticias.length - 1) {
        novaLista.push(aux);
      }
    }

    let tamanhoCol = 'col m' + this.props.tamanhoCol;

    let listaCartoes = function (grupo) {
      return grupo.map(function (item, index) {
        return (
          <div className={tamanhoCol} key={index}>
            <Cartao dados={item} />
          </div>
        );
      });
    }

    let linha = novaLista.map(function (grupo, index) {
      return (
        <div className='row' key={index}>
          {listaCartoes(grupo)}
        </div>
      );
    })

    return (
      <div>
        {linha}
      </div>
    );
  }
}

export default ListaCartao;