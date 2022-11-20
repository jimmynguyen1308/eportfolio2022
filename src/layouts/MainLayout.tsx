import React from 'react'
import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import Sidebar from '../components/general/Sidebar'

interface MainLayoutProps {
  name: string,
  cover?: React.ReactNode,
  aside?: boolean,
  children: React.ReactNode
}

export default function MainLayout(props: MainLayoutProps) {
  const { name, cover, aside, children } = props
  return (
    <div className={'app-content ' + name}>
      <Header />
      {cover}
      <div className={'content-container' + (aside ? ' aside' : '')}>
        <main>
          {children}
        </main>
        {aside && <Sidebar />}
      </div>
      <Footer />
    </div>
  )
}
