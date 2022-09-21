import { useState } from "react";
import styles from "./AmountForm.module.css";

const AmountForm = (props) => {
    const inputIdentifiers = {
        description: "item-description-input",
        date: "item-date-input",
        cost: "item-cost-input",
    };

    const [enteredInput, setInput] = useState({
        [inputIdentifiers.description]: "",
        [inputIdentifiers.cost]: 0,
        [inputIdentifiers.date]: "",
    });

    const [isValid, setValidationState] = useState({
        [inputIdentifiers.description]: true,
    });

    const inputChangeHandler = (event) => {
        const targetName = event.target.name;
        if (targetName in enteredInput) {
            setInput((prevState) => {
                return {
                    ...prevState,
                    [targetName]: event.target.value,
                };
            });
        }

        if (targetName in isValid) {
            setValidationState((previousValidationState) => {
                return { ...previousValidationState, [targetName]: true };
            });
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const emptyInputFields = Array.from(
            Array.from(event.target.querySelectorAll(".setter input")).filter(
                (input) => input.value.trim().length === 0
            )
        );

        if (emptyInputFields.length) {
            setValidationState({ [inputIdentifiers.description]: false });

            emptyInputFields.forEach((element) => {
                element.placeholder = "Insert a valid text here";
            });

            return;
        }

        const amountsData = {
            description: enteredInput[inputIdentifiers.description],
            cost: parseFloat(enteredInput[inputIdentifiers.cost]),
            date: new Date(enteredInput[inputIdentifiers.date] + "T00:00:00"),
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
            <div className={styles["settings"]}>
                <div className={styles["setter"]}>
                    <label htmlFor={inputIdentifiers.description}>
                        Description
                    </label>
                    <input
                        type="text"
                        value={
                            isValid[inputIdentifiers.description]
                                ? enteredInput[inputIdentifiers.description]
                                : ""
                        }
                        id={inputIdentifiers.description}
                        name={inputIdentifiers.description}
                        className={
                            isValid[inputIdentifiers.description]
                                ? ""
                                : "invalid"
                        }
                        onChange={inputChangeHandler}
                        required
                    />
                </div>
                <div className={styles["setter"]}>
                    <label htmlFor={inputIdentifiers.cost}>Cost</label>
                    <input
                        id={inputIdentifiers.cost}
                        name={inputIdentifiers.cost}
                        type="number"
                        value={enteredInput[inputIdentifiers.cost]}
                        min="0.01"
                        step="0.01"
                        onChange={inputChangeHandler}
                        required
                    />
                </div>
                <div className={styles["setter"]}>
                    <label htmlFor={inputIdentifiers.date}>Date</label>
                    <input
                        type="date"
                        value={enteredInput[inputIdentifiers.date]}
                        id={inputIdentifiers.date}
                        name={inputIdentifiers.date}
                        min="2000-01-01"
                        max="2050-12-31"
                        onChange={inputChangeHandler}
                        required
                    />
                </div>
            </div>
            <div className={styles["action"]}>
                <button type="button" onClick={props.onUserCancel}>
                    Cancel
                </button>
                <button type="submit">Add new</button>
            </div>
        </form>
    );
};

export default AmountForm;
