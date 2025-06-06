import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "../components/contact-form"; 

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.layout}>
        
        <div className={styles.banner}>
          <h1>header and text</h1>
          </div>
        
        <div className={styles.me}>
          <h1>about me</h1>
        </div>
        
        <div className={styles.timeWeather}>
          <h1>time and weather</h1>
        </div>
        
        <div id="cv"className={styles.cv}>
          <h1>cv link</h1>
        </div>

        <div className={styles.skills}>
  <h1>Technical Skills</h1>
  <ul>
    <li>HTML & CSS</li>
    <li>JavaScript (ES6+)</li>
    <li>React</li>
    <li>Next.js</li>
    <li>TypeScript</li>
    <li>CSS Modules</li>
    <li>SCSS/SASS</li>
    <li>API Integration (REST APIs, CRUD)</li>
    <li>Responsive Design (Flexbox, Grid, Media Queries)</li>
    <li>Accessibility (ARIA, semantic HTML)</li>
    <li>Form Handling & Validation</li>
    <li>Version Control (Git & GitHub)</li>
    <li>Node.js</li>
    <li>Environment Variables</li>
    <li>Component-based Architecture</li>
    <li>Package Managers (npm/yarn)</li>
    <li>Command Line Usage</li>
    <li>Build Tools (Next.js)</li>
    <li>Deployment (Vercel)</li>
  </ul>
</div>

<div className={styles.softSkills}>
  <h1>Soft Skills</h1>
  <ul>
    <li>Communication</li>
    <li>Teamwork & Collaboration</li>
    <li>Problem Solving</li>
    <li>Adaptability & Willingness to Learn</li>
    <li>Attention to Detail</li>
    <li>Time Management</li>
    <li>Receiving & Acting on Feedback</li>
    <li>Proactive Attitude</li>
    <li>Critical Thinking</li>
  </ul>
</div>

        <div id="work" className={styles.work}>
          <h1>preview of andreeas website</h1>  
        </div>

        <div id="contact"className={styles.contact}>
          <h1>contact form</h1>
          <ContactForm />
        </div>

      </div>
      </main>
    </div>
  );
}
