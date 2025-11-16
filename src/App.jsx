import Editor from "./Editor";
import "bulma/css/bulma.min.css";

export default function App() {
  const handleClick = () => {
    return <Editor />;
  };
  return (
    <>
      <section className="hero is-primary mb-5">
        <div className="hero-body">
          <p className="title">Welcome to My Note App</p>
        </div>
      </section>
      <div className="buttons is-centered">
        <button onClick={handleClick} className=" button is-link mb-5">
          New Note
        </button>
      </div>
    </>
  );
}
