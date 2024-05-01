import { Outlet } from "react-router-dom";
import Header from "./Layout/Header/Header"
import Footer from "./Layout/Footer"

export default function DefaultPage() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}