import "@/styles/globals.css";
import Header from "./global-layout/Header";
import Footer from "./global-layout/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={layoutStyle}>
        <Header />
        <div style={contentWrapperStyle}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

const layoutStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh", // Ensures the body covers the entire viewport height
  margin: 0,
};

const contentWrapperStyle: React.CSSProperties = {
  flex: 1, // Ensures the content takes up the remaining space between Header and Footer
  padding: "1rem", // Optional: Adds padding for content
};
