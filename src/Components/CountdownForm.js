import React, { Component } from "react";

export default class CountdownForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countingDown: false,
      countdownStart: 0,
      countdownTime: 0,
      minutes: "",
      hours: "",
      seconds: "",
    };
    this.handleTimerStart = this.handleTimerStart.bind(this);
    this.handleMinutesChange = this.handleMinutesChange.bind(this);
    this.handleSecondsChange = this.handleSecondsChange.bind(this);
    this.handleHoursChange = this.handleHoursChange.bind(this);
  }

  handleSecondsChange(event) {
    this.setState({ seconds: event.target.value });
  }
  handleMinutesChange(event) {
    this.setState({ minutes: event.target.value });
  }
  handleHoursChange(event) {
    this.setState({ hours: event.target.value });
  }
  handleTimerStart(event) {
    alert(`timer started at ${this.state.formValue}`);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleTimerStart}>
          <label>
            Hours:
            <input
              type="text"
              value={this.state.hours}
              onChange={this.handleHoursChange}
            />
          </label>
          <label>
            Minutes:
            <input
              type="text"
              value={this.state.minutes}
              onChange={this.handleMinutesChange}
            />
          </label>
          <label>
            Seconds:
            <input
              type="text"
              value={this.state.seconds}
              onChange={this.handleSecondsChange}
            />
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
