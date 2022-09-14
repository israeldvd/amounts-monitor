import { useState } from "react";
import Items from "./components/Amounts/Items";
import AddAmount from "./components/Expanding/AddAmount";

const DUMMY_ITEMS = [
    {
        id: "0",
        description: "Car and gas",
        cost: 50.0,
        date: new Date(2021, 8 - 1, 17),
    },
    {
        id: "1",
        description: "Education bills",
        cost: 400.0,
        date: new Date(2022, 8 - 1, 16),
    },
    {
        id: "2",
        description: "Other",
        cost: 55.0,
        date: new Date(2022, 8 - 1, 18),
    },
    {
        id: "3",
        date: new Date(2022, 8 - 1, 18),
        description: "Streaming and TV",
        cost: 49.99,
    },
];

const App = () => {
    const [items, setItems] = useState(DUMMY_ITEMS);

    const userInputHandler = (data) => {
        setItems((prevItems) => [data, ...prevItems]);
    };

    return (
        <div>
            <header>
                <h1>Amounting the savings</h1>
            </header>
            <AddAmount onUserInput={userInputHandler} />
            <Items items={items} />
        </div>
    );
};

export default App;
