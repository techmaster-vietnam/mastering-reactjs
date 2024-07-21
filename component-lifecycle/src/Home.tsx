import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface State {
  count: number;
  throwError: boolean;
}

interface HomeProps {
    parent: any;
  }

class Home extends React.Component<HomeProps> {

  private parent: any;

  constructor(props: any) {
    super(props)
    this.parent = props.parent;
    this.state = {
      count: 0,
      data: {count: 0, throwError: false}
    }
    console.log("Order 1: constructor");
  }

  componentDidMount(): void {
    console.log("Order 3: componentDidMount");
  }

  componentWillUnmount(): void {
    console.log("Order 6: componentWillUnmount");
  }

  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log("Order 4: shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log("Order 5: componentDidUpdate");
  }

  setCount(count: number) {
    this.setState({
      count: count
    });
  }

  handleClickThrowError() {
    this.setState({ throwError: true });
  };

  handleNavigateClick() {
    this.parent.navigate("Wecome");
  }

  public render() {
    console.log("Order 2. render");
    const {count, throwError} = this.state as State;
    if (throwError) {
        throw new Error('Something went wrong!');
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
          <button onClick={() => this.setCount(count + 1)}>
            count is {count}
          </button>
          <button onClick={() => this.handleClickThrowError()}>Click to throw error</button>
          <button onClick={() => this.handleNavigateClick()}>Navigate</button>
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

export default Home;