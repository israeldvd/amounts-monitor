import * as locSet from "../utils/localeSettings";

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
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    );
}

export default ItemDate;
