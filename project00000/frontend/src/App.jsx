import React, { useState, useEffect } from 'react';
import axioos from 'axios';

function App() {
  const [user, setUser] = useState(null);



  useEffect(() => {
    axioos.get('http://localhost:5000/api/user')
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
}

  return (
    <div>
      <h1>User Info</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Job: {user.job}</p>
      <p>City: {user.city}</p>
    </div>  
  );
}
export default App;