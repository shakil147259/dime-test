import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AddClient } from "./pages/client";
import Sidebar from "./shared/container/Sidebar/Sidebar";

export const App = () => {
  return (
    <Router>
      <div className="flex gap-5">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<AddClient />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
