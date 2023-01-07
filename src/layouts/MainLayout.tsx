import React, { useState, useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

// components
import Navbar from "../components/general/Navbar"
import Header from "../components/general/Header"
import BackToTop from "../components/general/BackToTop"
import Footer from "../components/general/Footer"
import Sidebar from "../components/general/Sidebar"

interface MainLayoutProps {
  name: string
  cover?: React.ReactNode
  aside?: boolean
  children: React.ReactNode
}

export default function MainLayout(props: MainLayoutProps) {
  const { name, cover, aside, children } = props
  const themeData = useContext(ThemeContext)
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const handleClick = () => setToggleMenu(!toggleMenu)

  return (
    <>
      <Navbar handleClick={handleClick} />
      <div
        className={`app-content ${name} ${themeData.theme}${
          toggleMenu ? " collapsed" : ""
        }`}
      >
        <Header handleClick={handleClick} />
        {cover}
        {/* <BackToTop /> */}
        <div className={"content-container" + (aside ? " aside" : "")}>
          <main>{children}</main>
          {aside && <Sidebar />}
        </div>
        <Footer />
      </div>
    </>
  )
}
