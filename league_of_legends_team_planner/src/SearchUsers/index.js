import React, { Component } from 'react';

class SearchUsers extends Component {
  constructor(){
    super();
    this.state={
      topThree: []
    }
  }
  searchSummoner = async (e) => {
    e.preventDefault();
    const response = await fetch(('http://localhost:3001/summoner/mastery/'+this.name.value), {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
    })
    console.log(response);
    const topThree = await response.json();
    this.setState({
      topThree: topThree
    })
    console.log(this.state.topThree);
  }
  render(){
    return(
      <div>
        <div>
          <form onSubmit={this.searchSummoner}>
            Summoner Name:<input ref={(ref) => {this.name = ref}} type="text" name="name"/><br />
            Champion:<input ref={(ref) => {this.champion = ref}} type="text" name="champion"/><br />
            <input type="submit"/><br/>
          </form>
        </div>
          {(this.state.topThree[0] != null && this.state.topThree[1] != null && this.state.topThree[2] != null)
            ?
              <div class="row">
              <div class="col-sm-4" id="TopThree">
                <p>{this.state.topThree[0].championId}</p>
              </div>
              <div class="col-sm-4" id="TopThree">
                <p>{this.state.topThree[1].championId}</p>
              </div>
              <div class="col-sm-4" id="TopThree">
                <p>{this.state.topThree[2].championId}</p>
              </div>
              </div>
            :
            <div></div>
          }
      </div>
    )
  }
}

export default SearchUsers
