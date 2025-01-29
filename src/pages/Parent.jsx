import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; 

function Parent() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Parent;
