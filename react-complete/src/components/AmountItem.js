import Card from "./Card";
import ItemDate from "./ItemDate";
import "./AmountItem.css";

function AmountItem(props) {
    return (
        <Card className="whole_amount_item">
            <div className="item_info">
                <h2 className="item_description">{props.title}</h2>
                <ItemDate date={props.date} />
            </div>
            <div className="item_cost">R$ {props.cost}</div>
        </Card>
    );
}

export default AmountItem;
