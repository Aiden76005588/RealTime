import React, { useEffect, useState } from 'react';

const FruitList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((json) => setUser(json));
  });

  return (
    <div>
      <h1>List of Fruits</h1>
      {/* 이부분 리스트로 만들면 앞에 생기는 점 없애는 style */}
      <ul style={{ listStyleType: 'none' }}>
        {/* {user.map((user) => {
          return <li key={user._id}>{user.name}</li>;
        })} */}
      </ul>
    </div>
  );
};

export default FruitList;
