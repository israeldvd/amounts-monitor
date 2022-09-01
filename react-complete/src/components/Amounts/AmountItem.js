import { useState } from "react";

import Card from "../UI/Card";
import ItemDate from "./ItemDate";
import "./AmountItem.css";

const AmountItem = (props) => {
    const [description, setDescription] = useState(props.description);

    const descriptionChangeHandler = () => {
        setDescription("Updated!");
    };

    return (
        <Card className="whole_amount_item">
            <div className="item_data">
                <div className="item_info">
                    <h2 className="item_description">{description}</h2>
                    <ItemDate date={props.date} />
                </div>
                <div className="item_cost">R$ {props.cost}</div>
            </div>
            <div>
                <button onClick={descriptionChangeHandler}>Change description</button>
            </div>
        </Card>
    );
};

export default AmountItem;
