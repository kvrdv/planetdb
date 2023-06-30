import {useState, useEffect} from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import './personDetails.scss';

export default function PersonDetails({personId}) {
    const swapiService = new SwapiService();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [person, setPerson] = useState({});
    const {id, name, gender, birthYear, eyeColor} = person;
  
    function onError(err) {
        setError(true);
        setLoading(false);
    } 

    function updatePerson() {
        if (!personId) {
            console.log('_NO_PERSON_ID_');
            return;
        }

        swapiService.getPerson(personId)
            .then((person) => {
                setPerson(person);
                setLoading(false);
            })
            .catch((err) => {
                onError(err);
            });
    }

    useEffect(() => {
        updatePerson();
    });

    const hasData = !(loading || error);

    return (
        <div className="person-details card">
        {loading ? <Spinner /> : hasData ? <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="Character" className="person-details__image" /> : <ErrorIndicator />}

            <div className="card-body">
                <h4>{name}</h4>
                
                <ul className="list-group list-group-flush person-details__list">
                    <li className="list-group-item person-details__list-item">
                        <span className="person-details__term">Gender</span>
                        <span>{gender}</span>
                    </li>

                    <li className="list-group-item">
                        <span className="person-details__term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    
                    <li className="list-group-item">
                        <span className="person-details__term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
