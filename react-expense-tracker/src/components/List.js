import axios from "axios";

const List = ({ list, removeItem, setIsSummaryUpdate }) => {
  const handleDelete = (id) => {
    removeItem(id);
    axios(`http://localhost:3001/list/${id}`, {
      method: "delete",
    });
  };
  return (
    <div className="list">
      <ul>
        {list.length > 0 &&
          list?.map((item) => {
            return (
              <li
                className={
                  "border-end border-5 " +
                  (item.category === "expense"
                    ? "border-danger"
                    : "border-primary")
                }
                key={item.id}
              >
                <span className="date">{item.transactiondate}</span>
                <span className="description">{item.description}</span>
                <span className="price">
                  {item.category === "income" ? "+" : "-"} {item.amount}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-light"
                  >
                    X
                  </button>
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default List;
