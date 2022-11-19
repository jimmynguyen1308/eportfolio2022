import React from 'react'
import Header from '../components/general/Header'
import Footer from '../components/general/Footer'

interface MainLayoutProps {
  name: string,
  children: React.ReactNode
}

export default function MainLayout(props: MainLayoutProps) {
  const { name, children } = props
  return (
    <div className={'app-content ' + name}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
