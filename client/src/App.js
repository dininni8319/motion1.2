import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './user/pages/Home';
import Login from './user/pages/Login';
import Register from './user/pages/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Login />} /> 
        <Route path="/" element={<Home />} /> 
        <Route path="/auth/signup" element={<Register />} /> 
      </Routes>
    </Router>
  );
}

export default App;
