import React from "react";
import Image from "next/image";
import Link from "next/Link";
import styles from "../../styles/Projects.module.scss";
import { Projects } from "../../data/projects";
import { AiFillGithub, AiFillHome } from "react-icons/ai";
import { getProjects } from "../api/constants";
import { fetchAPI } from "../../lib/api";

const works = ({ projects, image }) => {
  console.log(projects);
  return (
    <div className={styles.works}>
      <section style={{ maxWidth: 1600 }}>
        <h1>Portfolio</h1>
        <div className={styles.line}></div>
      </section>
      <section>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.slug} className={styles.gridItem}>
              <div className={styles.gridItemImage}>
                <Link
                  href={{
                    pathname: `/projects/${project.slug}`,
                    params: { slug: project.slug },
                  }}
                >
                  <Image
                    className={styles.gridItemImage}
                    src={project.projects.image.link}
                    height={700}
                    width={700}
                    alt={project.title}
                  />
                </Link>
              </div>
              <h3>{project.projects.title}</h3>
              <p className={styles.gridItemDesc}>
                {project.projects.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default works;

export async function getStaticProps() {
  const data = await fetchAPI(
    `query Projects {
  projects {
    nodes {
      slug
      projects {
        title
        description
        link {
          target
          title
          url
        }
        languages {
          language
        }
        image{
          link
        }
      }
    }
  }
}
`
  );

  const projects = data.projects.nodes;

  console.log(projects);
  return {
    props: {
      projects,
    },
  };
}
