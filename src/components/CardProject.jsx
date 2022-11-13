// import styles from "../styles/CardProject.module.css"

const CardProject = ({ title, desc, tags }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div>
      {
        tags ? tags.map((tag) => (
          <span className={styles.tag}>{tag}</span>
        )) : (
          <div></div>
        )
      }
      </div>
    </div>
  )    
}

export default CardProject;