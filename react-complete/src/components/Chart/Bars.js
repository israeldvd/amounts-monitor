import "./Bars.css";

const Bars = (props) => {
    let barFillPerc = '0%';

    if (props.maxValue > 0)
        barFillPerc = Math.round(props.value*100/props.maxValue) + '%'

    return (
        <div className="bar">
            <div className="bar__wrapper">
                <div className="bar__fill" style={{height: barFillPerc}}></div>
            </div>
            <div className="bar__label">
                {props.label}
            </div>
        </div>
    );
};

export default Bars;
