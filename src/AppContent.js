import "./App.css";
import { Routes, Route } from "react-router-dom";
import Components from "./themes/Components";
import Props from "./themes/Props";
import State from "./themes/State";
import Lifecycle from "./themes/Lifecycle";
import Events from "./themes/Events";
import Key from "./themes/Key";
import Refs from "./themes/Refs";
import VirtualDOM from "./themes/VirtualDOM";
import Fragment from "./themes/Fragment";
import ReactMemo from "./themes/ReactMemo";
import UseEffect from "./themes/UseEffect";
import Router from "./themes/Router";
import Context from "./themes/Context";
import Form from "./themes/Form";
import Home from "./Home";

function AppContent() {
  return (
    <div className="App-content">
      <Routes>
        <Route path="/roadmap" element={<Home />} />
        <Route path="/roadmap/components" element={<Components />} />
        <Route path="/roadmap/props" element={<Props />} />
        <Route path="/roadmap/state" element={<State />} />
        <Route path="/roadmap/lifecycle" element={<Lifecycle />} />
        <Route path="/roadmap/events" element={<Events />} />
        <Route path="/roadmap/key" element={<Key />} />
        <Route path="/roadmap/refs" element={<Refs />} />
        <Route path="/roadmap/dom" element={<VirtualDOM />} />
        <Route path="/roadmap/fragment" element={<Fragment />} />
        <Route path="/roadmap/memo" element={<ReactMemo />} />
        <Route path="/roadmap/useEffect" element={<UseEffect />} />
        <Route path="/roadmap/router" element={<Router />} />
        <Route path="/roadmap/context" element={<Context />} />
        <Route path="/roadmap/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default AppContent;
