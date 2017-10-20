import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Homepage from './webpages/Homepage';
import Ausbildung from './webpages/Ausbildung';
import Header from './webpages/Header';
import Kenntnisse from './webpages/Kenntnisse';


class App extends Component {
   
  render() {
    return (
    <div className="App">
      <Router>      
        <div>
          <Header />  
                
          <Route exact path='/' component={Homepage} />
          <Route exact path='/Ausbildung' component={Ausbildung} />
          <Route exact path='/Kenntnisse' component={Kenntnisse} /> 
        </div>
      </Router>
      
    </div>  
    );
  }
}

export default App;
