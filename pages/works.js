import React from "react";
import Image from "next/image";
import styles from "../styles/Works.module.scss";

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
          <div data-type="development" className={styles.gridItem}>
            <div className={styles.gridItemImage}>
              <a
                href="https://afdesignsmusicplayer.netlify.app/"
                target="blank"
              >
                <Image src="/music.jpeg" layout="fill" alt="music" />
              </a>
            </div>
            <strong>DEVELOPMENT</strong>
            <h3>Music Player</h3>
          </div>
          <div data-type="development" className={styles.gridItem}>
            <div className={styles.gridItemImage}>
              <a href="https://florezadam-fs.github.io/WD5/#/" target="blank">
                <Image src="/news.jpeg" layout="fill" alt="news" />
              </a>
            </div>
            <strong>DEVELOPMENT</strong>
            <h3>News App</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default works;
