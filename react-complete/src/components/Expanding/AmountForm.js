import { useState } from "react";
import "./AmountForm.css";

const AmountForm = () => {
    const [enteredDescription, setEnteredDescription] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const descripChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    return (
        <form action="POST">
            <div className="settings">
                <div className="setter">
                    <label htmlFor="set-description">Description</label>
                    <input
                        type="text"
                        name="set-description"
                        onChange={descripChangeHandler}
                    />
                </div>
                <div className="setter">
                    <label htmlFor="set-amount">Amount</label>
                    <input
                        id="amount-input"
                        type="number"
                        name="set-amount"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="setter">
                    <label htmlFor="set-date">Date</label>
                    <input
                        type="date"
                        name="set-date"
                        min="2000-01-01"
                        max="2050-12-31"
                        onChange={dateChangeHandler}
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
