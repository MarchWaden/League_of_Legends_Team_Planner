import React, { Component } from 'react';

import Selection from './Selection';
import User from './User';
import TeamPlanner from './TeamPlanner';
import SearchUsers from './SearchUsers';
import ViewComps from './ViewComps';
import './App.css';
import './css/react-super-select.css';
import { Container, Row, Col} from 'reactstrap';

class App extends Component {
  constructor(){
    super();
    this.state ={
      view: 0
    }
  }
  render() {
    return (
      <div id="Page">
        <div class="row" id="Navbar">
          <div class="col-sm-3">
            <button id="CompPlanner" onClick={() => this.setState({
              view: 0
            })}>Comp Planner</button>
          </div>
          <div class="col-sm-3">
            <button id="CompPlanner" onClick={() => this.setState({
              view: 1
            })}>Find Players</button>
          </div>
          <div class="col-sm-4">
            <button id="CompPlanner" onClick={() => this.setState({
              view: 2
            })}>Browse Comps</button>
          </div>
          <div class="col-sm-2">
            <User />
          </div>
        </div>
        {(this.state.view == 0)
          ?
          <TeamPlanner />
          :
          (this.state.view == 1)
          ?
          <SearchUsers />
          :
          <ViewComps />
        }

      </div>
    );
  }
}

export default App;
