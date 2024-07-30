import "./App.css";
import Card from "./components/Card";
import "./index.css";
function App() {
  let myObj = {
    username: "Prajakta",
    age: 21,
  };
  return (
    <>
      <h1 className="bg-red-400 rounded-xl">Tailwind test</h1>
      {/* <Card channel="reactvitecode" someObj={myObj} /> */}
      <Card username="Prajakta" btnText="visit me" />
    </>
  );
}

export default App;
