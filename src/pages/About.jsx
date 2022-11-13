import React from 'react'
import styles from "../styles/About.module.css";

function About() {
  return (
    <>
        <div className={styles.about}>
        <h2>About Me</h2>
        <p>Hi! My Name is <strong>Azzah Ratul Fadhilah</strong>. 
                You can call me <strong>Aza, Zahra or Aya</strong>.
                I was born in Lubuk Alung, Padang Pariaman, West Sumatera, 
                Indonesia on 28 January 2002.</p>
            <p>Now, currently studying at the Padang State Polytechnic, 
                majoring in Information Technology. Now I live in Padang Pariaman Regency, West Sumatra</p>
            <p>I have a hobby of watching movies, drakor. Besides that I really like all the songs "Tulus"</p>
        </div>
    </>
  )
}

export default About