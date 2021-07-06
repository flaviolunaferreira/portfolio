import React, { Component } from 'react';

import Efeito from "../Component/EfeitoHome";
import BtnSocial from "../Component/BtnSocial";

import "../Style/Home.css";

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="hero">
          <Efeito />
          <div className="hero__content">
            <h1>Seja Bem Vindo!</h1>
          </div>
        </div>
        <div className="welcome">
          <div className="texto">
            <h3>Estou muito felíz com a sua visita!</h3>
            <ul className="opcoes">
              <li>Use o menu lateral para navegar nas opções desta página.</li>
              <li>Os botões na parte inferior vão lhe redirecionar para meu repositório do github e LinkEdin</li><br /><br />
              <li>Obrigado pela visita!</li>
            </ul>
          </div>
        </div>
        <div className="btn-social">
          <BtnSocial />
        </div>
      </div>
    );
  }
}

export default Home;
