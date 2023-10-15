import { Outlet } from "react-router-dom";
import { Nav } from "../component";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Nav />
      {children}
      <Outlet />
    </div>
  );
};

export default Layout;
