import React from 'react'
import { sectionConst, iconConst } from '../constants/route.const'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'
import Articles from '../pages/Articles'
import Contact from '../pages/Contact'

export interface routerProps {
  path: string,
  element: React.ReactElement,
  name?: string,
  imgPath?: string,
}

const useRoutes = () => {
  const router: Array<routerProps> = [
    {
      path: '/',
      element: <Home />,
      name: sectionConst.HOME,
      imgPath: iconConst.HOME
    },
    {
      path: '/portfolio',
      element: <Portfolio />,
      name: sectionConst.PORTFOLIO,
      imgPath: iconConst.PORTFOLIO
    },
    {
      path: '/articles',
      element: <Articles />,
      name: sectionConst.ARTICLES,
      imgPath: iconConst.ARTICLES
    },
    {
      path: '/articles/:id',
      element: <Articles />
    },
    {
      path: '/contact',
      element: <Contact />,
      name: sectionConst.CONTACT,
      imgPath: iconConst.CONTACT
    }
  ]
  return {
    router
  }
}

export default useRoutes