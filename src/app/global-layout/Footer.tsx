import Link from "next/link";
import { footerStyle, linkStyle } from "./Footer.styles";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <p>&copy; {new Date().getFullYear()} Clarys.ai. All rights reserved.</p>
        <nav>
          <Link href="/privacy" style={linkStyle}>
            Privacy Policy
          </Link>
          {" "}|{" "}
          <Link href="/terms" style={linkStyle}>
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
