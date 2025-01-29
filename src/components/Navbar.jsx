import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  NavbarContainer,
  NavbarInner,
  Logo,
  NavigationLinks,
  NavigationLink,
  MobileMenuButton,
  MobileMenu,
} from "./NavbarComponents"; 
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoImage from "../assets/logo2/1.png";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Band Members", path: "/band-members" },
  { name: "Albums", path: "/albums" },
  { name: "Tracks", path: "/albums/1/tracks" },
  { name: "History", path: "/history" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavbarInner>
        <Logo>
          <NavLink to="/">
            <img src={LogoImage} alt="Mogollar Logo" />
          </NavLink>
        </Logo>

        <NavigationLinks>
          {navigation.map((item) => (
            <NavigationLink key={item.name}>
              <NavLink
                to={item.path} end
                className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
              >
                {item.name}
              </NavLink>
            </NavigationLink>
          ))}
        </NavigationLinks>

        <MobileMenuButton
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </MobileMenuButton>
      </NavbarInner>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu>
          {navigation.map((item) => (
            <NavigationLink key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
              >
                {item.name}
              </NavLink>
            </NavigationLink>
          ))}
        </MobileMenu>
      )}
    </NavbarContainer>
  );
}
