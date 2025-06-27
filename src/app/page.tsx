import Image from 'next/image';
import styles from './page.module.scss';
import ContactForm from '../components/contact-form';
import WeatherWidget from '../components/weather-widget';
import WorkCarousel from '../components/work-carousel';
import Button from '../components/button';
import { WORK_ITEMS, TECHNICAL_SKILLS, SOFT_SKILLS } from '../config/constants';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerText}>
        <h1>Luke Stevens</h1>
        <h2>Electrician Turned Developer</h2>
        <p>12 years of problem-solving experience, now building digital solutions.</p>
        <p>Ready to contribute to your team with React, Next.js & TypeScript.</p>
        <p>Essex, Suffolk & London.📍</p>
        <a href="#contact" className={styles.bannerCta}>
          Ready to contribute to your team
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
    <section className={styles.aboutMe} id="about">
      <h2>About Me</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>
            I'm Luke Stevens, a passionate front-end developer who made the leap from 12 years as an
            electrician to coding. The moment I wrote my first line of code, I knew I'd found my
            calling – the same satisfaction I got from solving complex electrical problems, but with
            endless creative possibilities.
          </p>
          <p>
            My electrical background gives me a unique perspective on development. I'm used to
            working with complex systems, following strict standards (electrical codes = coding
            standards), and ensuring everything works safely and reliably. I approach debugging the
            same way I approached electrical troubleshooting – methodically, patiently, and with
            attention to detail.
          </p>
          <p>
            I've recently completed comprehensive front-end and Next.js courses with Codecademy, and
            I've learned that problem-solving is universal – whether it's diagnosing a faulty
            circuit or fixing a React component, the logical thinking is the same.
          </p>
          <p>
            I'm used to working in fast-paced environments where safety and quality are paramount.
            I'm eager to bring this work ethic to a development team and continue growing my skills.
            Currently exploring TypeScript advanced patterns and always excited to learn new
            technologies.
          </p>
          <p>
            I'm excited to contribute to meaningful projects and join a supportive development team
            where I can grow while adding value from day one. Available for immediate start and
            happy to work hybrid, remote, or in-office in Essex, Suffolk, and London.
          </p>
        </div>
      </div>
    </section>
  );
}

function Weather() {
  return (
    <section className={styles.weather}>
      <h2>What's The Weather Like?</h2>
      <WeatherWidget />
    </section>
  );
}

function CV() {
  return (
    <section id="cv" className={styles.cv}>
      <Button href="/cv.pdf" target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
        View My CV (PDF)
      </Button>
    </section>
  );
}

function TechnicalSkills() {
  return (
    <section className={styles.technicalSkills} aria-labelledby="technical-skills-heading">
      <h2 id="technical-skills-heading">Technical Skills</h2>
      <ul role="list">
        {TECHNICAL_SKILLS.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

function SoftSkills() {
  return (
    <section className={styles.softSkills} aria-labelledby="soft-skills-heading">
      <h2 id="soft-skills-heading">Soft Skills</h2>
      <ul role="list">
        {SOFT_SKILLS.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

function WorkPreview() {
  return (
    <section id="work" className={styles.work} aria-labelledby="work-heading">
      <h2 id="work-heading">Featured Projects</h2>
      <WorkCarousel items={WORK_ITEMS} />
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <h2>Let's Work Together</h2>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h3>Ready to Join Your Team</h3>
          <p>
            I'm actively seeking my first role as a front-end developer and excited to contribute to
            meaningful projects.
          </p>

          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <strong>📧 Response Time:</strong> Usually within 24 hours
            </div>
            <div className={styles.contactItem}>
              <strong>📞 Availability:</strong> Mon-Fri, 9am-5pm for calls
            </div>
            <div className={styles.contactItem}>
              <strong>📍 Location:</strong> Happy to work in-office, hybrid, or remote
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <ContactForm />
        </div>
      </div>
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
