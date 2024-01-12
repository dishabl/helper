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
        <Route path="/helper" element={<Home />} />
        <Route path="/helper/components" element={<Components />} />
        <Route path="/helper/props" element={<Props />} />
        <Route path="/helper/state" element={<State />} />
        <Route path="/helper/lifecycle" element={<Lifecycle />} />
        <Route path="/helper/events" element={<Events />} />
        <Route path="/helper/key" element={<Key />} />
        <Route path="/helper/refs" element={<Refs />} />
        <Route path="/helper/dom" element={<VirtualDOM />} />
        <Route path="/helper/fragment" element={<Fragment />} />
        <Route path="/helper/memo" element={<ReactMemo />} />
        <Route path="/helper/useEffect" element={<UseEffect />} />
        <Route path="/helper/router" element={<Router />} />
        <Route path="/helper/context" element={<Context />} />
        <Route path="/helper/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default AppContent;
