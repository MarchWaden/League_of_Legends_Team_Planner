import React, { Component } from 'react';
import EditTeamModal from '../EditTeamModal';
class ViewComps extends Component {
  constructor(){
    super()
    this.state = {
      teams: []
    }
  }
  getTeams = async () => {
    console.log('loading teams')
    let teams = await fetch('http://localhost:3001/team',{
      method: "get"
    });
    let parsedTeams = await teams.json();
    console.log(parsedTeams);
    return parsedTeams;
  }
  deleteTeam = async (id,e) => {
    await fetch(('http://localhost:3001/team/'+id),{
      method: "delete"
    });
    this.componentDidMount();
  }
  updateTeam = (newTeam) => {
    this.setState({
      teams: this.state.teams.map((team) => {
        if(team._id == newTeam._id){
          return(newTeam)
        }else{
          return(team)
        }
      })
    })
  }
  componentDidMount(){
    this.getTeams().then((teams)=>{
      this.setState({
        teams: teams
      })
      console.log(teams);
    })
  }
  render(){
    let teamsList = this.state.teams.map((team)=>{
      return(
        <div className="row">
          <div className="col-sm-2">
            <h2>{team.name}</h2>
          </div>
          <div className="col-sm-8">
            <EditTeamModal team={team} updateTeam={this.updateTeam}/>
          </div>
          <div className="col-sm-2">
            <button onClick={this.deleteTeam.bind(null,team._id)}>Delete Team</button>
          </div>
        </div>
      )
    })
    return(
      <div>
        {teamsList}
      </div>
    )
  }
}

export default ViewComps
