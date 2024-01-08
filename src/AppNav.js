import "./App.css";
import { Link } from "react-router-dom";

function AppNav() {
  return (
    <div className="App-nav">
      <h4 className="themes">Темы:</h4>
      <div className="themes__link">
        <Link to="/roadmap/components">Components</Link>
      </div>
      <div className="themes__link">
        <Link to="/roadmap/props">Props</Link>
      </div>
      <div className="themes__link">
        <Link to="/roadmap/state">State</Link>
      </div>
      <div className="themes__link">
        <Link to="/roadmap/lifecycle">Lifecycle</Link>
      </div>
      <div className="themes__link">
        <Link to="/roadmap/events">Events</Link>
      </div>
      <div className="themes__link">
        <Link to="/roadmap/key">Key</Link>
      </div>
      <div className="themes__link">
        <Link to="/roadmap/refs">Refs</Link>
      </div>
      <div className="themes__link">
        <Link to="/roadmap/dom">Virtual DOM</Link>
      </div>
      <div className="themes__link">
        <Link to="/roadmap/fragment">Fragment</Link>
      </div>
      <div className="themes__link">
        <Link to="/roadmap/memo">React.memo</Link>
      </div>
      <div className="themes__link">
        <Link to="/roadmap/useEffect">useEffect</Link>
      </div>
      <div className="themes__link">
        <Link to="/roadmap/router">Router</Link>
      </div>
      <div className="themes__link">
        <Link to="/roadmap/context">Context</Link>
      </div>
      <div className="themes__link">
        <Link to="/roadmap/form">Form</Link>
      </div>
    </div>
  );
}

export default AppNav;
