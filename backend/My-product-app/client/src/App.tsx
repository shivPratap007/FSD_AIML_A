import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/viewusers" element={<Users/>} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
