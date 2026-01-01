const CreateTodo = () => {
  const tasks = 5;
  const hideButton = false;
  const countTasks = () => {
    return tasks === 0 ? "No task available" : `Tasks: ${tasks}`;
  };
  return (
    <>
      <h2 style={{ backgroundColor: "lightblue" }}>{countTasks()}</h2>
      <button className="btn" disabled={hideButton}>
        Add Task
      </button>
    </>
  );
};

export default CreateTodo;
