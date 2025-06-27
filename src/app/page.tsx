import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import ContactForm from '../components/contact-form';
import WeatherWidget from '../components/weather-widget';
import WorkCarousel from '../components/work-carousel';
import Button from '../components/button';
import { WORK_ITEMS, TECHNICAL_SKILLS, SOFT_SKILLS } from '../config/constants';
import type { WorkItem } from '../types';

const Banner = React.memo(function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerText}>
        <h1>Luke Stevens</h1>
        <h2>Junior Front-End Developer</h2>
        <p>Based in Ipswich & seeking roles in Essex, Suffolk, and London.</p>
        <p>Building accessible, responsive web apps with React & Next.js.</p>
        <a href="#contact" className={styles.bannerCta}>
          Let's work together!
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
});

const AboutMe = React.memo(function AboutMe() {
  return (
    <section className={styles.me} aria-labelledby="about-heading">
      <h2 id="about-heading">From Electrician to Developer</h2>
      <p>
        Hi, I'm Luke Stevens. I'm passionate about web development and am excited to start my career
        as a front-end developer. I've recently completed the Codecademy Front-End Development and
        Next.js certificates, and this portfolio site showcases the skills and technologies I've
        learned so far.
      </p>
      <p>
        My journey into tech comes after 12 years as an electrician, both working for companies and
        running my own business. This experience has given me a strong work ethic, attention to
        detail, and the ability to solve problems under pressure. I'm used to working independently
        and as part of a team, communicating clearly with clients and colleagues to get the job done
        right.
      </p>
      <p>
        I'm eager to bring my hands-on experience, reliability, and enthusiasm for learning into a
        junior front-end developer role. I love building things that are useful and easy to use, and
        I'm excited to keep growing my skills in a professional environment.
      </p>
    </section>
  );
});

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

const TechnicalSkills = React.memo(function TechnicalSkills() {
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
});

const SoftSkills = React.memo(function SoftSkills() {
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
});

const WorkPreview = React.memo(function WorkPreview() {
  return (
    <section id="work" className={styles.work} aria-labelledby="work-heading">
      <h2 id="work-heading">Featured Projects</h2>
      <WorkCarousel items={WORK_ITEMS} />
    </section>
  );
});

const Contact = React.memo(function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact Me</h2>
      <ContactForm />
    </section>
  );
});

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
