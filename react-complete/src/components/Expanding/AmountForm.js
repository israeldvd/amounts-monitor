import { useState } from "react";
import "./AmountForm.css";

const AmountForm = () => {
    const [enteredInput, setInput] = useState({
        itemDescription: "",
        itemAmount: "",
        itemDate: "",
    });

    const inputChangeHandler = (event) => {
        if (event.target.name in enteredInput)
            setInput((prevState) => {
                return {
                    ...prevState,
                    [event.target.name]: event.target.value,
                };
            });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const amountsData = {
            description: enteredInput.itemDescription,
            amount: enteredInput.itemAmount,
            date: new Date(enteredInput.itemDate + "T00:00:00"),
        };

        setInput(
            Object.fromEntries(
                Object.entries(enteredInput).map(([k]) => [k, ""])
            )
        );

        console.log(amountsData);
    };

    return (
        <form action="POST" onSubmit={submitHandler}>
            <div className="settings">
                <div className="setter">
                    <label htmlFor="itemDescription">Description</label>
                    <input
                        type="text"
                        value={enteredInput.itemDescription}
                        name="itemDescription"
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="setter">
                    <label htmlFor="itemAmount">Amount</label>
                    <input
                        id="amount-input"
                        type="number"
                        value={enteredInput.itemAmount}
                        name="itemAmount"
                        min="0.01"
                        step="0.01"
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="setter">
                    <label htmlFor="itemDate">Date</label>
                    <input
                        type="date"
                        value={enteredInput.itemDate}
                        name="itemDate"
                        min="2000-01-01"
                        max="2050-12-31"
                        onChange={inputChangeHandler}
                    />
                </div>
            </div>
            <div className="action">
                <button type="submit">Add new</button>
            </div>
        </form>
    );
};

export default AmountForm;
