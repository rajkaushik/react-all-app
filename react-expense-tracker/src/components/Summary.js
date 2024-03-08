const Summery = ({ summary }) => {
  return (
    <div className="summary-card ">
      <div>
        <span>Income</span>
        <span>{summary.income}</span>
      </div>
      <div className="line-bar"></div>
      <div>
        <span>Expense</span>
        <span>{summary.expense}</span>
      </div>
    </div>
  );
};

export default Summery;
