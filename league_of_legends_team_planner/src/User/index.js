import React, { Component } from 'react';
import Login from "../Login";
import Register from "../Register";


class User extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        {(this.props.username != null)
          ?
          <div>this.props.username</div>
          :
          <div>
          <Login />
          <Register />
          </div>
        }
      </div>
    )
  }
}

export default User
