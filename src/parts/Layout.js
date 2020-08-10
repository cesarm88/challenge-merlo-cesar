import React from 'react';
import Header from './Header'

const Layout = ({children}) => {
  return ( 
    <>
    <Header />
    <main className="container mx-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-around py-20">
      {children}
    </main>
    </>
   );
}
 
export default Layout;