import React from 'react'
import '../Style/PortCards.css';

function MenuItems({menuItem}) {
  return (
    <div className="waper">
      { menuItem.map((item) => (
        <div class="centro">
          <div class="card">
            <div class="imgBox">
              <img src={item.img} alt="" />
              <h2>{ item.title }</h2><br></br>
            </div>
            <div class="textBox">
              <p>{item.description}</p>
              <div className="btns">
                <a href={ item.view } target="_blanck">Ver Página</a>
                <a href={ item.repository } target="_blanck">Repositório</a>
              </div>      
            </div>
          </div>
        </div>
      ))}
    <div className="waper-2"></div>
    </div>
  )
}

export default MenuItems;
