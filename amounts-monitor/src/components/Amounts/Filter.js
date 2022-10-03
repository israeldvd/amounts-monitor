import styles from "./Filter.module.css";
import insertAt from "../../utils/sortedListInsert";

const Filter = (props) => {
    const filterSelecHandler = (event) => {
        props.onSelectYear(event.target.value); //move data upwards the components tree
    };

    const currentYear = new Date().getFullYear();

    // remove duplicated years and insert the current, if not present
    let selectYears = [...new Set(props.yearsAlternatives)];

    if (!selectYears.includes(currentYear)) {
        insertAt(selectYears, currentYear);
    }

    return (
        <div className={styles["filter"]}>
            <div className={styles["filter-control"]}>
                <label htmlFor="year-filter">Filter by year</label>
                <select
                    name="year-filter"
                    id="year-filter"
                    onChange={filterSelecHandler}
                    value={props.selected}
                >
                    {selectYears.map((element) => {
                        return (
                            <option key={element} value={element}>
                                {element}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

export default Filter;
