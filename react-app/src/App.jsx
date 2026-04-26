import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [nev, setNev] = useState("");
  const [varos, setVaros] = useState("");

  function createUser() {
    if (!nev || !varos) return;

    const newUser = {
      id: Date.now(),
      nev,
      varos
    };

    setUsers([...users, newUser]);

    setNev("");
    setVaros("");
  }

  return (
    <div>
      <h2>React CRUD</h2>

      <input
        placeholder="Név"
        value={nev}
        onChange={e => setNev(e.target.value)}
      />

      <input
        placeholder="Város"
        value={varos}
        onChange={e => setVaros(e.target.value)}
      />

      <button onClick={createUser}>Hozzáadás</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.nev} - {user.varos}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;