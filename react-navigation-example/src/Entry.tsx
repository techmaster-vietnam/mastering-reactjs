import reactLogo from './assets/react.svg'
import { PageProps } from './common'
import viteLogo from '/vite.svg'

const Entry: React.FC<PageProps> = ({ setCurrentViewURI }) => {
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
        <button onClick={() => setCurrentViewURI("/page1")}>
          Move to Page 1
        </button>
        <button onClick={() => setCurrentViewURI("/page2")}>
          Move to Page 2
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

export default Entry
