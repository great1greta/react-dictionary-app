import "./App.css";
import Dictionary from "./components/Dictionary.js";

export default function App() {
  return (
    <div className="App mt-5">
      <div className="container">
        <h1 className="text-center"> Dictionary </h1>
        <Dictionary defaultKeyword="welcome" />
      </div>
    </div>
  );
}
