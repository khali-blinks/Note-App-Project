import { useState } from "react";
import Edittor from "./Editor";
import "bulma/css/bulma.min.css";

export default function App() {
  const [showEditor, setShowEditor] = useState(false);
  const handleClick = () => {
    setShowEditor(!showEditor);
  };
  return (
    <>
      <section className="hero is-primary mb-5">
        <div className="hero-body">
          <p className="title">Welcome to My Note App</p>
        </div>
      </section>
      <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <button onClick={handleClick} className=" button is-link mb-5">
          New Note
        </button>
        {showEditor && <Edittor />}
      </div>
    </>
  );
}
