import { useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(rsp => rsp.json())
      .then(json => {
        setUsers(json);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">Web Exercise</h1>
        <p className="para">Task: Wire in a button that fetches data from this REST API and load it into a list.</p>
        <p className="para">Endpoint: https://jsonplaceholder.typicode.com/users</p>
        <button onClick={getUsers}>Get Users</button>
        <ul>
          {users.map(item => <li>{item.name}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
