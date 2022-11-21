import React from 'react'
import { sectionConst, iconConst } from '../constants/route.const'
import Home from '../pages/Home'
import Articles from '../pages/Articles'
import Contact from '../pages/Contact'

export interface routerProps {
  path: string
  element: React.ReactElement
  name?: string
  imgPath?: string
  note?: string
}

const useRoutes = () => {
  const router: Array<routerProps> = [
    {
      path: '/',
      element: <Home />,
      name: sectionConst.PORTFOLIO,
      imgPath: iconConst.PORTFOLIO,
      note: 'Representation of myself and my working career.'
    },
    {
      path: '/articles',
      element: <Articles />,
      name: sectionConst.ARTICLES,
      imgPath: iconConst.ARTICLES,
      note: 'Blogs, articles and all things in between that written by me.'
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
      note: `Reach out to me... or not. I'm not your dad.`
    }
  ]
  return {
    router
  }
}

export default useRoutes