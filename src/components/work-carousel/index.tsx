'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './work-carousel.module.scss';
import Button from '../button';
import type { WorkItem } from '../../types';

interface WorkCarouselProps {
  items: WorkItem[];
}

export default function WorkCarousel({ items }: WorkCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + items.length) % items.length);
  const next = () => setCurrent((current + 1) % items.length);

  const item = items[current];

  return (
    <div className={styles.carousel}>
      <div className={styles.slide}>
        <div className={styles.slideContent}>
          <h3>{item.title}</h3>
          <Image
            src={item.image}
            alt={item.title}
            className={styles.image}
            width={600}
            height={400}
          />
          <p>{item.description}</p>
          {item.technologies && (
            <div className={styles.technologies}>
              {item.technologies.map((tech, index) => (
                <span key={index} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className={styles.slideFooter}>
          <div className={styles.projectLinks}>
            {item.link && (
              <a className={styles.link} href={item.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
            {item.githubLink && (
              <a className={styles.link} href={item.githubLink} target="_blank" rel="noopener noreferrer">
                View Code on GitHub
              </a>
            )}
          </div>
          <div className={styles.carouselNavGroup}>
            <Button className={styles.nav} onClick={prev} aria-label="Previous">
              &#8592;
            </Button>
            <Button className={styles.nav} onClick={next} aria-label="Next">
              &#8594;
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
