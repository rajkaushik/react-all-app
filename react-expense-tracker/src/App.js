import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Summary from "./components/Summary";
import UserForm from "./components/UserForm";
import List from "./components/List";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [summary, setSummary] = useState({ income: 0, expense: 0 });
  const [isSummaryUpdate, setIsSummaryUpdate] = useState(false);

  const addItem = (item) => {
    setIsSummaryUpdate(!isSummaryUpdate);
    setList([...list, item]);
    if (item.category === "income") {
      totalIncome();
    }
    if (item.category === "expense") {
      totalExpense();
    }
  };

  const removeItem = (id) => {
    let filter = list.filter((item) => item.id !== id);
    setList(filter);
    setIsSummaryUpdate(!isSummaryUpdate);
  };

  const totalIncome = () => {
    let totalInc = list?.reduce((cum, cur) => {
      if (cur.category === "income") {
        return (cum += parseInt(cur.amount));
      } else return cum;
    }, 0);
    setSummary((prev) => {
      return {
        ...prev,
        income: totalInc,
      };
    });
  };
  const totalExpense = () => {
    let totalExp = list?.reduce((cum, cur) => {
      if (cur.category === "expense") {
        return (cum += parseInt(cur.amount));
      } else return cum;
    }, 0);
    setSummary((prev) => {
      return {
        ...prev,
        expense: totalExp,
      };
    });
  };

  useEffect(() => {
    totalExpense();
    totalIncome();
  }, [isSummaryUpdate]);

  useEffect(() => {
    axios.get("http://localhost:3001/list").then((res) => {
      setList(res.data);
      setIsSummaryUpdate(true);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="col-md-4 offset-md-4 text-center">
          <Header summary={summary} />
        </div>
        <div className="col-md-4 offset-md-4">
          <Summary summary={summary} />
        </div>
        <div className="col-md-4 offset-md-4">
          <UserForm addItem={addItem} />
        </div>
        <div className="col-md-4 offset-md-4">
          <List list={list} removeItem={removeItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
