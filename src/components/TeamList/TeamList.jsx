import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./TeamList.css";

const TeamList = ({teams}) => {
    return (
        <div className="teams__table">
              {teams.map(team => {
                  return (
                    <Link to={`/teams/${team.id}`}> 
                      <Card id={team.id} key={team.id} name={team.name} url={team.url} shortName={team.shortName}/>
                    </Link>
                  )
              })}
           </div>
    )
}

export default TeamList;