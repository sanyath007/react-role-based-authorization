import React, { Component } from 'react';
import { authenticationService } from '../_services';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }

    /** Redirect to home if already logged in */
    if (authenticationService.currentUserValue) {
      this.props.history.push('/');
    }
  }

  onSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;
    
    authenticationService.login(username, password)
    .then(user => {
      const { from } = this.props.location.state || { from: { pathname: "/" }};
      this.props.history.push(from);
    }, error => {
        console.log(error);
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="container">
        <h1>Login</h1>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="">Username :</label>
            <input 
              type="text"
              name="username"
              value={username}
              onChange={this.onChange}
              className="form-control" 
              placeholder="Username" />
          </div>

          <div className="form-group">
            <label htmlFor="">Password :</label>
            <input 
              type="password" 
              name="password"
              value={password} 
              onChange={this.onChange}
              className="form-control" 
              placeholder="Password" />
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
