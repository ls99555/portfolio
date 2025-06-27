import type { Metadata } from 'next';
import Button from '../../components/button';
import styles from './privacy.module.scss';

export const metadata: Metadata = {
  title: 'Privacy Policy | Luke Stevens Portfolio',
  description: 'Privacy policy for Luke Stevens portfolio website, including information about data collection and cookie usage.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString('en-GB')}</p>

        <section className={styles.section}>
          <h2>Introduction</h2>
          <p>
            This Privacy Policy explains how Luke Stevens ("I", "me", or "my") collects, uses, and protects your 
            information when you visit my portfolio website at lstevens.dev (the "Service").
          </p>
        </section>

        <section className={styles.section}>
          <h2>Information I Collect</h2>
          
          <h3>Information You Provide</h3>
          <ul>
            <li><strong>Contact Form:</strong> When you use the contact form, I collect your name, email address, and message content.</li>
            <li><strong>Voluntary Information:</strong> Any information you choose to provide when contacting me.</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li><strong>Analytics Data:</strong> I use Google Analytics to collect anonymous usage statistics including:
              <ul>
                <li>Pages visited and time spent on pages</li>
                <li>Referral sources (how you found my site)</li>
                <li>General location (country/city level)</li>
                <li>Device and browser information</li>
                <li>IP address (anonymized)</li>
              </ul>
            </li>
            <li><strong>Technical Data:</strong> Browser type, operating system, screen resolution, and similar technical information.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>How I Use Your Information</h2>
          <ul>
            <li><strong>Contact Form Data:</strong> To respond to your inquiries and potential job opportunities</li>
            <li><strong>Analytics Data:</strong> To understand how visitors use my site and improve the user experience</li>
            <li><strong>Technical Data:</strong> To ensure the website functions properly across different devices and browsers</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Cookies and Tracking</h2>
          <p>
            This website uses Google Analytics, which places cookies on your device to track usage patterns. 
            These cookies help me understand how visitors interact with my site. You can control cookie settings 
            through your browser preferences.
          </p>
          
          <h3>Types of Cookies Used:</h3>
          <ul>
            <li><strong>Analytics Cookies:</strong> Google Analytics cookies (_ga, _ga_*, _gid) to track site usage</li>
            <li><strong>Performance Cookies:</strong> To measure site performance and user experience</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Data Sharing and Third Parties</h2>
          <ul>
            <li><strong>Google Analytics:</strong> Anonymous usage data is shared with Google for analytics purposes</li>
            <li><strong>Resend:</strong> Contact form submissions are processed through Resend email service</li>
            <li><strong>No Selling:</strong> I do not sell, trade, or otherwise transfer your personal information to third parties</li>
            <li><strong>Legal Requirements:</strong> I may disclose information if required by law or to protect my rights</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Data Security</h2>
          <p>
            I implement appropriate security measures to protect your personal information. However, no method of 
            transmission over the internet is 100% secure, and I cannot guarantee absolute security.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction or deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request data portability</li>
            <li>Opt-out of analytics tracking by disabling cookies</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Data Retention</h2>
          <ul>
            <li><strong>Contact Form Data:</strong> Retained for the duration necessary to respond to inquiries and potential follow-up</li>
            <li><strong>Analytics Data:</strong> Retained according to Google Analytics retention settings (14 months by default)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Children's Privacy</h2>
          <p>
            This website is not intended for children under 13 years of age, and I do not knowingly collect 
            personal information from children under 13.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Changes to This Policy</h2>
          <p>
            I may update this Privacy Policy from time to time. Any changes will be posted on this page with 
            an updated revision date.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to exercise your rights regarding your 
            personal data, please contact me through the contact form on this website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>GDPR Compliance</h2>
          <p>
            For users in the European Union, this website complies with the General Data Protection Regulation (GDPR). 
            Your personal data is processed lawfully, fairly, and transparently.
          </p>
        </section>

        <div className={styles.homeButton}>
          <Button href="/">Return to Home</Button>
        </div>
      </div>
    </div>
  );
}
