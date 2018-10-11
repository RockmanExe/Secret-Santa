import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import './App.css';
// import RegistrationPage from './components/RegistrationPage';
// import Login from './components/Login';
import Local from './components/Local/Local';
import Home from './components/Home';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route path='/api/local' component={Local} />
                <Route exact path='/' component={Home} />
            </div>
        );
    }
}

export default App;
