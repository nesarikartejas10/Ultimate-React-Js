import { useState } from "react";
import "../styles/TaskForm.css";
import Tag from "./Tag";

export default function Taskform() {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filteredTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prevTaskData) => {
        return { ...prevTaskData, tags: filteredTags };
      });
    } else {
      setTaskData((prevTaskData) => {
        return { ...prevTaskData, tags: [...prevTaskData.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prevTaskData) => {
      return { ...prevTaskData, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  console.log(taskData.tags);

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="task_input"
          name="task"
          placeholder="Enter your task"
          value={taskData.task}
          onChange={handleChange}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" selectTag={selectTag} />
            <Tag tagName="CSS" selectTag={selectTag} />
            <Tag tagName="JavaScript" selectTag={selectTag} />
            <Tag tagName="React" selectTag={selectTag} />
          </div>

          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button className="task_submit" type="submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
}
