import Bars from "./Bars";
import "./Bars.css";

const Chart = (props) => {
    const values = props.barsData.map((singleBarData) => singleBarData.value);
    const filterTotal = Math.max(...values);

    return (
        <div className="chart">
            {props.barsData.map((singleBar) => (
                <Bars
                    key={singleBar.label}
                    value={singleBar.value}
                    maxValue={filterTotal}
                    label={singleBar.value}
                />
            ))}
        </div>
    );
};

export default Chart;
