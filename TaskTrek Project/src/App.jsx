import "./App.css";
import Taskform from "./components/TaskForm";

export default function App() {
  return (
    <div className="app">
      <Taskform />
      <main className="app_main">
        <section className="task_column">section 1</section>
        <section className="task_column">section 2</section>
        <section className="task_column">section 3</section>
      </main>
    </div>
  );
}
