export default function StructuredData() {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Luke Stevens",
    "jobTitle": "Junior Front-End Developer",
    "description": "Passionate front-end developer based in Ipswich, seeking opportunities in Essex, Suffolk, and London",
    "url": "https://lstevens.dev",
    "image": "https://lstevens.dev/images/profile.jpg",
    "sameAs": [
      "https://github.com/ls99555",
      "https://linkedin.com/in/luke-stevens-dev"
    ],
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
      "Node.js",
      "API Integration",
      "Component Architecture"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Codecademy"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Luke Stevens Portfolio",
    "url": "https://lstevens.dev",
    "description": "Portfolio website of Luke Stevens, junior front-end developer",
    "author": {
      "@type": "Person",
      "name": "Luke Stevens"
    },
    "inLanguage": "en-GB"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
    </>
  );
}
