import React, { useState } from 'react';

const AddFruit = () => {
  const [fruit, setFruit] = useState({
    name: '',
    amount: 0,
    info: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${fruit.name} = ${fruit.amount} - ${fruit.info}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFruit((oldFruit) => {
      return {
        ...oldFruit,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <h1>Add Fruits Here</h1>
      <form onSubmit={handleSubmit}>
        <label>Fruit Name:</label>
        <input
          type="text"
          name="name"
          value={fruit.name}
          required
          onChange={handleChange}
        />
        <label>Amount:</label>
        <input
          type="text"
          name="amount"
          value={fruit.amount}
          onChange={handleChange}
        />
        <label>Info:</label>
        <input
          type="text"
          name="info"
          value={fruit.info}
          onChange={handleChange}
        />
        <input type="submit" value="Add Fruit" />
      </form>
    </div>
  );
};

export default AddFruit;
