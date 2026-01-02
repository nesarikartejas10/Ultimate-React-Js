import "../styles/TaskColumn.css";

export default function TaskColumn({ title, icon }) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt={title} />
        {title}
      </h2>
    </section>
  );
}
