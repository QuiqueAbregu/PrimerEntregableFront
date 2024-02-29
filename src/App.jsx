import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';

function App() {
  const [formData, setFormData] = useState({ firstInput: '', secondInput: '' });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (formData.firstInput.trim().length < 3 || formData.secondInput.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }
  };

  return (
    <div>
      <Form
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        error={error}
      />
      {formData.firstInput && formData.secondInput && !error && <Card data={formData} />}
    </div>
  );
}

export default App;