import Card from "../UI/Card";
import "./AddAmount.css";
import { v4 as uuidv4 } from "uuid";

import AmountForm from "./AmountForm";

const AddAmount = (props) => {
    const userInputHandler = (enteredData) => {
        const amountsData = {
            ...enteredData,
            id: uuidv4(),
        };

        props.onUserInput(amountsData);
    };

    return (
        <Card className="add-amount">
            <AmountForm onUserInput={userInputHandler} />
        </Card>
    );
};

export default AddAmount;
