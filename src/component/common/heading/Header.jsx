import React from 'react'
import Head from './Head'
import "./header.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
    const [click, setClick] = useState(false)
    return (
        <>
            <Head />
            <header>
                <nav className='flexSB'>
                    <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
                        <li> <Link to = "/">home</Link> </li>
                        <li> <Link to = "/courses">all courses</Link> </li>
                        <li> <Link to = "/about">about</Link> </li>
                        <li> <Link to = "/pricing">pricing</Link> </li>
                        <li> <Link to = "/blog">blog</Link> </li>
                        <li> <Link to = "/contact">contact</Link> </li>
                    </ul>
                    <div className="start">
                        <div className="button">get certificate</div>
                    </div>
                    <button className='toggle' onClick={() => setClick(!click)}>
                        { click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i> }
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header
