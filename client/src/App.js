import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './user/pages/Home';
import Login from './user/pages/Login';
import Register from './user/pages/Register';
import Success from './user/pages/Success';
import CreateUser from './user/pages/CreateUser.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/auth/login" element={<Login />} /> 
        <Route path="/auth/register" element={<Register />} /> 
        <Route path="/auth/success" element={<Success />} /> 
        <Route path="/auth/create-user" element={<CreateUser />} /> 
      </Routes>
    </Router>
  );
}

export default App;
