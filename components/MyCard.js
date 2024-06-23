import styles from './cards.module.css'

function MyCard({ title, description, link }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <a href={link} className={styles.button} target="_blank" rel="noopener noreferrer">
        View Demo
      </a>
    </div>
  )
}

export default MyCard;
