import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/base.css";
import "./styles/color.css";

function App() {
  return (
    <div className="App flex column">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
