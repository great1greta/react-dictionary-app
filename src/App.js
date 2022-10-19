import "./App.css";
import Dictionary from "./components/Dictionary.js";

export default function App() {
  return (
    <div className="App mt-5 mb-5">
      <div className="container">
        <h1 className="dictionary text-center"> Dictionary </h1>
        <Dictionary defaultKeyword="hello" />
      </div>
      <small>
        <a
          href="https://github.com/great1greta/react-dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-source code{" "}
        </a>{" "}
        by Greta Vasiulyte
      </small>
    </div>
  );
}
