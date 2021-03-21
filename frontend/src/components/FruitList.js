import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FruitList = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    axios.get('api/fruits').then((response) => setFruits(response.data));
  }, []);

  return (
    <div>
      <h1>List of Fruits</h1>
      {/* 이부분 리스트로 만들면 앞에 생기는 점 없애는 style */}
      <ul style={{ listStyleType: 'none' }}>
        {fruits.map((fruit) => {
          return (
            <li key={fruit._id}>
              <Link to={`/fruit/${fruit._id}`}>{fruit.name}</Link>(
              {fruit.amount})-{fruit.info}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FruitList;
