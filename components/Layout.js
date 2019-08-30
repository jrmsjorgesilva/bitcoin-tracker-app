import React from 'react'
import NavBar from './NavBar'
import Head from 'next/head'

const Layout = (props) => {
    return (
        <div>
            <head>
                <title>Bitcoin Tracker</title>
                <link rel='stylesheet' href='https://bootswatch.com/4/united/bootstrap.min.css' />
            </head>
            <NavBar/>
            <div className='container'>
                {props.children}
            </div>
        </div>
    )
}

export default Layout
