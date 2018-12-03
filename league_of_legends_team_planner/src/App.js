import React, { Component } from 'react';

import Selection from './Selection';
import User from './User';
import TeamPlanner from './TeamPlanner';
import './App.css';
import './css/react-super-select.css';
import { Container, Row, Col} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div id="Page">
        <div class="row" id="Navbar">
          <div class="col-sm-10">
          </div>
          <div class="col-sm-2">
            <User />
          </div>
        </div>
        <TeamPlanner />

      </div>
    );
  }
}

export default App;
