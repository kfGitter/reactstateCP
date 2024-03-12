import { useState } from "react";
import "./App.css";
import React, { Component } from "react";

// to create a class component
// The component has to include the extends React.Component statement,
// this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
// The component also requires a render() method, this method returns HTML.

// APP.JSX CLASS COMPONENT

class App extends Component {
  // Initialization of the component's state using the state property.
  state = {
    person: {
      fullName: "Penda Faye",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "/blackGworking.webp",
      profession: "Software Engineer",
    },

    show: false,
    mountedAt: new Date(),
  };

  // show: A boolean value to control whether to show the person's profile or not.
  // mountedAt: A Date object representing the time when the component was mounted.

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  // definitin of a method called toggleShow that toggles the show state between true and false. It uses this.setState() to update the state.

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedAt: new Date() });
    }, 1000);
  }

  // We implement the componentDidMount() lifecycle method. This method is called after the component is mounted to the DOM. Here, we set up an interval using setInterval() to update the mountedAt state every second.

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // We also implement the componentWillUnmount() lifecycle method. This method is called just before the component is removed from the DOM. Here, we clear the interval using clearInterval() to prevent memory leaks.

  render() {
    // Inside the render() method, destructure fullName, bio, imgSrc, profession, show, and mountedAt from the component's state for easier access.

    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedAt } = this.state;

    return (
      <div>
        {/* render a button with an onClick event handler that calls the toggleShow method when clicked. */}
        <button onClick={this.toggleShow}> Profile</button>
        {/* conditionally render the person's profile (fullName, bio, imgSrc, profession) using the show state. */}
        {show && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{profession}</p>
            <p>{bio}</p>
          </div>
        )}
        {/* display of the time since the component was mounted by subtracting the mountedAt time from the current time and dividing by 1000 to convert milliseconds to seconds */}

        <p>Time since mounted: {new Date() - mountedAt} seconds</p>
      </div>
    );
  }
}

export default App;
