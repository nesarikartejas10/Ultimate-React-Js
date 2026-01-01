import { useState } from "react";

const CreateTodo = () => {
  const [tasks, setTasks] = useState(0);
  const [input, setInput] = useState("");

  const hideButton = false;
  const countTasks = () => {
    return tasks === 0 ? "No task available" : `Tasks: ${tasks}`;
  };

  const handleClick = () => {
    setTasks(tasks + 1);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <h2 style={{ backgroundColor: "lightblue" }}>{countTasks()}</h2>
      <input type="text" onChange={handleChange} />
      <button className="btn" disabled={hideButton} onClick={handleClick}>
        Add Task
      </button>
      <h2>{input}</h2>
    </>
  );
};

export default CreateTodo;
