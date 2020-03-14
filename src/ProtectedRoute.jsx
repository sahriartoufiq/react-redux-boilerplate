import * as React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class ProtectedRouteComponent extends Route {
  render() {
    if (!this.props.authenticated && !this.props.userDetailsFetched) {
      return <Redirect push to="/login" />;
    }

    return <Route {...this.props} />;
  }
}

function mapStateToProps(state) {
  const { authenticated, userDetailsFetched } = state.profileReducer;
  return { authenticated, userDetailsFetched };
}

export const ProtectedRoute = connect(
  mapStateToProps,
  null
)(ProtectedRouteComponent);
