import "../styles/TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

export default function TaskCard({ title, tags, handleDelete, index }) {
  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} isSelected={true} />
          ))}
        </div>

        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" alt="delete-icon" />
        </div>
      </div>
    </article>
  );
}
