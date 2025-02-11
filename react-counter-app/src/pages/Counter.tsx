import { useState } from "react";
import { Link } from "react-router-dom";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter Application</h1>
      <div>
        <h3>Live Counter {count}</h3>
        <div>
          <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
          <div>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
          </div>
        </div>
      </div>

      <Link to="/">Home</Link>
    </>
  );
}
