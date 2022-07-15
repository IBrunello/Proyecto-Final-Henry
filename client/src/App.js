import React from 'react'
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import MovieDetail from './Components/Detail/MovieDetail'
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import CreateMovie from './Components/CreateMovie/CreateMovie';
import Login from './Components/Login/Login';
import MenuDashboard from './Components/Dashboard/MenuDashboard';
import CreateFeedback from './Components/CreateFeedback/PostFeedback';

function App() {
  return (
    <BrowserRouter>
        <Route path='/' component={NavBar} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Home} />
        <Route exact path='/movies/:id' component={MovieDetail}/>
        <Route exact path= '/create' component={CreateMovie} />
        <Route path='/admin' component={MenuDashboard} />          
        <Route path="/feedback/:id" component={CreateFeedback}/>
        <Route path='/' component={Footer} />

    </BrowserRouter>
  );
}

export default App;