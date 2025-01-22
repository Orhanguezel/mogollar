import { Outlet } from "react-router-dom";
import Header from "../components/Header"; // Header bileşeni doğru yolu kontrol edin.

function Parent() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Parent;
