import React, { Component } from 'react';
import {HeaderComment} from './HeaderComment';
import { FlightType } from './FlightType';
import { Passenger } from './Passengers';
import { Form } from './Form';
import {MultiCity} from './Multi-City';

export class Booking extends Component {
  static displayName = Booking.name;

  constructor(props){
    super(props)
    this.state = {
          flightType : "",
          passengers: 1,
          travels : [],
    }
    this.handleChangeFT = this.handleChangeFT.bind(this);
    this.handleChangeP = this.handleChangeP.bind(this);
    this.addTravel = this.addTravel.bind(this);
    this.content = this.content.bind(this);
  }

  componentDidMount()
  {
    this.setState({flightType: "RETURN"});
    this.setState({travels: []});
    this.setState({passengers: 1});
  }

  handleChangeP(value){ this.setState({passengers: value});}

  handleChangeFT(event) {   
    this.setState({flightType: event.target.value});
    this.setState({travels: []}); 
  }

  addTravel(id, travelclass, origin, destination, departureDate, returnDate, multitravels){
    if (this.state.flightType === "ONE-WAY"){
      this.setState({travels: this.state.travels.push([this.state.flightType, this.state.passengers, travelclass, origin, destination, departureDate])});
      alert("SEARCHING FOR A FLIGHT THAT MATCH");
      this.componentDidMount();
    }
    else if (this.state.flightType === "RETURN"){
      this.setState({travels: this.state.travels.push([this.state.flightType, this.state.passengers,travelclass, origin, destination, departureDate])});
      this.setState({travels: this.state.travels.push([this.state.flightType, this.state.passengers, travelclass, destination, origin, returnDate])});
      alert("SEARCHING FOR FLIGHTS THAT MATCH");
      this.componentDidMount();
    }
    else
    { 
      this.setState({travels: multitravels});
      alert("SEARCHING FOR FLIGHTS THAT MATCH");
      this.componentDidMount();
    }
  }

  content(){
      const temp = [];

      if (this.state.flightType === "RETURN"){
        temp.push(<Form return = {true} ready = {this.addTravel} />)
      }
      else if (this.state.flightType === "ONE-WAY"){
        temp.push(<Form visibility = {true} return = {false} ready = {this.addTravel} />)
      }
      else{
        temp.push(<MultiCity ready = {this.addTravel} />)
      }
      
      return temp;
     
  }

  render () {
    return (
        <div className = "booking-component">

            <div className = "w3-padding">
              <HeaderComment comment = "WELCOME! FIND A FLEXIBLE FLIGHT FOR YOUR NEXT TRIP." />
            </div>

            <div className = "part1">

              <div className = "w3-row">

                <div className = "w3-quarter">
                  <FlightType flightType = {this.state.flightType} handleChange = {this.handleChangeFT} />
                </div>

                <div className = "w3-threequarter">
                  <Passenger passengers = {this.state.passengers} handleChange = {this.handleChangeP} />
                </div>
              
              </div>

            </div>

            <div className = "part2">
              {this.content()}
            </div>

        </div>                                                                             
    );
  }
}
