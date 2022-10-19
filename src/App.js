import './App.css';
import { useState } from "react";
import { UserContext } from './context/UserContext';
import { BrowserRouter as Router } from "react-router-dom";
import { Approute } from './routes/route';


function App() {
  const [loggedUser, setLoggedUser] = useState(null);
  return (
    <Router>
      <UserContext.Provider value={[loggedUser, setLoggedUser]}>
        < Approute />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
