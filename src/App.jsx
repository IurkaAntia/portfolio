import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home.jsx";
function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
