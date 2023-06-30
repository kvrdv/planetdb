import {useState} from 'react';
import ItemList from '../ItemList/ItemList.jsx';
import PersonDetails from '../PersonDetails';
import SwapiService from '../../services/SwapiService';

export default function PeoplePage() {
    const swapiService = new SwapiService();
    const [selectedPerson, setSelectedPerson] = useState(Math.floor(Math.random() * 8) + 2);

    function onPersonSelected(id) {
        setSelectedPerson(id);
    }
 
    return (
        <div className="row mb2">
            <div className="col-md-6">
                <ItemList 
                    onItemSelected={onPersonSelected}
                    getData={swapiService.getAllPeople} 
                />
            </div>

            <div className="col-md-6">
                <PersonDetails 
                    personId={selectedPerson} 
                />
            </div>
        </div>
    );
};
