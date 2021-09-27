import React, { Component } from 'react';
import { TravelClass } from './TravelClass';
import { DateSelector } from './DateSelector';
import {NavLink, withRouter}  from 'react-router-dom';

export class OneWay extends Component {
  static displayName = OneWay.name;

  buttonvisibility(){
      const temp = [];
      if (this.props.visibility === true){
        temp.push(<div className = "w3-right">
             <button className = "w3-margin-top w3-padding w3-hover-text-black w3-round w3-border" onClick = {this.props.check}>SEARCH</button>
          </div>
        );
      }
      return temp;
  }

  render () {
    return (
        <>   
        <div className = "w3-row">

            <div className = "w3-half">
                <DateSelector text = " DEPARTURE DATE" icon = "fas fa-calendar-alt w3-text-grey w3-margin-left" date = {this.props.departureDate} min = {this.props.today} handleChange = {this.props.handleChangeDD} />
            </div>

            <div className = "w3-half">
              <TravelClass travelclass = {this.props.travelclass} handleChange = {this.props.handleChange} />
            </div>
             
            {this.buttonvisibility()}

        </div>
        </>
    );
  }
}
