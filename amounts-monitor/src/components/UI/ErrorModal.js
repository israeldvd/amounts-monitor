import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <main className={styles.contents}>
                <p>{props.content}</p>
            </main>
            <footer className={styles.action}>
                <Button onClick={props.onConfirm}>Close</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    content={props.content}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById("overlay-root")
            )}
        </Fragment>
    );
};

export default ErrorModal;
