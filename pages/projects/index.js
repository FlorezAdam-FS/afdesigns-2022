import React from "react";
import Image from "next/image";
import Link from "next/Link";
import styles from "../../styles/Projects.module.scss";
import { fetchAPI } from "../../lib/api";
import { Projects 
} from "../../data/projects";
const works = () => {
  return (
    <div className={styles.works}>
      <section style={{ maxWidth: 1600 }}>
        <h1>Portfolio</h1>
        <div className={styles.line}></div>
      </section>
      <section>
        <div className={styles.grid}>
          {Projects.reverse().map((project) => (
            <div key={project.name} className={styles.gridItem}>
              <div className={styles.gridItemImage}>
                <a target="_blank" href={project.webLink}>
                  <Image
                    className={styles.gridItemImage}
                    src={project.image}
                    height={700}
                    width={700}
                    alt={project.name}
                  />
                </a>
              </div>
              <div className={styles.languages}>
                {project.languages.map(l => <span className={styles.language}>{l}</span>)}
              </div>
              <h3>{project.name}</h3>
              <p className={styles.gridItemDesc}>
                {project.desc}
              </p>
              <div className={styles.links}>
                <a target="_blank" src={project.webLink}>Site</a>
                <a target="_blank" src={project.githubLink}>Github</a>
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default works;

