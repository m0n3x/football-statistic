import Layout from "../../components/Layout/Layout";
import TeamList from "../../components/TeamList/TeamList";
import { useSelector } from 'react-redux';

const Favourites = () => {
    const teams = useSelector(state => state.favourites);
    console.log('favourites', teams);
    return (
        <Layout>
            <div className="teams__wrapper">
            <TeamList teams={teams}></TeamList>
            </div>
        </Layout>
    )
}

export default Favourites;