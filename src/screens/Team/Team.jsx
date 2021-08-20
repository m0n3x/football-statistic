import React, { useEffect, useState } from "react";
import "./Team.css";
import { FETCHURL, TOKEN } from "../../components/Constant/Constant";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import PlayerCard from "./components/PlayerCard/PlayerCard";
import MatchCard from "./components/MatchCard/MatchCard";

const Team = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isShow, setShow] = useState(true);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [dateFrom, setDateFrom] = useState('2021-01-01')
  const [dateTo, setDateTo] = useState('2021-03-03')
  
  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await fetch(`${FETCHURL}/teams/${id}`, { headers: TOKEN })
        .then((response) => response.json())
        .catch(() => {
          console.error("Failed to fetch data");
          setLoading(false);
        });

      setData(data);
    })();
  }, []);

  const isPlayers = (value) => {
    setShow(value);
  };

  const isTeamPage = () => {
    if(window.location.pathname === `/teams/${id}`) {
      setIsOpened(!isOpened)
    }
  };

  const getDateFrom = (val) => {
    setDateFrom(val.target.value)
  }
  const getDateTo = (val) => {
    setDateTo(val.target.value)
  }

  useEffect(() => {
    (async () => {
      const matches = await fetch(
        `${FETCHURL}/teams/${id}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`,
        { headers: TOKEN }
      )
        .then((response) => response.json())
        .catch(() => {
          console.error("Failed to fetch data");
          setLoading(false);
        });
      setMatches(matches);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="team__wrapper">
        <div className="team__card">
          <Card
            key={data.id}
            id={data.id}
            name={data.name}
            url={data.crestUrl}
            shortName={data.shortName}
            handleClick={isPlayers}
            pageUrl={isTeamPage}
          />
        </div>
        <div className="empty"></div>
        <div className="team__header">
          <h3>{isShow ? 'Players' : 'Fixtures'} </h3>
        </div>
        <div className="team__header">
          <h3>{data.name}</h3>
        </div>
        <div className="players__bar"></div>
        <div></div>

        {isShow ? (
          <div className="players__wrapper">
            {data.squad && data.squad.map(
              ({ name, position, dateOfBirth, id, shirtNumber }) => {
                return (
                  <PlayerCard
                    key={id}
                    name={name}
                    position={position}
                    dateOfBirth={dateOfBirth}
                    shirtNumber={shirtNumber || "?"}
                  />
                );
              }
            )}
          </div>
        ) : (
          <div className="matches__wrapper">
            <div>
              <input type="date" onChange={getDateFrom}/>
              <input type="date" onChange={getDateTo}/>
              {console.log(dateTo)}
              {console.log(dateFrom)}
            </div>
            {console.log(matches.matches)}
            {matches.matches && matches.matches.map(
              ({ competition, id, awayTeam, homeTeam, score }) => {
                return (
                  <MatchCard
                    competition={competition}
                    key={id}
                    awayTeam={awayTeam}
                    homeTeam={homeTeam}
                    score={score}
                    id={id}
                    
                  />
                );
              }
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Team;
