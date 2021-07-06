import React from 'react';

const LinkOption = (link, texto) => {
  if (link !== null || link !== "") {
    return (
    <div>
      <a href={ link.view } target="_blanck">{ texto }</a>
    </div>
    )}
}

export default LinkOption;

