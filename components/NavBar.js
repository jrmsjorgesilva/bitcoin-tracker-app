import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Bitcoin Tracker</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link href='/'><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/about'><a className="nav-link">About Us</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/cryptocurrency'><a className="nav-link">Cryptocurrency</a></Link>
                    </li>
                </ul>
                <style>
                    {`
                        ul li {
                            display: flex;
                            justify-content: space-around;
                        }
                        .navlogo {
                            background: url(/img/bitcoin.jpeg);
                        }
                    `}
                </style>
            </div>
        </nav>
    )
}

export default NavBar
