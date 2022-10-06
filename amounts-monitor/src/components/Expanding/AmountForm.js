import { useRef, useState, Fragment, useReducer } from "react";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AmountForm.module.css";

const descriptionInputName = "item-description-input";
const dateInputName = "item-date-input";
const costInputName = "item-cost-input";

const getInvalidInputs = (
    formInputs,
    placeholder = "Insert a valid text here"
) => {
    let inputNames = [];

    formInputs.forEach((element) => {
        if (element.value.trim().length === 0) {
            setFormState({ type: "INPUT_BLUR", name: element.name });
            inputNames.push(element.name);
            element.value = "";
            element.placeholder = placeholder;
        }
    });

    return inputNames;
};

const clearInputs = (...inputs) => {
    inputs.forEach((currentInput) => (currentInput.value = ""));
};

const dispatchForm = (state, action) => {
    // generic input-value state update
    if (action.type === "USER_INPUT") {
        return {
            ...state,
            [action.name]: {
                ...state[action.name],
                value: action.val,
            },
            isValid: state.isValid,
        };
    }

    // after onBlur, validate the input state (validation method may vary, accoring to name)
    if (action.type === "INPUT_BLUR") {
        const inputValidation = state[action.name].value.trim().length > 0;
        return {
            ...state,
            [action.name]: {
                ...state[action.name],
                isValid: inputValidation,
            },
            isValid: state.isValid && inputValidation,
        };
    }

    // otherwise, this would 'reset' all entries
    return {
        [descriptionInputName]: {
            value: "",
            isValid: false,
        },
        [costInputName]: {
            value: "",
            isValid: false,
        },
        [dateInputName]: {
            value: "",
            isValid: false,
        },
        isValid: false,
    };
};

const AmountForm = (props) => {
    const descriptionInputRef = useRef();
    const dateInputRef = useRef();
    const costInputRef = useRef();

    const [error, setError] = useState();

    const [formState, setFormState] = useReducer(dispatchForm, {
        [descriptionInputName]: {
            value: "",
            isValid: null,
        },
        [costInputName]: {
            value: "",
            isValid: null,
        },
        [dateInputName]: {
            value: "",
            isValid: null,
        },
        isValid: null,
    });

    const inputChangeHandler = (event) => {
        const targetName = event.target.name;

        setFormState({
            type: "USER_INPUT",
            name: targetName,
            val: event.target.value,
        });
    };

    const validateInputHandler = (event) => {
        setFormState({ type: "INPUT_BLUR", name: event.target.name });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // return all empty input fields
        const invalidInputsList = getInvalidInputs([
            descriptionInputRef.current,
            costInputRef.current,
            dateInputRef.current,
        ]);

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
            description: descriptionInputRef.current.value,
            cost: parseFloat(costInputRef.current.value),
            date: new Date(dateInputRef.current.value + "T00:00:00"),
        };

        clearInputs(
            descriptionInputRef.current,
            costInputRef.current,
            dateInputRef.current
        );

        props.onUserInput(amountsData);
    };

    const errorModalClose = () => {
        setError(null);
    };

    return (
        <Fragment>
            {error && (
                <ErrorModal
                    title={error.title} /* TODO: React-portal this component*/
                    content={error.message}
                    onConfirm={errorModalClose}
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
                            name={descriptionInputName}
                            type="text"
                            id={descriptionInputName}
                            ref={descriptionInputRef}
                            className={
                                formState[descriptionInputName].isValid ===
                                false
                                    ? styles["invalid"]
                                    : ""
                            }
                            onChange={inputChangeHandler}
                            onBlur={validateInputHandler}
                            required
                        />
                    </div>
                    <div className={styles["setter"]}>
                        <label htmlFor={costInputName}>Cost</label>
                        <input
                            name={costInputName}
                            id={costInputName}
                            ref={costInputRef}
                            className={
                                formState[costInputName].isValid === false
                                    ? styles["invalid"]
                                    : ""
                            }
                            type="number"
                            min="0.01"
                            step="0.01"
                            onChange={inputChangeHandler}
                            onBlur={validateInputHandler}
                            required
                        />
                    </div>
                    <div className={styles["setter"]}>
                        <label htmlFor={dateInputName}>Date</label>
                        <input
                            name={dateInputName}
                            type="date"
                            id={dateInputName}
                            ref={dateInputRef}
                            className={
                                formState[dateInputName].isValid === false
                                    ? styles["invalid"]
                                    : ""
                            }
                            min="2000-01-01"
                            max="2050-12-31"
                            onChange={inputChangeHandler}
                            onBlur={validateInputHandler}
                            required
                        />
                    </div>
                </div>
                <div className={styles["action"]}>
                    <Button type="button" onClick={props.onUserCancel}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={!formState.isValid}>
                        Add new
                    </Button>
                </div>
            </form>
        </Fragment>
    );
};

export default AmountForm;
