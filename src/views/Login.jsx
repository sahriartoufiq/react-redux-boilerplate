import React from "react";
import { connect } from "react-redux";
import { profileActions } from "../actions";
import { login } from "../utils/apiUtils";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameOrEmail: "",
      password: "",
      submitted: false,
      loading: false,
      error: null
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { usernameOrEmail, password } = this.state;

    if (!usernameOrEmail || !password) {
      this.setState({
        error: "Uername or email or password can't be empty"
      });
    }

    const response = await login({ usernameOrEmail, password });

    if (response && response.status === 200) {
      this.props.login(response.data);
    } else if (response && response.status === 401) {
      this.setState({
        error: "Uername or email or password is wrong"
      });
    } else {
      this.setState({
        error: "Something error happend! This is on us. Please try again later."
      });
    }
  };

  render() {
    const { usernameOrEmail, password } = this.state;
    return (
      <div>
        <h2>Login</h2>

        <p style={{ color: "red" }}>{this.state.error}</p>
        <form name="form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username or email</label>
            <input
              type="text"
              name="usernameOrEmail"
              value={usernameOrEmail}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" onSubmit={this.handleSubmit}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state;
  return { loggingIn };
}

const mapDispatchToProps = {
  login: profileActions.login
};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
