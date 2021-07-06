import React from 'react';
import Avatar from "./Avatar";
import {NavLink} from 'react-router-dom';
import "../Style/NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="nav">

        <div className="profile">
          <Avatar />
        </div>
        
        <div className="nav-items">
          <ul className="nav-items">
            <li className="nav-item">
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sobre" exact activeClassName="active">
                Sobre
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contato" exact activeClassName="active">
                Contato
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" exact activeClassName="active">
                Portfólio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/curriculo" exact activeClassName="active">
                Currículo
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/certificados" exact activeClassName="active">
                Certificados
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer">
          <p>Atualizado &gt; 06/2021</p>
        </div>
        
      </div>
    </div>
  );
}

export default NavBar;

