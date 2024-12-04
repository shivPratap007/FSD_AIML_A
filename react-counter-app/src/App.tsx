import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/counter" element={<h1>Home</h1>} />
        <Route path="/stopwatch" element={<h1>Home</h1>} />
        <Route path="*" element={<h1>Home</h1>} />
      </Routes>
    </div>
  )
}

export default App
