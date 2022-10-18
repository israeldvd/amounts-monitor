import { useRef, useState, Fragment, useReducer } from "react";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Input from "../UI/Input";

import styles from "./AmountForm.module.css";

const descriptionInputName = "item-description-input";
const dateInputName = "item-date-input";
const costInputName = "item-cost-input";

const getInvalidInputs = (...formInputs) => {
    let inputNames = [];

    formInputs.forEach((element) => {
        if (element.value.trim().length === 0) {
            inputNames.push(element.name);
        }
    });

    return inputNames;
};

const dispatchForm = (state, action) => {
    // generic input-value state update
    if (action.type === "USER_INPUT") {
        const inputValidation = action.val.trim().length > 0;
        return {
            ...state,
            [action.name]: {
                ...state[action.name],
                value: action.val,
                isValid: inputValidation,
            },
            isValid: state.isValid,
        };
    }

    if (action.type === "FORM_VALIDATION") {
        return {
            ...state,
            isValid: Object.values(state).reduce((validity, stateProp) => {
                if (
                    stateProp &&
                    typeof stateProp === "object" &&
                    Object.hasOwn(stateProp, "isValid")
                ) {
                    return validity && !!stateProp.isValid;
                }

                return validity;
            }, true),
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
            isValid: state.isValid,
        };
    }

    // reset form parts
    if (action.type === "INPUT_CLEAR") {
        return {
            ...state,
            [action.name]: {
                ...state[action.name],
                value: "",
                placeholder: action.placeholder ? action.placeholder : "",
            },
            isValid: state.isValid,
        };
    }

    // otherwise, this would 'reset' all entries
    return {
        [descriptionInputName]: {
            value: "",
            placeholder: "",
            isValid: false,
        },
        [costInputName]: {
            value: "",
            placeholder: "",
            isValid: false,
        },
        [dateInputName]: {
            value: "",
            placeholder: "",
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
            placeholder: "",
            isValid: null,
        },
        [costInputName]: {
            value: "",
            placeholder: "",
            isValid: null,
        },
        [dateInputName]: {
            value: "",
            placeholder: "",
            isValid: null,
        },
        isValid: null,
    });

    const inputChangeHandler = (event) => {
        const target = event.target;

        setFormState({
            type: "USER_INPUT",
            name: target.name,
            val: target.value,
        });

        setFormState({
            type: "FORM_VALIDATION",
        });
    };

    const validateInputHandler = (event) => {
        setFormState({ type: "INPUT_BLUR", name: event.target.name });
        setFormState({ type: "FORM_VALIDATION" });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        // return all empty input fields
        const invalidInputsList = getInvalidInputs(
            descriptionInputRef.current,
            costInputRef.current,
            dateInputRef.current
        );

        invalidInputsList.forEach((elementName) => {
            setFormState({
                type: "INPUT_CLEAR",
                name: elementName,
                placeholder: "Insert a valid text here.",
            });
        });

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

        props.onUserInput(amountsData);
    };

    const errorModalClose = () => {
        setError(null);

        if (formState[descriptionInputName].isValid === false)
            descriptionInputRef.current.activate();
        else if (formState[costInputName]) costInputRef.current.activate();
        else dateInputRef.current.activate();
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
                    <Input
                        label="Description"
                        name={descriptionInputName}
                        type="text"
                        id={descriptionInputName}
                        ref={descriptionInputRef}
                        value={formState[descriptionInputName].value}
                        placeholder={
                            formState[descriptionInputName].placeholder
                        }
                        className={
                            formState[descriptionInputName].isValid === false
                                ? styles["invalid"]
                                : ""
                        }
                        onChange={inputChangeHandler}
                        onBlur={validateInputHandler}
                        required
                    />
                    <Input
                        label="Cost"
                        name={costInputName}
                        type="number"
                        id={costInputName}
                        ref={costInputRef}
                        value={formState[costInputName].value}
                        placeholder={formState[costInputName].placeholder}
                        className={
                            formState[costInputName].isValid === false
                                ? styles["invalid"]
                                : ""
                        }
                        min="0.01"
                        step="0.01"
                        onChange={inputChangeHandler}
                        onBlur={validateInputHandler}
                        required
                    />
                    <Input
                        label="Date"
                        name={dateInputName}
                        type="date"
                        id={dateInputName}
                        ref={dateInputRef}
                        value={formState[dateInputName].value}
                        placeholder={formState[dateInputName].placeholder}
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
