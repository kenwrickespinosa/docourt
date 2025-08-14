import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex h-screen">
      <nav className="flex flex-col">
        <NavLink
          to="/home"
          className={({ isActive }) => `${isActive ? "bg-red-400" : "bg-none"}`}
        >
          Home
        </NavLink>
        <NavLink
          to="/cases"
          className={({ isActive }) => `${isActive ? "bg-red-400" : "bg-none"}`}
        >
          Cases
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
