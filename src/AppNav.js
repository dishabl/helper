import "./App.css";
import { Link } from "react-router-dom";

function AppNav() {
  return (
    <div className="App-nav">
      <h4 className="themes">Темы:</h4>
      <div className="themes__link">
        <Link to="/helper/components">Components</Link>
      </div>
      <div className="themes__link">
        <Link to="/helper/props">Props</Link>
      </div>
      <div className="themes__link">
        <Link to="/helper/state">State</Link>
      </div>
      <div className="themes__link">
        <Link to="/helper/lifecycle">Lifecycle</Link>
      </div>
      <div className="themes__link">
        <Link to="/helper/events">Events</Link>
      </div>
      <div className="themes__link">
        <Link to="/helper/key">Key</Link>
      </div>
      <div className="themes__link">
        <Link to="/helper/refs">Refs</Link>
      </div>
      <div className="themes__link">
        <Link to="/helper/dom">Virtual DOM</Link>
      </div>
      <div className="themes__link">
        <Link to="/helper/fragment">Fragment</Link>
      </div>
      <div className="themes__link">
        <Link to="/helper/memo">React.memo</Link>
      </div>
      <div className="themes__link">
        <Link to="/helper/useEffect">useEffect</Link>
      </div>
      <div className="themes__link">
        <Link to="/helper/router">Router</Link>
      </div>
      <div className="themes__link">
        <Link to="/helper/context">Context</Link>
      </div>
      <div className="themes__link">
        <Link to="/helper/form">Form</Link>
      </div>
    </div>
  );
}

export default AppNav;
