import { Core } from "../components/Core";
import { Outlet } from "react-router-dom";

export const Admin = () => {
  return (
    <div>
      <Core header="ADMIN SECTION" />
      <Outlet />
    </div>
  );
};
