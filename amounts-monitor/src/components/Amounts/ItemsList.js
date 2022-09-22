import AmountItem from "./AmountItem.js";
import styles from "./ItemsList.module.css";

const ItemsList = (props) => {
    const filteredItems = props.items;

    if (!filteredItems.length) {
        return (
            <h2 className={styles["amounts-list__fallback"]}>
                No items are present! Add some at the top.
            </h2>
        );
    }

    return (
        <ul className={styles["amounts-list"]}>
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

export default ItemsList;
