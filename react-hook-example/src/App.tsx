import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Next from './Next';

function App() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState<Array<string>>();
  const [next, setNext] = useState(false);
  console.log("1. init");

  useEffect(() => {
    console.log("unsubscribe events");
    throw new Error("error");
  });

  useEffect(() => {
    console.log("3. useEffect, count = ", count);
    if (count == 3) {
      setNext(true);
    }
    return () => {
      console.log("unsubscribe events");
    }
  }, [count]);

  console.log("2. render");
  if (next) {
    console.log("next");
    return <Next />
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setMessages(["1", "2", "3"])}>
          messages are {messages}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
