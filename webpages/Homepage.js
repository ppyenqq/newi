import React, { Component } from 'react';
class Homepage extends Component {
	constructor(){
        super();
        this.state= ({hover: false, click: false});
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    mouseOver() {
        this.setState({hover: true});
     }  
    mouseOut() {
        this.setState({hover: false});
    }
    onClick() {
        this.setState({click: !this.state.click});
    }
	render() {
		var framestylee = {opacity:0};
		if (this.state.hover) {
            framestylee = {opacity:1};
        }
    return (
    <div className="Homepage">  
      <i className="fa fa-address-card pers-info-icon" onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick} ></i>
      <p className="text-persin" style={framestylee}>persönliche <br/> Information</p>
  
      <div className="HomeInfo animated slideInLeft" style={{opacity: this.state.click ? '1' : '0' }}>       
        <div className="pers-info" >
        	<p id="myname">Yen Dang Hoang</p>
          <div className="info-icon">
          <i className="fa fa-birthday-cake adicon"></i>          
          <i className="material-icons  adicon ">call</i>
          <i className="material-icons  adicon">email</i>
          <i className="material-icons  adicon">room</i>
          </div>
        <div className="info-inner">        
            <div className="info-text">16.12.1995</div>
            <div className="info-text">+49 152 3651 2663</div>
            <div className="info-text">anphoo@t-online.de</div>
            <div className="info-text">Am Halberg2 <br/>66121 Saabrücken</div>
        </div>
      </div>     
    </div>       
    </div>  
    );
  }
}

export default Homepage;
