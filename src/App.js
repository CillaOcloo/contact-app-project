import React from 'react'
import dashboard from './Pages/dashboard';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ProtectedRoute from './Components/ProtectedRoute';


 function App() {
  return (
    <BrowserRouter>
     <Switch>
        <ProtectedRoute  exact path="/" component= {dashboard}  />
        <Route  exact path="/Login" component= {Login}  />
        <Route  exact path="/SignUp" component= {SignUp}  />

     </Switch>
    </BrowserRouter>
  )
}
export default App;