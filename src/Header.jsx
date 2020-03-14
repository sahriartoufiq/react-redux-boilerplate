import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HeaderComponent extends React.Component {
  render() {
    const authenticated =
      this.props.authenticated || this.props.userDetailsFetched;

    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!authenticated && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { authenticated, userDetailsFetched } = state.profileReducer;
  return { authenticated, userDetailsFetched };
}

export const Header = connect(
  mapStateToProps,
  null
)(HeaderComponent);
