const Header = ({ summary }) => {
  const subtractAmount = summary.income - summary.expense;
  return (
    <>
      <h1>Expense Tracker</h1>
      <h6>Your Balance</h6>
      <p>{subtractAmount}</p>
    </>
  );
};

export default Header;
