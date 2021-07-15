import ComponenteFilho from './ComponenteFilho';

import React from 'react';

// import { Container } from './styles';

function ComponetePai(props) {
  return (
    <div>
      <h2>{props.terceira}</h2>
      <ComponenteFilho
        quinta={"Essa props será renderizada no ComponenteFilho.js"}
        sexta={props.quarta}
      />
    </div>
  );
}

export default ComponetePai;