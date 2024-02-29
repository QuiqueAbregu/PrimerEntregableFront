import React from 'react';

function Form({ onInputChange, onSubmit, error }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Primer Input:
        <input type="text" name="firstInput" onChange={onInputChange} />
      </label>
      <br />
      <label>
        Segundo Input:
        <input type="text" name="secondInput" onChange={onInputChange} />
      </label>
      <br />
      <button type="submit">Enviar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default Form;