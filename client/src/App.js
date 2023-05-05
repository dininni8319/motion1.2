import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './user/pages/Home';
import Login from './user/pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
