export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Luke Stevens",
    "jobTitle": "Junior Front-End Developer",
    "description": "Passionate front-end developer based in Ipswich, seeking opportunities in Essex, Suffolk, and London",
    "url": "https://lstevens.dev",
    "image": "https://lstevens.dev/images/profile.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ipswich",
      "addressRegion": "Suffolk",
      "addressCountry": "UK"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
      "Responsive Design",
      "Web Accessibility",
      "Git",
      "Node.js"
    ],
    "alumniOf": "Codecademy",
    "seeks": {
      "@type": "JobPosting",
      "title": "Junior Front-End Developer",
      "employmentType": "FULL_TIME",
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Essex, Suffolk, London",
          "addressCountry": "UK"
        }
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
