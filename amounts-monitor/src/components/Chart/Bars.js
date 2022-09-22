import styles from "./Bars.module.css";

const Bars = (props) => {
    let barFillPerc = '0%';

    if (props.maxValue > 0)
        barFillPerc = Math.round(props.value*100/props.maxValue) + '%'

    return (
        <div className={styles["bar"]}>
            <div className={styles["bar__wrapper"]}>
                <div className={styles["bar__fill"]} style={{height: barFillPerc}}></div>
            </div>
            <div className={styles["bar__label"]}>
                {props.label}
            </div>
        </div>
    );
};

export default Bars;
