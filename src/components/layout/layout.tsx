import React from "react"; // Import React for JSX typing
import Header from "../navbar";
import Footer from "../footer";

interface LayoutProps {
  children: React.ReactNode; // Define the type for children
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
