import React, { Component } from 'react';
import {Form} from './Form';

export class MultiCity extends Component {
  static displayName = MultiCity.name;

  constructor(props){
      super(props)
      this.state = {
          travels : [],
          index: 3,
          tempVista: [],
      }

    this.plus = this.plus.bind(this);
    this.remove = this.remove.bind(this);
    this.content = this.content.bind(this);
    this.check = this.check.bind(this);
  }

  componentDidMount(){
      const temp = [];
      temp.push([0,<Form id = {0} visibility = {false} return = {false} ready = {this.newTravel} />, <button className = " w3-margin-top w3-padding w3-hover-text-blue w3-round w3-border" onClick={(e) => this.remove(0, e)}>DELETE</button>]);
      temp.push([1,<Form id = {1} visibility = {false} return = {false} ready = {this.newTravel} />, <button className = " w3-margin-top w3-padding w3-hover-text-blue w3-round w3-border" onClick={(e) => this.remove(1, e)}>DELETE</button>]); 

      this.setState({tempVista: temp});
  }

  plus(){
    
    const i = this.state.index;
    this.state.tempVista.push([i,<Form id = {i} visibility = {false} return = {false} ready = {this.newTravel} />, <button className = " w3-margin-top w3-padding w3-hover-text-blue w3-round w3-border" onClick={(e) => this.remove(i, e)}>DELETE</button>]);
    let up = parseInt(i) + parseInt(1);
    this.setState({index: up});

  }

  remove(id){
    const temp = [];
    for (let index = 0; index < this.state.tempVista.length; index++) {
        if (id !== this.state.tempVista[index][0]){
            temp.push(this.state.tempVista[index]);
        }
    }
    this.setState({tempVista: temp});
  }

  check()
  {
    return this.props.ready(null, null, null, null, null, null,this.state.travels);
  }

  content(){
    const temp = [];
    for (let index = 0; index < this.state.tempVista.length; index++) {
        temp.push(
          <div key = {index} className = "cont">
              {this.state.tempVista[index][1]}
              <div className = "w3-right w3-margin-bottom">
                {this.state.tempVista[index][2]}
              </div>
          </div>
        );
    }
    return temp;
  }

  render () {
    return (
        <>
            {this.content()}

            <div className = "w3-row w3-center">

              <div className = "w3-half">
                <div className = " w3-margin-top w3-padding w3-hover-text-black w3-round w3-border" onClick = {this.plus}>ADD FLIGHT</div>
              </div>

              <div className = "w3-half"> 
                <div className = "w3-margin-top w3-padding w3-hover-text-black w3-round w3-border" onClick = {this.check}>SEARCH</div>
              </div>

            </div>

        </>                                                                            
    );
  }
}
