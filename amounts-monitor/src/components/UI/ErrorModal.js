import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    return (
        <div>
            <div className={styles.backdrop}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <main className={styles.contents}>
                    <p>{props.content}</p>
                </main>
                <footer className={styles.action}>
                    <Button>Close</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorModal;