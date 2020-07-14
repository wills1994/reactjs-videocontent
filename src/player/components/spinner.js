import React from 'react';
import './spinner.css';

function Spinner(props) {
  return (
    <div className="Spinner">{props.active && <span>Cargando...</span>}</div>
  );
}

export default Spinner
