import "./AmountItem.css";
import * as locSet from "../utils/localeSettings";

function AmountItem(props) {
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
            <div className="whole_amount_item">
                <div className="item_info">
                    <h2 className="item_description">{props.title}</h2>
                    <div>
                        <div>{month}</div>
                        <div>{year}</div>
                        <div>{day}</div>
                    </div>
                </div>
                <div className="item_cost">R$ {props.cost}</div>
            </div>
        </div>
    );
}

export default AmountItem;
