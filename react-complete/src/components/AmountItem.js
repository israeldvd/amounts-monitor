import "./AmountItem.css";
import ItemDate from "./ItemDate";

function AmountItem(props) {
    return (
        <div>
            <div className="whole_amount_item">
                <div className="item_info">
                    <h2 className="item_description">{props.title}</h2>
                    <ItemDate date={props.date}/>
                </div>
                <div className="item_cost">R$ {props.cost}</div>
            </div>
        </div>
    );
}

export default AmountItem;
