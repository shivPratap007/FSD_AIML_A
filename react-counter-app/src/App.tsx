import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Counter from "./pages/Counter";
import Stopwatch from "./pages/Stopwatch";
import NotAvailable from "./pages/NotAvailable";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="*" element={<NotAvailable />} />
      </Routes>
    </div>
  );
}

export default App;
