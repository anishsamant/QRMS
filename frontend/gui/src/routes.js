import React from "react";
import { Route } from "react-router-dom";

import Login from "./containers/Login";
import StudentCoursePreferenceForm from "./components/StudentCoursePreferenceForm";

const BaseRouter = () => {
  return (
    <div>
      <Route exact path="/login/" component={Login} />
      <Route
        exact
        path="/studentCourseForm/"
        component={StudentCoursePreferenceForm}
      />
    </div>
  );
};

export default BaseRouter;
