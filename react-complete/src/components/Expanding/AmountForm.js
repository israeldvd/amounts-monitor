import { useState } from "react";
import "./AmountForm.css";

const AmountForm = () => {
    const [enteredInput, setInput] = useState({
        setDescription: "",
        setAmount: "",
        setDate: "",
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
                    <label htmlFor="setDescription">Description</label>
                    <input type="text" name="setDescription" />
                </div>
                <div className="setter">
                    <label htmlFor="setAmount">Amount</label>
                    <input
                        id="amount-input"
                        type="number"
                        name="setAmount"
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="setter">
                    <label htmlFor="setDate">Date</label>
                    <input
                        type="date"
                        name="setDate"
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
