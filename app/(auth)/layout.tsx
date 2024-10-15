import React from 'react'

function Layout({children}:{children:React.ReactNode}) {
  return (
    <main className='flex min-h-screen'>
        {children}
    </main>
  )
}

export default Layout