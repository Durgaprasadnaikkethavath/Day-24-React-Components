import React, { Component } from "react";

export default class ClassComponents extends Component {
  constructor() {
    super();
    var a = {
      name: "peter",
    };
    this.state = {
      counter: 9,
      fname: "peter",
      show: function () {
        console.log("class components of class variable");
      },
    };
    // changeName(){
    //    this.setState({
    //    fname: 'peter parker'
    // })
    // }
  }
  render() {
    return (
      <>
        <h1>Class Components and counting numbers {this.state.counter}</h1>
        <p>{this.state.fname}</p>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          counter
        </button>
        <p>{this.state.show()}</p>

        <button onClick={() => this.changeName()}>change Name</button>
      </>
    );
  }
}
