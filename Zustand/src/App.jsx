i;
import "./App.css";
import useMyStore from "./store";

const App = () => {
  const count = useMyStore((state) => state.count);
  const name = useMyStore((state) => state.name);
  const increment = useMyStore((state) => state.increment);
  const capitalize = useMyStore((state) => state.capitalize);

  const handleClick = () => {
    increment();
  };

  const handleCapitalize = () => {
    capitalize();
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Name: {name}</h2>
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleCapitalize}>capitalize</button>
    </div>
  );
};

export default App;
