import React from "react";
import Layout from "../../components/Layout/Layout";
import { LEAGUES, FETCHURL, TOKEN } from "../../components/Constant/Constant";
import "./Teams.css";
import Card from "./components/Card/Card"

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = { leagueName: LEAGUES[0].name, leagueId: LEAGUES[0].id, teams: [] };
  }
  componentDidMount() {
      (async () => {
          await fetch(
            `${FETCHURL}competitions/${this.state.leagueId}/standings`,
            { headers: TOKEN }
          )
          .then((response) => response.json())
          .then(response => response.standings[0].table.map(item => ({url: item.team.crestUrl, name: item.team.name, id: item.team.id})))
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
              `${FETCHURL}competitions/${this.state.leagueId}/standings`,
              { headers: TOKEN }
            )
            .then(response => response.json())
            .then(response => response.standings[0].table.map(item => ({url: item.team.crestUrl, name: item.team.name, id: item.team.id})))
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
    (async () => {
      const data = await fetch(
        `${FETCHURL}competitions/${this.state.leagueId}/standings`,
        { headers: TOKEN }
      )
        .then((response) => response.json())
        .catch(() => {
          console.error("Failed to fetch data");
        });
        
      console.log(data);
    })();
  };
  render() {
    return (
      <Layout>
        <div className="teams__wrapper">
          <div className="page__header">
            <p>{this.state.leagueName}</p>
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
          <div className="teams__table">
              {this.state.teams.map(team => {
                  return <Card key={team.id} name={team.name} url={team.url}/>
              })}
           </div>
        </div>
        <div>
          <p>
              
          </p>
        </div>
      </Layout>
    );
  }
}
export default Teams;
