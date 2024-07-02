import { useState } from "react";
import Button from "../UI/Button";

import "./AddWorked.css";

const AddWorked = ({addUsers}) => {

  const [enteredName, setEnteredName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");

  const minWage = 100000;

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  }

  const wageHandler = (e) => {     
    setEnteredWage(e.target.value);
  }

  const addedHandler = (e) => {
    e.preventDefault();

    if(enteredName.trim().length === 0) {
      alert("İsmini kontrol et!");
      return;
    }
    
    if(+enteredWage < minWage) {
      alert("Maaşını kontrol et!");
      return;
    }

    addUsers(enteredName, enteredWage)

    console.log(enteredName, enteredWage);

    setEnteredName("")
    setEnteredWage("")
  }


  return (
    <form onSubmit={addedHandler}>
      <h2>Personel Maaşı</h2>
      <input type="text" value={enteredName} onChange={nameHandler} />
      <input type="number" value={enteredWage} onChange={wageHandler} />
      <Button>Ekle</Button>
    </form>
  )
}

export default AddWorked