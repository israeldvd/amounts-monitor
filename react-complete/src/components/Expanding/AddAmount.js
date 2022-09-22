import Card from "../UI/Card";
import "./AddAmount.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AmountForm from "./AmountForm";

const AddAmount = (props) => {
    const [isAdding, setIsAdding] = useState(false);

    const userInputHandler = (enteredData) => {
        const amountsData = {
            ...enteredData,
            id: uuidv4(),
        };

        props.onUserInput(amountsData);
        changeAdditionState();
    };

    const changeAdditionState = () => {
        setIsAdding((prevAddingState) => !prevAddingState);
    };

    return (
        <Card className="add-amount">
            {!isAdding && (
                <button onClick={changeAdditionState}>Add new amount</button>
            )}
            {isAdding && <AmountForm onUserInput={userInputHandler} onUserCancel={changeAdditionState} />}
        </Card>
    );
};

export default AddAmount;
