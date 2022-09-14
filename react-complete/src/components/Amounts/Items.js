import Card from "../UI/Card";
import AmountItem from "./AmountItem";
import Filter from "./Filter";
import "./Items.css";
import { useState } from "react";

const Items = (props) => {
    const [selectedYear, setSelectedYear] = useState("2021");

    const selectYearHandler = (yearData) => {
        setSelectedYear(yearData);
    };

    const sortedItems = props.items.sort((a, b) => b.date - a.date);

    const filteredItems = sortedItems.filter((item) => {
        return item.date.getFullYear().toString() === selectedYear;
    });

    const yearsAlternatives = sortedItems.map((item) =>
        item.date.getFullYear()
    );

    let itemsContent = <p>No items are present!</p>;

    if (filteredItems.length) {
        itemsContent = filteredItems.map((item) => {
            return (
                <AmountItem
                    key={item.id}
                    id={item.id}
                    description={item.description}
                    cost={item.cost}
                    date={item.date}
                />
            );
        });
    }

    return (
        <Card className="item-listing">
            <Filter
                yearsAlternatives={yearsAlternatives}
                onSelectYear={selectYearHandler}
                selected={selectedYear}
            />
            {itemsContent}
        </Card>
    );
};

export default Items;
