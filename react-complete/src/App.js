import AmountItem from "./components/AmountItem";

function App() {
    const items = [
        {
            id: "0",
            title: "Car and gas",
            cost: 50.0,
            date: new Date(2022, 8 - 1, 17),
        },
        {
            id: "1",
            title: "Education bills",
            cost: 400.0,
            date: new Date(2022, 8 - 1, 16),
        },
        {
            id: "2",
            title: "Other",
            cost: 55.0,
            date: new Date(2022, 8 - 1, 18),
        },
        {
            id: "3",
            date: new Date(2022, 8 - 1, 18),
            title: "Streaming and TV",
            cost: 49.99,
        },
    ];

    return (
        <div>
            <header>
                <h1>Amounting the savings</h1>
            </header>
            {items.map((item) => {
                return (
                    <AmountItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        cost={item.cost}
                        date={item.date}
                    ></AmountItem>
                );
            })}
        </div>
    );
}

export default App;
