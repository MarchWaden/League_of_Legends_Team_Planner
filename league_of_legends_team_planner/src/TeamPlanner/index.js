import React, { Component } from 'react';

import Selection from '../Selection';

class TeamPlanner extends Component {
  render(){
    return(
      <div class="container">
        <div class="row">
          <div class="col-sm-12" id="Composition_name">
            <h2>Composition Name</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            Top:
            <Selection />
            Jungle:
            <Selection />
            Mid:
            <Selection />
            Bot:
            <Selection />
            Support:
            <Selection />
          </div>
          <div class="col-sm-4">
          </div>
          <div class="col-sm-4">
            Ban 1:
            <Selection />
            Ban 2:
            <Selection />
            Ban 3:
            <Selection />
            Ban 4:
            <Selection />
            Ban 5:
            <Selection />
          </div>
        </div>
      </div>
    )
  }
}

export default TeamPlanner
