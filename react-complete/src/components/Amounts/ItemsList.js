import AmountItem from "./AmountItem.js";
import "./ItemsList.css";

const ListItems = (props) => {
    const filteredItems = props.items;

    if (!filteredItems.length) {
        return (
            <h2 className="amounts-list__fallback">
                No items are present! Add some at the top.
            </h2>
        );
    }

    return (
        <ul className="amounts-list">
            {filteredItems.map((item) => (
                <li key={item.id}>
                    <AmountItem
                        id={item.id}
                        description={item.description}
                        cost={item.cost}
                        date={item.date}
                    />
                </li>
            ))}
        </ul>
    );
};

export default ListItems;
