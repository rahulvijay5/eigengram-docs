import styles from './landingPage.module.css'

function LandingPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Eigengram!</h1>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.introSection}>
          <p>Hey, you got here? Seems like you are interested to know about us.</p>
          <h2>Welcome, at Eigengram!</h2>
          <p>
            We are building the Healthcare AI Models – API Company around heterogeneous healthcare data centered around
            Precision Medicine and Drug Discovery. We have built a stack of Data and AI solutions that help plug these gaps and help in:
          </p>
          <ul>
            <li>Improving speed and accuracy.</li>
            <li>Increases virtual number of experiments.</li>
            <li>Extract complex patterns of data from heterogeneous health data.</li>
          </ul>
        </section>
        <section className={styles.categoriesSection}>
          <h2>Our Work Categories</h2>
          <div className={styles.categories}>
            <a href="https://eigengram-docs.vercel.app/Category1" className={styles.categoryButton}>
              <h3>Category 1</h3>
              <p>5 words on it</p>
            </a>
            <a href="https://eigengram-docs.vercel.app/Category2" className={styles.categoryButton}>
              <h3>Category 2</h3>
              <p>5 words on it</p>
            </a>
            <a href="https://eigengram-docs.vercel.app/Category3" className={styles.categoryButton}>
              <h3>Category 3</h3>
              <p>5 words on it</p>
            </a>
            <a href="https://eigengram-docs.vercel.app/Category4" className={styles.categoryButton}>
              <h3>Category 4</h3>
              <p>5 words on it</p>
            </a>
            <a href="https://eigengram-docs.vercel.app/Category5" className={styles.categoryButton}>
              <h3>Category 5</h3>
              <p>5 words on it</p>
            </a>
          </div>
        </section>
      </main>
      {/* <footer className={styles.footer}>
        <p>&copy; 2024 Eigengram. All rights reserved.</p>
      </footer> */}
    </div>
  )
}

export default LandingPage;
