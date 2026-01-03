import "./App.css";
import TaskColumn from "./components/TaskColumn";
import TaskForm from "./components/TaskForm";
import Todo from "./assets/direct-hit.png";
import Doing from "./assets/glowing-star.png";
import Done from "./assets/check-mark-button.png";
import { useEffect, useState } from "react";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

export default function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  const [activeCard, setActiceCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const onDrop = (status, position) => {
    console.log(
      `${activeCard} is placed into ${status} and at the position ${position}`
    );

    if (activeCard === null || activeCard === undefined) return;
    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status,
    });

    setTasks(updatedTasks);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="To do"
          icon={Todo}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
          setActiceCard={setActiceCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Doing"
          icon={Doing}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
          setActiceCard={setActiceCard}
          onDrop={onDrop}
        />
        <TaskColumn
          title="Done"
          icon={Done}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
          setActiceCard={setActiceCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
}
