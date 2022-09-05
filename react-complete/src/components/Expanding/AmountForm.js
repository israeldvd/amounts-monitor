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

    return (
        <form action="POST">
            <div className="settings" onChange={inputChangeHandler}>
                <div className="setter">
                    <label htmlFor="itemDescription">Description</label>
                    <input type="text" name="itemDescription" />
                </div>
                <div className="setter">
                    <label htmlFor="itemAmount">Amount</label>
                    <input
                        id="amount-input"
                        type="number"
                        name="itemAmount"
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="setter">
                    <label htmlFor="itemDate">Date</label>
                    <input
                        type="date"
                        name="itemDate"
                        min="2000-01-01"
                        max="2050-12-31"
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
