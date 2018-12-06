import React, { Component } from 'react';

import Selection from '../Selection';


class TeamPlanner extends Component {
  constructor(){
    super()

    this.state = {
      ids: [null,null,null,null,null,null,null,null,null,null],
      teamName: ""
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    let body = JSON.stringify({
      ids: this.state.ids,
      teamName: this.state.teamName
    })
    try{
      await fetch('http://localhost:3001/team/new', {
        headers: {
          'Content-Type': "application/json"
        },
        method: 'POST',
        body: body})
      console.log(body);
  }catch(err){
    console.log(err);
  }
  };
  handlerExample = (role,option) => {
  if(option != null){
    var output = [
      'Option Item Chosen = {\n',
      '\tid: ', option.id, '\n',
      '\tname: ', option.name, '\n',
      '\ticonClass: ', option.iconClass, '\n'];
    console.log(output.join(''));
    console.log(option, role)
    this.state.ids[role] = option.id;
    console.log(this.state);
  }
  };
  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  render(){
    return(
      <div class="container">
        <div class="row">
          <div class="col-sm-12" id="Composition_name">
            <input type="text" placeholder="Team Name" name="teamName" onChange={this.handleChange}></input>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            Top:
            <Selection handlerExample={this.handlerExample} role={0}/>
            Jungle:
            <Selection handlerExample={this.handlerExample} role={1}/>
            Mid:
            <Selection handlerExample={this.handlerExample} role={2}/>
            Bot:
            <Selection handlerExample={this.handlerExample} role={3}/>
            Support:
            <Selection handlerExample={this.handlerExample} role={4}/>
          </div>
          <div class="col-sm-4">
          </div>
          <div class="col-sm-4">
            Ban 1:
            <Selection handlerExample={this.handlerExample} role={5}/>
            Ban 2:
            <Selection handlerExample={this.handlerExample} role={6}/>
            Ban 3:
            <Selection handlerExample={this.handlerExample} role={7}/>
            Ban 4:
            <Selection handlerExample={this.handlerExample} role={8}/>
            Ban 5:
            <Selection handlerExample={this.handlerExample} role={9}/>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Create Team"/><br/>
          </form>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamPlanner
