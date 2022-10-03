import Card from "../UI/Card";
import ItemDate from "./ItemDate";
import styles from "./AmountItem.module.css";

const AmountItem = (props) => {
    return (
        <Card className={styles["whole_amount_item"]}>
            <div className={styles["item_data"]}>
                <div className={styles["item_info"]}>
                    <h2 className={styles["item_description"]}>
                        {/* TODO: make this editable */}
                        {props.description}
                    </h2>{" "}
                    <ItemDate date={props.date} />
                </div>
                <div className={styles["item_cost"]}>R$ {props.cost}</div>
            </div>
        </Card>
    );
};

export default AmountItem;
