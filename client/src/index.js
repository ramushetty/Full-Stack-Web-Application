import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'; 
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import HomePage from './components/Homepage';
import SignupPage from './components/SignUp';
import LoginPage from './components/Login';
import CreateRecipePage from './components/CreateRecipe';


const App=()=> {


  return (
    <Router>
      <div className="">
        <Navbar/>
        <Routes>
          <Route exact path="/create_recipe" element={<CreateRecipePage/>}/>
          <Route exact path="/login" element={<LoginPage/>}/>
          <Route exact path="/signup" element={<SignupPage/>}/> 
          <Route exact path="/" element={<HomePage/>}/>            
        </Routes>
      </div>
    </Router>
    
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));