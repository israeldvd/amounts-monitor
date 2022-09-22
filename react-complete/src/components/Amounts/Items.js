import Card from "../UI/Card";
import ItemsList from "./ItemsList";
import Filter from "./Filter";
import AmountsChart from "../Amounts/AmountsChart";
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

    return (
        <Card className="item-listing">
            <Filter
                yearsAlternatives={yearsAlternatives}
                onSelectYear={selectYearHandler}
                selected={selectedYear}
            />
            <AmountsChart amounts={filteredItems} />
            <ItemsList items={filteredItems} />
        </Card>
    );
};

export default Items;
