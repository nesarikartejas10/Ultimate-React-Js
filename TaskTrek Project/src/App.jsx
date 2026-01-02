import "./App.css";
import TaskColumn from "./components/TaskColumn";
import Taskform from "./components/TaskForm";
import Todo from "./assets/direct-hit.png";
import Doing from "./assets/glowing-star.png";
import Done from "./assets/check-mark-button.png";

export default function App() {
  return (
    <div className="app">
      <Taskform />
      <main className="app_main">
        <TaskColumn title="To do" icon={Todo} />
        <TaskColumn title="Doing" icon={Doing} />
        <TaskColumn title="Done" icon={Done} />
      </main>
    </div>
  );
}
