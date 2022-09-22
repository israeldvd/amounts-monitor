import * as locSet from "../../utils/localeSettings";
import styles from "./ItemDate.module.css";

const ItemDate = (props) => {
    const locale = locSet.getNavigatorLanguage;
    const day = props.date.toLocaleString(locale, {
        day: locSet.dateOptions.day,
    });
    const month = props.date.toLocaleString(locale, {
        month: locSet.dateOptions.month,
    });
    const year = props.date.getFullYear();

    return (
        <div className={styles["item-date"]}>
            <div className={styles["month"]}>{month}</div>
            <div className={styles["day"]}>{day}</div>
            <div className={styles["year"]}>{year}</div>
        </div>
    );
}

export default ItemDate;
