import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/stopwatch">Counter</Link>
        </li>
      </ul>
    </div>
  );
}
