import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import ActivateAccount from './ActivateAccount';
import Login from './Login';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/activate/:username" element={<ActivateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
        />
        </Routes>
    </Router>
  );
}

export default App
