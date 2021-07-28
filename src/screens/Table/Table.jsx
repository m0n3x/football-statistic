import React, { useEffect, useState } from "react";
import "./Table.css";
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader";

const LEAGUES = [
  { name: "English Premier League", id: 2021 },
  { name: "German 1. Bundesliga", id: 2002 },
  { name: "Spanish Primera", id: 2014 },
  { name: "Italian Serie A", id: 2019 },
  { name: "French League 1", id: 2015 },
];

const Table = () => {
  const [data, setData] = useState([]);
  const [activeLeague, setActiveLeague] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const activeLeagueId = LEAGUES[activeLeague].id;
    const data = await fetch(
      `https://api.football-data.org/v2/competitions/${activeLeagueId}/standings`,
      { headers: { "X-Auth-Token": "90781ba256f140ebbce7d262f211d222" } }
    )
      .then((response) => response.json())
      .catch(() => {
        console.error("Failed to fetch data");
        setLoading(false);
      });

    setData(data.standings[0].table);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [activeLeague]);

  return (
    <Layout>
      <div className="table__wrapper">
        <div className="table__header">
          {LEAGUES.map((league, index) => {
            return (
              <div
                onClick={() => setActiveLeague(index)}
                className={[
                  "table__header",
                  activeLeague === index ? "active" : "",
                ].join(" ")}
              >
                <a
                  className={[
                    "table__link",
                    activeLeague === index ? "active" : "",
                  ].join(" ")}
                >
                  {league.name}
                </a>
              </div>
            );
          })}
        </div>
        <div className="table">
          <div className="table__row">
            <p>Position</p>
            <p>Team</p>
            <p>G</p>
            <p>W</p>
            <p>D</p>
            <p>L</p>
            <p>GS</p>
            <p>GC</p>
            <p>P</p>
          </div>
          {loading && <Loader />}
          {data.map((team, index) => {
            return (
              <div
                className={[
                  "table__row",
                  index % 2 === 0 ? "odd" : "even",
                ].join(" ")}
              >
                <p>{team.position}</p>
                <p>{team.team.name}</p>
                <p>{team.playedGames}</p>
                <p>{team.won}</p>
                <p>{team.draw}</p>
                <p>{team.lost}</p>
                <p>{team.goalsFor}</p>
                <p>{team.goalsAgainst}</p>
                <p>{team.points}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export default Table;


