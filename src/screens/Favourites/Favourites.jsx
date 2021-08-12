import Layout from "../../components/Layout/Layout";
import TeamList from "../../components/TeamList/TeamList";
import { useSelector, useDispatch } from "react-redux";
import { removeAll } from "../../store/actions";
import { NavLink } from "react-router-dom";

const Favourites = () => {
  const teams = useSelector((state) => state.favourites);
  const isTeams = teams.length > 0;
  const dispatch = useDispatch();

  const removeAllTeam = () => {
    dispatch(removeAll());
  };

  return (
    <Layout>
      <div className="teams__wrapper">
        {isTeams ? (
          <button
            type="button"
            className="btn__remove-all"
            onClick={() => removeAllTeam()}
          >
            Remove All
          </button>
        ) : (
          <NavLink to="/teams" style={{ color: "#259c25", fontSize: 20 }}>
            Click to choose your favourites teams
          </NavLink>
        )}
        <TeamList teams={teams}></TeamList>
      </div>
    </Layout>
  );
};

export default Favourites;
