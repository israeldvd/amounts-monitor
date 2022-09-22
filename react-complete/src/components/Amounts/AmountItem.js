import Card from "../UI/Card";
import ItemDate from "./ItemDate";
import "./AmountItem.css";

const AmountItem = (props) => {
    return (
        <Card className="whole_amount_item">
            <div className="item_data">
                <div className="item_info">
                    <h2 className="item_description">{props.description}</h2>
                    <ItemDate date={props.date} />
                </div>
                <div className="item_cost">R$ {props.cost}</div>
            </div>
        </Card>
    );
};

export default AmountItem;
