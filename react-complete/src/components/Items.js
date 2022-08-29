import Card from "./Card";
import AmountItem from "./AmountItem";
import "./Items.css";

function Items(props) {
    return (
        <Card className="items">
            {props.items
                .sort((a, b) => b.date - a.date)
                .map((item) => {
                    return (
                        <AmountItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            cost={item.cost}
                            date={item.date}
                        />
                    );
                })}
        </Card>
    );
}

export default Items;
