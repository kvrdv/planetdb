import {useState, useEffect} from 'react';
// import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import './itemList.scss';

export default function ItemList({onItemSelected, getData}) {
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    function onError() {
        setError(true);
        setLoading(false);
    } 

    useEffect(() => {
        getData()
            .then((itemList) => {
                setItemList(itemList);
            })
            .catch((err) => {
                onError(err);
            });
    },[]);

    // useEffect(() => {
    //     const swapiService = new SwapiService();
    //         swapiService.getAllPeople()
    //         .then((itemList) => {
    //             setItemList(itemList);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             onError(err);
    //         });
    // }, []);

    function renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li 
                    className="item-list__item" 
                    key={id} 
                    onClick={() => onItemSelected(id)}
                >
                    {name}
                </li>
            );
        });
    }

    if (!itemList) {
        return <Spinner />
    }

    const hasData = !(loading || error);

    return (
        <ul className="item-list list-group">
            {loading ? <Spinner /> : hasData ? renderItems(itemList) : <ErrorIndicator />}
        </ul>
    );
}
