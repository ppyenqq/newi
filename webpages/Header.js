import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      
      <nav> 
      	 <ul id="navbar">
        	
       		<li><Link className="links" to='/Ausbildung'>Ausbildung</Link></li>
       		<li><Link className="links" to='/'>Home</Link></li>
        	<li><Link className="links" to='/Kenntnisse'>Kenntnisse</Link></li>
      	</ul> 
      	
      </nav>
       
      </div>
    );
  }
}

export default Header;
