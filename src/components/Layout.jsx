// Layout.jsx
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav style={{ padding: "10px" }}>
        <Link
          to="/"
          style={{
            marginRight: "10px",
            // border: "2px solid white",
            background: "white",
            padding: "2%",
            fontSize: "xx-larger",
          }}
        >
          Home
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
