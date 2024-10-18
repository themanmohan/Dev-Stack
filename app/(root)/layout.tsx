import React from 'react'
import Navbar from '@/components/shared/navbar/Navbar'
const Layout = ({children}: {children:React.ReactNode}) => {
  return (
    <main>
        <Navbar />
      {children}
    </main>
  )
}

export default Layout
