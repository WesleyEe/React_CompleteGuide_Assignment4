import "./Prompt.css";

const Prompt = (props) => {
  return (
    <div className="prompt__actions">
      <button onClick={props.promptClickHandler}>Add New Expense</button>
    </div>
  );
};

export default Prompt;
