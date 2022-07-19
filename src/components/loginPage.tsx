import React from "react";
import UserPage from "./userPage";

const headerStyle = {
  height: "100%",
  backgroundColor: "gray",
  padding: "5px",
}; 

const btnStyle = {
  width: "80%",
  padding: "12px 20px",
  margin: "8px 10px",
  display: "flex",
  border: "1px solid #ccc"
};

const btnLoginStyle = {
  width: "80%",
  padding: "14px 20px",
  margin: "8px 30px",
  display: "flex",
  border: "none",
  color:"white",
  cursor:"pointer",
  background: "#04AA6D",
  "justify-content":"center"
};

class LoginPage extends React.Component {
  state: any = {
    username: "",
    password: "",
  };

  handleChangeUser = (e) =>
    this.setState({ username: e.target.value });

    handleChangePass = (e) =>
    this.setState({ password: e.target.value });

  login = (e) => {
    console.log(this.state)
    const { username, password } = this.state;
    e.preventDefault();
    if (!username) {
      return alert("Provide a username.");
    }
    if (!password) {
      return alert("Provide a password.");
    }
    
    this.props.doLogin(username,password);
    this.setState({ username: "" , password:""});
  };

  logOut = () => this.props.doLogout();

  render() {
    const { auth } = this.props;
    if (auth.isLoggedIn) {
      return (
        <div>Llamaria a userPage</div>
      );
    }
    return (
      <div style={headerStyle}>
        <form onSubmit={this.login}>
          <div className="container">
            <input
              value={this.state.username}
              style={btnStyle}
              placeholder="username"
              onChange={this.handleChangeUser}
            />

            <input
              value={this.state.password}
              placeholder="password"
              style={btnStyle}
              type="password"
              onChange={this.handleChangePass}
            />

            <button type="submit" style={btnLoginStyle}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
