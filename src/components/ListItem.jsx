const ListItem = ({ country }) => {
    return (
        <a className="list-group-item list-group-item-action">{country.name.common}</a>
    );
};

export default ListItem;