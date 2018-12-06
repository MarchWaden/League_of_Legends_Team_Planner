import React, { Component } from 'react';
import champions from '../champion_data/champions.js';
var ReactSuperSelect = require('react-super-select');

var testData = champions;



class Selection extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <ReactSuperSelect
                  clearSearchOnSelection={true}
                  deselectOnSelectedOptionClick={false}
                  dataSource={testData}
                  onChange={this.props.handlerExample.bind(null,this.props.role)}
                  searchable={true}/>
    )
  }
}

export default Selection;
