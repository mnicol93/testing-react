import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  fetch('https://regres.in/api/users?delay=10000')
    .then(res =>{
      if(!res.ok){
        throw new Error('unable to download users');
      }
      return res.json();
    })
    .then(result =>{
      setUsers(result.data)
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      setLoading(false);
    })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
          { loading ? <Loading /> : <div>Finished</div> }
      </header>
    </div>
  );
}

export default App;

