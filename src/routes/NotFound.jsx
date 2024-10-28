// NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>There's Nothing Here!</h2>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
