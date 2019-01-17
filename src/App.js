import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
/// <reference path="./interfaces.d.ts" />

class App extends Component {
  state = {
    repositories: [],
    teams: new Map()
  }

  buildRepos = function (repositories) {
    console.log("BuildRepos")
    var teams = new Map()
    console.log("BuildRepos")
    repositories.forEach(r => {
      var teamName = r.split("/")[0]
      var t = teams[teamName];
      if (t == null) {
        t = {
          name: teamName,
          repositories: []
        }
        teams[teamName] = t
      }
      t.repositories.push(r);
    });
    console.log(teams)
    return teams;
  }

  componentDidMount() {
    //axios.get(`https://mcr.microsoft.com/v2/_catalog`)
    var baseUrl = `/data/repositories.json`;

    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV !== 'development') {
      baseUrl = `/image-catalog/data/repositories.json`
    }
    axios.get(baseUrl)
      .then(res => {
        const repositories = res.data.repositories;

        this.setState(
          {
            repositories: repositories,
            teams: this.buildRepos(repositories)
          });
        console.log("Calling buildRepos" + repositories)

      }).catch(error => {
        console.log(error.response)
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Microsoft Container Registry
        </header>
       
        {
          Object.keys(this.state.teams).map(t => <p>
          <h2>{t}</h2>
          <ul> {
            this.state.teams[t].repositories.map(r => 
              <li>
              <a
                className="App-link"
                href={"https://mcr.microsoft.com/v2/" + r + "/tags/list"}
                target="_blank"
                rel="noopener noreferrer"
              >
                {r}
              </a>

            </li>
            )
          }</ul></p>)
        }
       
      </div>
    );
  }


}

export default App;
