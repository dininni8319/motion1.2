import { useState, useContext, createContext } from 'react';

export const AuthContext = createContext();

export function AuthProvider(props) {
  const initialUser = localStorage.getItem("user");

  const [ user, setUser ] = useState(JSON.parse(initialUser));

  const login = ( first_name, last_name, token) => {
    const user = {
      token, 
      username: `${first_name} ${last_name}`,
    };

    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser({
     token: "",
     username: ""
    });
    localStorage.removeItem("user");
  };


  return (
    <AuthContext.Provider value={{ user, login, logout}}>
      {props.children}
    </AuthContext.Provider>
  )
}