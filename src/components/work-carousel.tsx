"use client"

import React, { useState } from "react";
import styles from "./work-carousel.module.css";
import Button from "./button";

interface WorkItem {
  title: string;
  image: string; // URL or import
  description: string;
  link?: string;
}

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
      <Button className={styles.nav} onClick={prev} aria-label="Previous">&#8592;</Button>
      <div className={styles.slide}>
        <h3>{item.title}</h3>
        <img src={item.image} alt={item.title} className={styles.image} />
        <p>{item.description}</p>
        {item.link && (
          <a className={styles.link} href={item.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        )}
      </div>
      <Button className={styles.nav} onClick={next} aria-label="Next">&#8594;</Button>
    </div>
  );
}