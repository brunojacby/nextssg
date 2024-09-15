import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`${className} w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark dark:text-light
    xl:p-24 lg:p-16 md:p-12 sm:p-8
    `}>
        {children}
    </div>
  )
}

export default Layout