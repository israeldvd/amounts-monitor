import "./AmountItem.css";

function AmountItem(props) {
  return (
    <div>
      <div className="whole_amount_item">
        <div className="item_info">
          <h2 className="item_description">{props.item.title}</h2>
          <span>{props.item.date.toISOString()}</span>
        </div>
        <div className="item_cost">R$ {props.item.cost}</div>
      </div>
    </div>
  );
}

export default AmountItem;
