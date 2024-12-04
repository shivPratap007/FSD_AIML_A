import { Link } from "react-router-dom";

export default function Counter() {
  return (
    <>
      <div>Counter</div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
