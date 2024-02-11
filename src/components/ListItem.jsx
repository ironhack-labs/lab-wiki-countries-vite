import { Link } from "react-router-dom";

const ListItem = ({ country }) => {
    return (
        <Link className="list-group-item list-group-item-action" to={`/detail/${country.alpha3Code}`}>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
        <h5>{country.name.common}</h5>
        </Link>
    );
};

export default ListItem;