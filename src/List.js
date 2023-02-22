import { connect } from "react-redux";
import React, { Component } from "react";

import { deleteTaskAction } from "./actions";
class List extends Component {
  deleteTask(task) {
    this.props.dispatch(deleteTaskAction(task));
  }
  render() {
    const tasks = this.props.state;
    return (
      <div>
        {tasks.map((task) => (
          <ul>
            <li>
              {task} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => this.deleteTask(task)}>Completed</button>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}
export default connect(mapStateToProps)(List);
