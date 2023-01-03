import React, { useState, useEffect } from "react"
import { themeConst, themeDefault } from "../constants/theme.const"
import { storageUtils } from "../utils/storage.utils"

interface ThemeContextProviderProps {
  children: React.ReactNode
}

interface ThemeContextDefault {
  theme: string
  changeTheme: (newTheme: string) => void
}

export const ThemeContext =
  React.createContext<ThemeContextDefault>(themeDefault)

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const siteTheme = storageUtils.getValue("site_theme")
  const [theme, setTheme] = useState(themeDefault.theme)
  const changeTheme = (newTheme: string) => setTheme(newTheme)
  const themeData = { theme, changeTheme }

  const setThemeBySystem = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      setTheme(themeConst.DARK)
    else setTheme(themeConst.LIGHT)
  }

  useEffect(() => {
    if (siteTheme === null) setThemeBySystem()
    else
      switch (siteTheme) {
        case "system":
          setThemeBySystem()
          break
        case "light":
          setTheme(themeConst.LIGHT)
          break
        case "dark":
          setTheme(themeConst.DARK)
          break
        default:
          break
      }
  }, [siteTheme, themeData])

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider
