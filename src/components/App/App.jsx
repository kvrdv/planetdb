import {useState} from 'react';
import SwapiService from '../../services/SwapiService';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorButton from '../ErrorButton';
import PeoplePage from '../PeoplePage';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import './app.scss'

export default function App({onPersonSelected, selectedPerson}) {
    const swapiService = new SwapiService();
    const [showRandomPlanet, setShowRandomPlanet] = useState(true);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);

    // function onError() {
    //   setError(true);
    //   setLoading(false);
    // } 

    function toggleRandomPlanet() {
        setShowRandomPlanet(!showRandomPlanet);
    }

    return (
        <div className="app">
            <Header />

            {showRandomPlanet ? <RandomPlanet /> : <div></div>}

            <div className="buttons">
                <button 
                    className="toggle-planet btn btn-warning btn-lng" 
                    onClick={toggleRandomPlanet}
                >
                    Toggle Random Planet
                </button>

                <ErrorButton />
            </div>  

            <PeoplePage />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList 
                        onItemSelected={onPersonSelected}
                        getData={swapiService.getAllPlanets}
                    />
                </div>

                <div className="col-md-6">
                    <PersonDetails 
                        personId={selectedPerson} 
                    />
                </div>
            </div>
        </div>
    );
}
