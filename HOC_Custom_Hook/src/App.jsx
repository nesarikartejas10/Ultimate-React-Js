import "./App.css";
import HelloUser from "./components/HelloUser";
import withBorder from "./hoc/withBorder";
import Counter from "./components/Counter";
import CountTracker from "./components/CountTracker";

function App() {
  const HelloUserWithBorder = withBorder(HelloUser);
  const CounterWithBorder = withBorder(Counter);

  return (
    <>
      {/* HOC */}
      {/* <HelloUserWithBorder user="Tejas" />
      <CounterWithBorder message="Please click on increse button" /> */}

      {/* Custom Hook */}
      <CountTracker />
    </>
  );
}

export default App;
