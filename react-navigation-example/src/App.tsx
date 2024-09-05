import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entry from './Entry';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/entry" element={<Entry />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
    </Router>
  );
}

export default App
