export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Luke Stevens",
          "jobTitle": "Junior Front-End Developer",
          "description": "Junior front-end developer from Ipswich seeking opportunities in Essex, Suffolk & London. Specializing in React, Next.js, TypeScript.",
          "url": "https://lstevens.dev",
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
            "CSS",
            "SCSS",
            "Web Development",
            "Front-End Development"
          ]
        })
      }}
    />
  );
}