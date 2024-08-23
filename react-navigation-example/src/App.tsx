import { useState } from 'react'
import './App.css'
import Entry from './Entry'
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  const [currentViewURI, setCurrentViewURI] = useState("/entry")

  let view;
  switch(currentViewURI) {
    case "/entry":
      view = <Entry setCurrentViewURI={setCurrentViewURI} />;
      break;
    case "/page1":
      view = <Page1 setCurrentViewURI={setCurrentViewURI} />;
      break;
    case "/page2":
      view = <Page2 setCurrentViewURI={setCurrentViewURI} />;
      break;
    default:
      view = <Entry setCurrentViewURI={setCurrentViewURI} />;
      break;
  };
  window.history.pushState('', '', currentViewURI);
  return view;
}

export default App
