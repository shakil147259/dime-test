import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AddClient } from "./pages/client";
import Sidebar from "./shared/container/Sidebar/Sidebar";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex gap-5 text-base bg-shade">
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<AddClient />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
