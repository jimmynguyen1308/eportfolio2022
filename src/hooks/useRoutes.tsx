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
  note?: string
}

const useRoutes = () => {
  const router: Array<routerProps> = [
    {
      path: '/',
      element: <Home />,
      name: sectionConst.HOME,
      imgPath: iconConst.HOME,
      note: 'Go to homepage'
    },
    {
      path: '/portfolio',
      element: <Portfolio />,
      name: sectionConst.PORTFOLIO,
      imgPath: iconConst.PORTFOLIO,
      note: 'Come to see my work'
    },
    {
      path: '/articles',
      element: <Articles />,
      name: sectionConst.ARTICLES,
      imgPath: iconConst.ARTICLES,
      note: 'Things written by me'
    },
    {
      path: '/articles/:id',
      element: <Articles />
    },
    {
      path: '/contact',
      element: <Contact />,
      name: sectionConst.CONTACT,
      imgPath: iconConst.CONTACT,
      note: 'Reach out to me'
    }
  ]
  return {
    router
  }
}

export default useRoutes