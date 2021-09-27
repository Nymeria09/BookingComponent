import React, { Component } from 'react';
import { TravelClass } from './TravelClass';
import { DateSelector } from './DateSelector';

export class Return extends Component {
  static displayName = Return.name;

  render () {
    return (
        <>   
        <div className = "w3-row">

            <div className = "w3-third">
                <DateSelector text = " DEPARTURE DATE" icon = "fas fa-calendar-alt w3-text-grey w3-margin-left" date = {this.props.departureDate} min = {this.props.today} handleChange = {this.props.handleChangeDD} />
            </div>

            <div className = "w3-third">
                <DateSelector text = "RETURN DATE" icon = "fas fa-calendar-alt w3-text-grey w3-margin-left" date = {this.props.returnDate} min = {this.props.departureDate} handleChange = {this.props.handleChangeRD} />
            </div>

            < div className = "w3-third">
                <div className = "w3-row">
                <div className = "w3-threequarter">
                    <TravelClass travelclass = {this.props.travelclass} handleChange = {this.props.handleChange} />
                </div>
                <div className = "w3-quarter">
                    <i className = "fa fa-check w3-xlarge w3-margin-left w3-hover-text-black margin-top" onClick = {this.props.check}></i>
                    <button className = "w3-hide-medium w3-hide-large w3-margin-top w3-padding w3-hover-text-black w3-round w3-border" onClick = {this.props.check}>SEARCH</button>
                </div>
                </div>
            </div>     
        </div>
        </>
    );
  }
}
