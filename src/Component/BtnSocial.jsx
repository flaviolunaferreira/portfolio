import React from 'react';
import facebook from "../icons/facebook.png";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";

import "../Style/BtnSocial.css";

const BtnSocial = () => {
	return (
		<div>
			<div className="btn-social">
				<ul>
          <li>
            <a href="https://www.facebook.com/thecoyote.flavio" target="_blank" rel="noopener noreferrer">
              <i className="fa facebook">
                <img src={ facebook } alt="visitar o facebook" width="50"   height="50" />
              </i>
            </a>
					</li>
          <li>
            <a href="https://github.com/flaviolunaferreira?tab=repositories" target="_blank" rel="noopener noreferrer">
              <i className="fa Instagram">
                <img src={ github } alt="acessar github" width="50" height="50" />
              </i>
            </a>
					</li>
          <li>
            <a href="https://www.linkedin.com/in/flavio-luna-ferreira-9b4812165/" target="_blank" rel="noopener noreferrer">
              <i className='fa linkedin'>
                <img src={ linkedin } alt='acessar LinkEdin' width="50" height="50" />
              </i>
            </a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default BtnSocial;
