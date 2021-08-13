import React from "react";
import Layout from "../../components/Layout/Layout";
import { LEAGUES, FETCHURL, TOKEN } from "../../components/Constant/Constant";
import "./Teams.css";
import TeamList from "../../components/TeamList/TeamList"

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = { leagueName: LEAGUES[0].name, leagueId: LEAGUES[0].id, teams: [] };
  }
  componentDidMount() {
      (async () => {
          await fetch(
            `${FETCHURL}competitions/${this.state.leagueId}/teams`,
            { headers: TOKEN }
          )
          .then((response) => response.json())
          .then(response => response.teams.map(item => ({url: item.crestUrl, name: item.name, shortName: item.shortName, id: item.id})))
          .then(data => this.setState({teams: data}))
          .catch((e) => {
            console.error("Failed to fetch data", e);
          });
      })()  
      
  }
  componentDidUpdate(_, prevState) {
    if(prevState.leagueId !== this.state.leagueId) {
        (async () => {
            await fetch(
              `${FETCHURL}competitions/${this.state.leagueId}/teams`,
              { headers: TOKEN }
            )
            .then(response => response.json())
            .then(response => response.teams.map(item => ({url: item.crestUrl, name: item.name, shortName: item.shortName, id: item.id})))
            .then(data => this.setState({teams: data}))
            .catch((e) => {
              console.error("Failed to fetch data", e);
            });
        })()
    }
  }
  handleChange = (event) => {
    this.setState({
      leagueName: LEAGUES[event.currentTarget.value].name,
      leagueId: LEAGUES[event.currentTarget.value].id,
    });
    
  };
  render() {
    const { leagueName, teams } = this.state;
    return (
      <Layout>
        <div className="teams__wrapper">
          <div className="page__header">
            <h3>{leagueName}</h3>
          </div>
          <select className="teams__select" onChange={this.handleChange}>
            {LEAGUES.map((league, index) => {
              return (
                <option value={index} key={league.id}>
                  {league.name}
                </option>
              );
            })}
          </select>
            <TeamList teams={teams}/>
        </div>
      </Layout>
    );
  }
}
export default Teams;

