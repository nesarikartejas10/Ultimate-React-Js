import { useState } from "react";
import "../styles/DropArea.css";

export default function DropArea({ onDrop }) {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={showDrop ? "drop_area" : "hide_drop_area"}
    >
      Drop here...
    </section>
  );
}
