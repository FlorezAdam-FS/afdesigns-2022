import React from "react";
const slug = () => {
  return <div>slug</div>;
};

export default slug;

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "1" } }, { params: { slug: "2" } }],
    fallback: false, // can also be true or 'blocking'
  };
}

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
