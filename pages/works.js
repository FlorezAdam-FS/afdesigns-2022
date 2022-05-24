import React from "react";
import Image from "next/image";
import styles from "../styles/Works.module.scss";
import { Projects } from "../data/projects";
import { AiFillGithub, AiFillHome } from "react-icons/ai";

const works = () => {
  const Filter = (e) => {
    const item = e.target.innerHTML.toLowerCase();
    console.log(document.querySelectorAll(".Works_gridItem__*"));
  };

  return (
    <div className={styles.works}>
      <section>
        <h1>Portfolio</h1>
        <div className={styles.line}></div>
      </section>
      <section>
        <div className={styles.grid}>
          {Projects.map((project) => (
            <div key={project.name} className={styles.gridItem}>
              <div className={styles.gridItemImage}>
                <Image
                  src={project.image}
                  layout="fill"
                  alt={project.name}
                  priority={true}
                />
              </div>
              <strong>{project.topic}</strong>
              <p className={styles.gridItemDesc}>{project.desc}</p>
              <div className={styles.row}>
                <div className={styles.languages}>
                  {project.languages.map((l) => (
                    <span key={l} className={styles.language}>
                      {l}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.githubLink} target="blank">
                    <AiFillGithub />
                  </a>
                  <a href={project.webLink} target="blank">
                    <AiFillHome />
                  </a>
                </div>
              </div>
              <h3>{project.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default works;
