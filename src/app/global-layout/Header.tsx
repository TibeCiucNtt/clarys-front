
import Link from "next/link";
import { headerStyle, navStyle, navListStyle, navItemStyle, linkStyle } from "./Header.styles";

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <h1>Clarys</h1>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link href="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/about" style={linkStyle}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
