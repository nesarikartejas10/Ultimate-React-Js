import "../styles/Tag.css";

export default function Tag({ tagName, selectTag }) {
  return (
    <button type="button" className="tag" onClick={() => selectTag(tagName)}>
      {tagName}
    </button>
  );
}
