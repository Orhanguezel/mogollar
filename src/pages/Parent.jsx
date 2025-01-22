import { Link, Outlet } from "react-router-dom";

function Parent() {
  return (
    <>
      <nav>
        <ul className="parent-nav">
          <Link className="parent-link home-link" to="/">
            Home
          </Link>

          <Link className="parent-link" to="/one">BandMembers</Link>

          <Link className="parent-link"  to="/two">Albums</Link>

          <Link className="parent-link"  to="/three">Music</Link>

          <Link className="parent-link"  to="/three">Gallery</Link>

          <Link className="parent-link"  to="/three">Music</Link>

          <Link className="parent-link"  to="/three">Tour</Link>

          <Link className="parent-link"  to="/three">Music</Link>

          <Link className="parent-link"  to="/three">History </Link>

          <Link className="parent-link"  to="/three">Contact</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Parent;
