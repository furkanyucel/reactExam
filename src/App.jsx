import { useState } from "react";
import AddWorked from "./components/AddWorked";
import ListWorked from "./components/ListWorked";

import "./App.css";

function App() {

  const [workers, setWorkers] = useState([]);

  const users = (enteredName, enteredWage) => {

    const newUsers = {
      id: Math.random().toString(),
      name: enteredName,
      wage: enteredWage,
    }

    setWorkers((prevState) => [...prevState, newUsers])
  }

  return (
    <>
      <AddWorked addUsers={users} />
      {workers.length > 0 && <ListWorked workers={workers} setWorkers={setWorkers} />}
    </>
  );
}

export default App;


