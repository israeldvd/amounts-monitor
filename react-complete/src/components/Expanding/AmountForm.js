import "./AmountForm.css";

const AmountForm = () => {
    return (
        <form action="POST">
            <div className="settings">
                <div className="setter">
                    <label htmlFor="set-title">Title</label>
                    <input type="text" name="set-title" />
                </div>
                <div className="setter">
                    <label htmlFor="set-amount">Amount</label>
                    <input
                        type="number"
                        name="set-amount"
                        min="0.01"
                        step="0.01"
                    />
                </div>
                <div className="setter">
                    <label htmlFor="set-date">Date</label>
                    <input
                        type="date"
                        name="set-date"
                        min="2000-01-01"
                        max="2050-12-31"
                    />
                </div>
                <div className="action">
                    <button type="submit">Add new</button>
                </div>
            </div>
        </form>
    );
};

export default AmountForm;