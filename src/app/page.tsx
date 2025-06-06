import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.layout}>
        
        <div className={styles.one}>
          <h1>header and text</h1>
          </div>
        
        <div className={styles.two}>
          <h1>about me</h1>
        </div>
        
        <div className={styles.three}>
          <h1>time and weather</h1>
        </div>
        
        <div id="cv"className={styles.four}>
          <h1>cv link</h1>
        </div>

        <div className={styles.five}>
          <h1>five</h1>
        </div>

        <div id="work" className={styles.six}>
          <h1>preview of andreeas website</h1>  
        </div>

        <div id="contact"className={styles.seven}>
          <h1>contact form</h1>
        </div>

      </div>
      </main>
    </div>
  );
} 
