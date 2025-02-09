import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
