import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {" | "}
      <Link to="/cards">Cards</Link>
      {" | "}
      <Link to="/cards/new">Add Card</Link>
    </nav>
  );
}
