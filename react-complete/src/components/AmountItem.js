import "./AmountItem.css";

function AmountItem(props) {
  return (
    <div>
      <div className="whole_amount_item">
        <div className="item_info">
          <h2 className="item_description">{props.title}</h2>
          <span>{props.date.toISOString()}</span>
        </div>
        <div className="item_cost">R$ {props.cost}</div>
      </div>
    </div>
  );
}

export default AmountItem;
