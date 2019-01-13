import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class StudentCoursePreferenceForm extends Component {
  render() {
    return (
      <div>{this.props.token ? <h1>Form here</h1> : <h1>No form</h1>}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(StudentCoursePreferenceForm);
