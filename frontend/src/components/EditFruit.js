import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditFruit = ({ match }) => {
  const [fruit, setFruit] = useState({
    name: '',
    amount: 0,
    info: '',
  });
  useEffect(() => {
    axios
      .get('/api/fruits/' + match.params.id)
      .then((response) => setFruit(response.data));
  });
  return (
    <div>
      <h1>Editing {fruit.name}</h1>
      <p>ID:{fruit._id}</p>
      <p>Name:{fruit.name}</p>
      <p>Amount:{fruit.amount}</p>
      <p>Info:{fruit.info}</p>
    </div>
  );
};

export default EditFruit;
