import './App.css';
import { useState } from "react";
import { UserContext } from './context/UserContext';
import { BrowserRouter as Router } from "react-router-dom";
import { Approute } from './routes/route';
import { LoginPage } from './modules/login/LoginPage';
import { UsersPageComponent } from './modules/layout/users-page-component/UsersPageComponent';


function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  return (
      <UserContext.Provider value={[loggedUser, setLoggedUser]}>
        < UsersPageComponent />
      </UserContext.Provider>
  );
}

export default App;
