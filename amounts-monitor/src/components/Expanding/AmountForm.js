import React, { useState } from "react";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

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

    const [error, setError] = useState();

    const getInvalidInputs = (
        formInputs,
        placeholder = "Insert a valid text here"
    ) => {
        const emptyInputFields = formInputs.filter(
            (input) => input.value.trim().length === 0
        );
        let inputNames = [];

        if (emptyInputFields.length) {
            setValidationState({ [descriptionInputName]: false });

            emptyInputFields.forEach((element) => {
                inputNames.push(element.name);
                element.placeholder = placeholder;
            });
        }

        return inputNames;
    };

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

        // return all empty input fields
        const invalidInputsList = getInvalidInputs(
            Array.from(event.target.querySelectorAll(`.${styles.setter} input`))
        );

        if (invalidInputsList.length > 0) {
            setError({
                title: invalidInputsList.includes(descriptionInputName)
                    ? "Invalid description"
                    : "Something is missing!",
                message:
                    "No field can remain empty. Please fill out what is missing.",
            });

            return;
        }

        // handle the data if nothing is amiss
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

    const errorModalClose = () => {
        setError(null);
    };

    return (
        <React.Fragment>
            {error && (
                <ErrorModal
                    title={error.title} /* TODO: React-portal this component*/
                    content={error.message}
                    onClick={errorModalClose}
                />
            )}
            {/* TODO: prevent user interaction with form inputs (check stash) */}
            <form action="POST" onSubmit={submitHandler}>
                <div className={styles["settings"]}>
                    <div className={styles["setter"]}>
                        <label htmlFor={descriptionInputName}>
                            Description
                        </label>
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
                    <Button type="button" onClick={props.onUserCancel}>
                        Cancel
                    </Button>
                    <Button type="submit">Add new</Button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default AmountForm;
