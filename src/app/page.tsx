import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "../components/contact-form";

function Banner() {
  return (
    <div className={styles.banner}>
      <h1>Luke Stevens</h1>
    </div>
  );
}

function AboutMe() {
  return (
    <section className={styles.me}>
      <h2>From Electrician to Developer</h2>
      <p>
        Hi, I’m Luke Stevens. I’m passionate about web development and am excited
        to start my career as a front-end developer. I’ve recently completed the
        Codecademy Front-End Development and Next.js certificates, and this
        portfolio site showcases the skills and technologies I’ve learned so far.
      </p>
      <p>
        My journey into tech comes after 12 years as an electrician, both working
        for companies and running my own business. This experience has given me a
        strong work ethic, attention to detail, and the ability to solve problems
        under pressure. I’m used to working independently and as part of a team,
        communicating clearly with clients and colleagues to get the job done
        right.
      </p>
      <p>
        I’m eager to bring my hands-on experience, reliability, and enthusiasm
        for learning into a junior front-end developer role. I love building
        things that are useful and easy to use, and I’m excited to keep growing
        my skills in a professional environment.
      </p>
    </section>
  );
}

function Time() {
  return (
    <section className={styles.time}>
      <h2>Time</h2>
      {/* Add time and weather content here */}
    </section>
  );
}

function Weather() {
  return (
    <section className={styles.weather}>
      <h2>Weather</h2>
      {/* Add time and weather content here */}
    </section>
  );
}

function CV() {
  return (
    <section id="cv" className={styles.cv}>
      <h2>CV</h2>
      {/* Add CV content here */}
    </section>
  );
}

function TechnicalSkills() {
  return (
    <section className={styles.technicalSkills}>
      <h2>Technical Skills</h2>
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
    </section>
  );
}

function SoftSkills() {
  return (
    <section className={styles.softSkills}>
      <h2>Soft Skills</h2>
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
    </section>
  );
}

function WorkPreview() {
  return (
    <section id="work" className={styles.work}>
      <h2>Preview of Andreea's Website</h2>
      {/* Add website preview here */}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <ContactForm />
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.layout}>
          <Banner />
          <AboutMe />
          <Time />
          <Weather />
          <CV />
          <TechnicalSkills />
          <SoftSkills />
          <WorkPreview />
          <Contact />
        </div>
      </main>
    </div>
  );
}
