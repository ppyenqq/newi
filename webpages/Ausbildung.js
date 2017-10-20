import React, { Component } from 'react';


class Ausbildung extends Component {
  render() {
    return (
      <div className="Ausbildung">
      <h1>Schulische Ausbildung</h1>

     
      
      <div className="timeline">
          <div className="timeline-item">
            <div className="kreis"></div>
            <div className="inner">
              <div className="date">2006 - 2012</div>
              <p className="text">Realschule Guedingen <br /> (Realschulabschluss)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="kreis"></div>
            <div className="inner">
              <div className="date">2012 - 2015</div>
              <p className="text"> Wirtschaftswissenschaftliches Gymnasium <br/> (allgemeine Hochschulreife)</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="kreis"></div>
            <div className="inner">
              <div className="date">2015 - 2016</div>
              <p className="text"> Universität des Saarlandes <br/> Studiengang: Cybersicherheit</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="kreis"></div>
            <div className="inner">
              <div className="date">2016 - heute</div>
              <p className="text"> Hochschule Karlsruhe - Wirtschaft und Technik</p>
            </div>
            </div>
      </div>

      
       
      </div>
    );
  }
}

export default Ausbildung;
