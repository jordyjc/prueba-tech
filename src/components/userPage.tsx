import React from "react";
import { render } from "react-dom";

class UserPage extends React.Component {
  render() {
    const { auth } = this.props;
    if (auth.isLoggedIn) {
      return (
        <div>
          <h1>Dashboard</h1>
          <div>Hello {auth.username}. This is your dashboard.</div>
        </div>
      );
    } return null
  }
}

export default UserPage;
