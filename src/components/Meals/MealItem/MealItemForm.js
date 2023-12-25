import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [isAmountValid,setIsAmountValid] = useState(true)
  const submitHandler=(event)=>{
    
    event.preventDefault()
    const amountAsNumber = +amountRef.current.value
    if(!amountAsNumber|| amountAsNumber<1 || amountAsNumber>5){
        setIsAmountValid(false)
    }
    props.onAddItemToCart(amountAsNumber)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!isAmountValid && <p>Please select valid amount 1-5</p>}
    </form>
  );
};

export default MealItemForm;
