const CreateTodo = () => {
  const tasks = 5;
  const countTasks = () => {
    return tasks === 0 ? "No task available" : `Tasks: ${tasks}`;
  };
  return (
    <>
      <h2>{countTasks()}</h2>
      <button>Add Task</button>
    </>
  );
};

export default CreateTodo;
