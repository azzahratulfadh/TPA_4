import React from 'react'
import { NavLink } from "react-router-dom"
import {} from 'react-router-dom'
import styles from "../styles/Layout.module.css";

const Layout = ({children}) => {
    return (
        <>
            <div className={styles.wrapper}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/"
                                style={({isActive}) => ({
                                    color: isActive ? 'darkorange' : 'black'
                                })}>Home
                            </NavLink>
                        </li>
                        <li>
                          <NavLink to="about"
                            style={({ isActive }) => ({ 
                              color: isActive ? 'darkorange' : 'black' })}>
                            About
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="project"
                            style={({ isActive }) => ({ 
                              color: isActive ? 'darkorange' : 'black' })}>
                            Project
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="blog"
                            style={({ isActive }) => ({ 
                              color: isActive ? 'darkorange' : 'black' })}>
                            Blog
                          </NavLink>
                        </li>
                    </ul>
                  </nav>
                {children}

            </div>
        </>
    )
}

export default Layout