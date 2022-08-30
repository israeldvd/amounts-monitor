import * as locSet from "../../utils/localeSettings";
import "./ItemDate.css";

function ItemDate(props) {
    const locale = locSet.getNavigatorLanguage;
    const day = props.date.toLocaleString(locale, {
        day: locSet.dateOptions.day,
    });
    const month = props.date.toLocaleString(locale, {
        month: locSet.dateOptions.month,
    });
    const year = props.date.getFullYear();

    return (
        <div className="item-date">
            <div className="month">{month}</div>
            <div className="day">{day}</div>
            <div className="year">{year}</div>
        </div>
    );
}

export default ItemDate;
