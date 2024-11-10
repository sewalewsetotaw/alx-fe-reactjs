import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", color: "white", padding: "5px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "10px" }}>
        about
      </Link>
      <Link to="/Services" style={{ marginRight: "10px" }}>
        Services
      </Link>
      <Link to="/Contact" style={{ marginRight: "10px" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
