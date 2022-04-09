import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import Prompt from "./Prompt";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [promptClicked, setPromptClicked] = useState(false);

  const promptClickHandler = () => {
    setPromptClicked((prevState) => {
      return !prevState;
    });
  };

  const cancelClickHandler = () => {
    setPromptClicked((prevState) => {
      return !prevState;
    });
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    cancelClickHandler();
  };

  if (promptClicked === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelClick={cancelClickHandler}
        />
      </div>
    );
  }

  return (
    <div className="new-expense">
      <Prompt promptClickHandler={promptClickHandler} />
    </div>
  );
};

export default NewExpense;
