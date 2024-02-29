import React from 'react';

function Card({ data }) {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>Datos ingresados:</h2>
      <p>Primer Input: {data.firstInput}</p>
      <p>Segundo Input: {data.secondInput}</p>
    </div>
  );
}

export default Card;