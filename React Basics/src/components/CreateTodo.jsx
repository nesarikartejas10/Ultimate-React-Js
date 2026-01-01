const CreateTodo = () => {
  let tasks = 0;
  const hideButton = false;
  const countTasks = () => {
    return tasks === 0 ? "No task available" : `Tasks: ${tasks}`;
  };

  const handleClick = () => {
    tasks++;
    console.log("Add task:", tasks);
  };
  return (
    <>
      <h2 style={{ backgroundColor: "lightblue" }}>{countTasks()}</h2>
      <button className="btn" disabled={hideButton} onClick={handleClick}>
        Add Task
      </button>
    </>
  );
};

export default CreateTodo;
