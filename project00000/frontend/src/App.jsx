import React, { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState(null);



  useEffect(() => {
    fetch('http://localhost:5000/api/user')
      .then(res => res.json())
      .then(data => setUser(data))
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