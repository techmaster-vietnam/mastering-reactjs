import { useState, useEffect } from 'react';
import './App.css';
import User from './types/User';
import { useStores } from './providers/StoresProvider';

function App() {
  const [username, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [userMap, setUserMap] = useState(new Map<string, User>());

  const { userStore } = useStores();

  useEffect(() => {
    (async() => {
      setUserMap(await userStore.getUserMap());
    })();
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    await userStore.saveUser({username, displayName});
    setUserMap(new Map(await userStore.getUserMap()));
  };

  return (
    <div>
      <div>
        <h1>User List</h1>
        <ul>
          {[...userMap].map(([key, user]) => (
            <li key={key}>
              {user.username} (DisplayName: {user.displayName})
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="displayName">Display Name:</label>
        <input
          id="displayName"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add User</button>
    </form>
    </div>
  );
}

export default App;