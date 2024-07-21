import React from 'react';
import './App.css';
import Home from './Home';
import Welcome from './Welcome';

interface State {
  view: string;
}

class App extends React.Component {

  constructor(props: any) {
    super(props)
    this.state = {};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log("componentDidCatch");
  }

  navigate() {
    this.setState({view: "Welcome"});
  }

  public render() {
    const {view} = this.state as State;
    return (
      (view == "Welcome")
        ? <Welcome />
        : <Home parent={this} />
    )
  }
}

export default App