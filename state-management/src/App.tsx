import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Data {
  count: number;
}

interface State {
  count: number;
  data: Data;
}

class App extends React.Component {

  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
      data: {count: 0}
    }
  }

  setCount(count: number) {
    this.setState({
      count: count
    });
  }

  setData(data: Data) {
    this.setState({
      data: data
    });
  }

  public render() {
    const {count, data} = this.state as State;
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
          <button onClick={() => this.setCount(count + 1)}>
            count is {count}
          </button>
          <button onClick={() => this.setData({count: data.count + 1})}>
            data is data ({data.count})
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
}

export default App
