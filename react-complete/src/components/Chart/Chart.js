import Bars from "./Bars";
import Card from "../UI/Card"
import "./Chart.css";

const Chart = (props) => {
    const values = props.barsData.map((singleBarData) => singleBarData.value);
    const filterTotal = Math.max(...values);

    return (
        <Card className="chart">
            {props.barsData.map((singleBar) => (
                <Bars
                    key={singleBar.label}
                    value={singleBar.value}
                    maxValue={filterTotal}
                    label={singleBar.label}
                />
            ))}
        </Card>
    );
};

export default Chart;
