import { useState } from "react";
import styles from "./AmountForm.module.css";

const AmountForm = (props) => {
    const descriptionInputName = "item-description-input";
    const dateInputName = "item-date-input";
    const costInputName = "item-cost-input";

    const [enteredInput, setInput] = useState({
        [descriptionInputName]: "",
        [costInputName]: 0,
        [dateInputName]: "",
    });

    const [isValid, setValidationState] = useState({
        [descriptionInputName]: true,
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
            Array.from(
                event.target.querySelectorAll(`.${styles.setter} input`)
            ).filter((input) => input.value.trim().length === 0)
        );

        console.log(emptyInputFields);

        if (emptyInputFields.length) {
            setValidationState({ [descriptionInputName]: false });

            emptyInputFields.forEach((element) => {
                element.placeholder = "Insert a valid text here";
            });

            return;
        }

        const amountsData = {
            description: enteredInput[descriptionInputName],
            cost: parseFloat(enteredInput[costInputName]),
            date: new Date(enteredInput[dateInputName] + "T00:00:00"),
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
                    <label htmlFor={descriptionInputName}>Description</label>
                    <input
                        type="text"
                        value={
                            isValid[descriptionInputName]
                                ? enteredInput[descriptionInputName]
                                : ""
                        }
                        id={descriptionInputName}
                        name={descriptionInputName}
                        className={
                            isValid[descriptionInputName]
                                ? ""
                                : styles["invalid"]
                        }
                        onChange={inputChangeHandler}
                        required
                    />
                </div>
                <div className={styles["setter"]}>
                    <label htmlFor={costInputName}>Cost</label>
                    <input
                        id={costInputName}
                        name={costInputName}
                        type="number"
                        value={enteredInput[costInputName]}
                        min="0.01"
                        step="0.01"
                        onChange={inputChangeHandler}
                        required
                    />
                </div>
                <div className={styles["setter"]}>
                    <label htmlFor={dateInputName}>Date</label>
                    <input
                        type="date"
                        value={enteredInput[dateInputName]}
                        id={dateInputName}
                        name={dateInputName}
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
