import React from "react";
import "../styles/TaskColumn.css";
import DropArea from "./DropArea";
import TaskCard from "./TaskCard";

export default function TaskColumn({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiceCard,
  onDrop,
}) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt={title} />
        {title}
      </h2>
      <DropArea onDrop={() => onDrop(status, 0)} />
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <React.Fragment key={index}>
              <TaskCard
                title={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                index={index}
                setActiceCard={setActiceCard}
              />
              <DropArea onDrop={() => onDrop(status, index + 1)} />
            </React.Fragment>
          )
      )}
    </section>
  );
}
