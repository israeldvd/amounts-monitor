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
    const yearsAlternatives = sortedItems.map((item) =>
        item.date.getFullYear()
    );

    return (
        <Card className="item-listing">
            <Filter
                yearsAlternatives={yearsAlternatives}
                onSelectYear={selectYearHandler}
                selected={selectedYear}
            />
            {sortedItems.map((item) => {
                return (
                    <AmountItem
                        key={item.id}
                        id={item.id}
                        description={item.description}
                        cost={item.cost}
                        date={item.date}
                    />
                );
            })}
        </Card>
    );
};

export default Items;
