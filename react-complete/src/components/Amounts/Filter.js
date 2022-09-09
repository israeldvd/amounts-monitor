import "./Filter.css";

const Filter = (props) => {
    const filterSelecHandler = () => {
        console.log("year selected!!");
    };

    const selectYears = [
        ...new Set([new Date().getFullYear(), ...props.yearsAlternatives]),
    ];

    return (
        <div className="filter">
            <div className="filter-control">
                <label>Filter by year</label>
                <select
                    name="year-filter"
                    id="year-filter"
                    onChange={filterSelecHandler}
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
