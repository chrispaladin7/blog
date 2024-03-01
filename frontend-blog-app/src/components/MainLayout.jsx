import React, { Children } from 'react'
import Footer from './Footer';
import Header from './Header';
export const MainLayout = () => {
  return (
    <div>
        <Header/>
        {Children}
        <Footer/>
    </div>
  )
}

export default MainLayout;