import React from 'react';
import theCoyote from '../Img/theCoyote.png';
import "../Style/Avatar.css";

const Avatar = () => {
  return (
    <div className="cubo">
      <img src={theCoyote} alt="imagem" width="90" height="80" />
    </div>
  );
}

export default Avatar;

