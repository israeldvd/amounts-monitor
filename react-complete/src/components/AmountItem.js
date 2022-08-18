import "./AmountItem.css";

function AmountItem(params) {
  const item = {
    date: new Date(2022, 8, 18),
    title: "Streaming and TV",
    cost: 49.99,
  };

  return (
    <div>
      <div className="whole_amount_item">
        <div className="item_info">
          <h2 className="item_description">{item.title}</h2>
          <span>{item.date.toISOString()}</span>
        </div>
        <div className="item_cost">R$ {item.cost}</div>
      </div>
    </div>
  );
}

export default AmountItem;
