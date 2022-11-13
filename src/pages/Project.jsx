import React from 'react'
import styles from "../styles/Project.module.css";

function Project() {
  return (
    <>
        <div className={styles.project}>
        <h2>Project Me</h2>
        <div className="icon-box">
          <p>"Sistem Informasi Penjualan" <br/>
            Merupakan Project Ujian Akhir Semester 3</p>
        </div>
        <div className="icon-box">
          <p>"Sistem Informasi Klinik" <br/>
            Merupakan Project Ujian Akhir Semester 4</p>
        </div>
        
        </div>
    </>
  )
}

export default Project