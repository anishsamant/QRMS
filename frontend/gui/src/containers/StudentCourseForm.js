import React, { Component } from "react";
import axios from "axios";
import StudentCoursePreferenceForm from "../components/StudentCoursePreferenceForm";
import { connect } from "react-redux";

class StudentCourseForm extends Component {
  render() {
    return (
      <div>
        <StudentCoursePreferenceForm {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(mapStateToProps)(StudentCourseForm);
