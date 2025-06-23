import Image from "next/image";
import styles from "./page.module.scss";
import ContactForm from "../components/contact-form";
import WeatherWidget from "../components/weather-widget";
import WorkCarousel from "../components/work-carousel";
import Button from "../components/button";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerText}>
        <h1>Luke Stevens</h1>
        <h2>Junior Front-End Developer</h2>
        <p>Based in Ipswich & seeking roles in Essex, Suffolk, and London.</p>
        <p>Building accessible, responsive web apps with React & Next.js.</p>
        <a href="#contact" className={styles.bannerCta}>
          Let`s work together!
        </a>
      </div>
      <div className={styles.bannerImage}>
        <Image
          src="/images/profile.jpg"
          alt="Luke Stevens"
          width={160}
          height={160}
          className={styles.profilePic}
          priority
        />
      </div>
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

function Weather() {
  return (
    <section className={styles.weather}>
      <h2>Whats The Weather Like?</h2>
      <WeatherWidget />
    </section>
  );
}

function CV() {
  return (
    <section id="cv" className={styles.cv}>
      <Button
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cvLink}
      >
        View My CV (PDF)
      </Button>
    </section>
  );
}

function TechnicalSkills() {
  return (
    <section className={styles.technicalSkills}>
      <h2>Technical Skills</h2>
      <ul>
        <li>HTML & CSS (including SCSS/SASS)</li>
        <li>JavaScript (ES6+), TypeScript</li>
        <li>React & Next.js</li>
        <li>API Integration (REST, CRUD)</li>
        <li>Responsive Design (Flexbox, Grid, Media Queries)</li>
        <li>Accessibility (ARIA, semantic HTML)</li>
        <li>Form Handling & Validation</li>
        <li>Version Control (Git & GitHub)</li>
        <li>Node.js & Environment Variables</li>
        <li>Component-based Architecture</li>
        <li>Package Managers (npm/yarn)</li>
        <li>Command Line Usage</li>
        <li>Build Tools & Deployment (Next.js, Vercel)</li>
      </ul>
    </section>
  );
}

function SoftSkills() {
  return (
    <section className={styles.softSkills}>
      <h2>Soft Skills</h2>
      <ul>
        <li>Clear Communication</li>
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
      <h2>Featured Projects</h2>
      <WorkCarousel items={workItems} />
    </section>
  );
}

const workItems = [
  {
    title: "NextGenTherapy",
    image: "/images/NextGen.jpg",
    description: "A Website for a therapist I made.",
    link: "https://next-gen-therapy-git-main-lukes-projects-f436770d.vercel.app/",
  },
  {
    title: "Project Two",
    image: "/images/NextGen.jpg",
    description: "Another awesome project.",
    link: "https://example.com/project2",
  },
  // Add more items as needed
];

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
        <div className={styles.layoutTop}>
          <Banner />
          <AboutMe />
          <CV />
          <TechnicalSkills />
          <SoftSkills />
          <Weather />
          <WorkPreview />
          <Contact />
        </div>
      </main>
    </div>
  );
}
