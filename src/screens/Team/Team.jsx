import React, { useEffect, useState } from "react";
import "./Team.css";
import { FETCHURL, TOKEN } from "../../components/Constant/Constant";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader"
import PlayerCard from "./components/PlayerCard/PlayerCard"

const Team = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
    setLoading(true);
      const data = await fetch(`${FETCHURL}/teams/${id}`, 
      { headers: TOKEN })
        .then((response) => response.json())
        .catch(() => {
          console.error("Failed to fetch data");
          setLoading(false);
        });
        
      setData(data);
      setLoading(false);
    })();
  }, []);
  
 if(loading) {
     return (
         <Layout>
            <Loader/>
         </Layout>
     )
 }
  return (
    <Layout>
      <div className="team__wrapper">
        <div className="team__card">
          <Card
            key={data.id}
            name={data.name}
            url={data.crestUrl}
            shortName={data.shortName}
          />
        </div>
        <div className="empty"></div>
        <div className="team__header">
          <h3>Players</h3>
        </div>
        <div className="team__header">
          <h3>{data.name}</h3>
        </div>
        <div className="players__bar"></div>
        <div></div>
        <div className="players__wrapper">      
            {data.squad.map(({ name, position, dateOfBirth, id, shirtNumber }) => {
                  return (
                      <PlayerCard key={id} name={name} position={position} dateOfBirth={dateOfBirth} shirtNumber={shirtNumber || '?'}/>
                  )
              })} 
        </div>
      </div>
    </Layout>
  );
};

export default Team;
