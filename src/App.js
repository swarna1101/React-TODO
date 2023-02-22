import React, { Component } from "react";
import { connect } from "react-redux";

import { addTaskAction } from "./actions";
import List from "./List";

import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
    this.controlChange = this.controlChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  controlChange(e) {
    this.setState({
      task: e.target.value,
    });
  }
  addTask() {
    if (this.state.task !== "") {
      this.props.dispatch(addTaskAction(this.state.task));
      console.log(this.props.dispatch);
    }
  }

  render() {
    return (
      <div>
        <header>To-Do List</header>
        <div className="input">
          <input onChange={this.controlChange} placeholder="Enter Task" />
          <button onClick={this.addTask}>Add Task</button>
        </div>
        <List />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}
export default connect(mapStateToProps)(App);
