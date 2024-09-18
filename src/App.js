import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getData() {
      const url = "/api/users";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        setUsers(JSON.parse(response.json()))
      } catch (error) {
        console.error(error.message);
      }
    }
    getData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {users.map((user) => {
          <p>{user.name}</p>
        })}
      </header>
    </div>
  );
}

export default App;
