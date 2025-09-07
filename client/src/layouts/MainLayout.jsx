import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex h-screen">
      <nav className="flex flex-col bg-orange-200 w-1/6">
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
      <div className="flex-1">
        <div className="w-full h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
