import { useState } from "react";
import "./AmountForm.css";

const AmountForm = (props) => {
    const [enteredInput, setInput] = useState({
        "item-description-input": "",
        "item-cost-input": 0,
        "item-date-input": "",
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
            description: enteredInput["item-description-input"],
            cost: parseFloat(enteredInput["item-cost-input"]),
            date: new Date(enteredInput["item-date-input"] + "T00:00:00"),
        };

        setInput(
            Object.fromEntries(
                Object.entries(enteredInput).map(([k]) => [k, ""])
            )
        );

        props.onUserInput(amountsData);
    };

    return (
        <form action="POST" onSubmit={submitHandler}>
            <div className="settings">
                <div className="setter">
                    <label htmlFor="item-description-input">Description</label>
                    <input
                        type="text"
                        value={enteredInput["item-description-input"]}
                        id="item-description-input"
                        name="item-description-input"
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="setter">
                    <label htmlFor="item-cost-input">Cost</label>
                    <input
                        id="item-cost-input"
                        name="item-cost-input"
                        type="number"
                        value={enteredInput["item-cost-input"]}
                        min="0.01"
                        step="0.01"
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="setter">
                    <label htmlFor="item-date-input">Date</label>
                    <input
                        type="date"
                        value={enteredInput["item-date-input"]}
                        id="item-date-input"
                        name="item-date-input"
                        min="2000-01-01"
                        max="2050-12-31"
                        onChange={inputChangeHandler}
                    />
                </div>
            </div>
            <div className="action">
                <button type='button' onClick={props.onUserCancel}>Cancel</button>
                <button type="submit">Add new</button>
            </div>
        </form>
    );
};

export default AmountForm;
