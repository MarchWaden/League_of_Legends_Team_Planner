import React, { Component } from 'react';
import champions from '../champion_data/champions.js';
var ReactSuperSelect = require('react-super-select');

var testData = champions;
var handlerExample = function(option) {
if(option != null){
  var output = [
    'Option Item Chosen = {\n',
    '\tid: ', option.id, '\n',
    '\tname: ', option.name, '\n',
    '\tsize: ', option.size, '\n\t};'];
  console.log(output.join(''));
}
};


class Selection extends Component {
  constructor(){
    super();
  }

  render(){
    return(
      <ReactSuperSelect
                  dataSource={testData}
                  onChange={handlerExample} />
    )
  }
}

export default Selection;
