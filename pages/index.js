import styles from "../styles/Home.module.scss";
import { Design, FrontEnd, BackEnd } from "../data/skills";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";

export default function Home({ content }) {
  return (
    <div className={styles.container}>
      <Parallax speed={-10}>
        <section className={styles.head}>
          <h1>
            Adam Florez
            <br />
            Web Developer &amp; Designer
            <br />
            Based in Florida
          </h1>
        </section>
      </Parallax>
      <section className={styles.details}>
        <div className={styles.left}>
          <Fade opposite cascade>
            <div className={styles.strong}>
              <span>Biography</span>
              <p>
                Freelance Web Developer based in Orlando Florida. Looking to
                develop websites for clients directly or work with businesses to
                assist with their projects. One stop shop for web development
                and design.
              </p>
            </div>

            <div className={styles.strong}>
              <span>Contact</span>
              <p className={styles.contact}>
                Adam Florez
                <br />
                <a target="blank" href="mailto: adamseanflorez@gmail.com">
                  adam@adamflorezdesigns.com
                </a>
                <br />
                407-932-8226
              </p>
            </div>

            <div className={styles.strong}>
              <span>Services</span>
              <p>
                Web Development
                <br />
                Web Design <br />
                Web Animations
              </p>
            </div>
          </Fade>
        </div>

        <div className={styles.me}></div>

        <div className={styles.right}>
          <Fade opposite cascade>
            <div className={styles.strong}>Years Of Experience</div>
            <h2>1.5</h2>
            <div className={styles.strong}>Client Satisfaction</div>
            <h2>100%</h2>
            <div className={styles.strong}>Number of Clients</div>
            <h2>2</h2>
            <div className={styles.strong}>Projects Done</div>
            <h2>5</h2>
          </Fade>
        </div>
      </section>
      <Parallax speed={-3}>
        <section className={styles.employer}>
          <h3>Current Employer</h3>
          <div className={styles.row}>
            <a href="https://www.adventhealth.com">
              <Image
                width={300}
                height={105}
                src="/adventhealth.svg"
                alt="Adventhealth"
              />
            </a>
            <span>+</span>
            <a href="https://www.pushhere.com">
              <Image width={120} height={105} src="/push.svg" alt="push" />
            </a>
          </div>
        </section>
      </Parallax>
      <div className={styles.line}></div>
      <section className={styles.knowledge}>
        <h2 className={styles.heading}>My Knowledge</h2>
        <div className={styles.row}>
          <div className={styles.categoryContainer}>
            <h3>Design</h3>
            <div className={styles.categories}>
              {Design.map((design) => (
                <div key={design.name} className={styles.card}>
                  <div className={styles.item}>
                    <div className={styles.logoImage}>
                      <Image
                        src={design.image}
                        height={80}
                        width="100%"
                        alt={design.name}
                      />
                    </div>

                    <p>{design.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.categoryContainer}>
            <h3>Frontend</h3>
            <div className={styles.categories}>
              {FrontEnd.map((dev) => (
                <div key={dev.name} className={styles.card}>
                  <div className={styles.item}>
                    <div className={styles.logoImage}>
                      <Image
                        src={dev.image}
                        height={80}
                        width="100%"
                        alt={dev.name}
                      />
                    </div>

                    <p>{dev.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.categoryContainer}>
            <h3>Backend</h3>
            <div className={styles.categories}>
              {BackEnd.map((dev) => (
                <div key={dev.name} className={styles.card}>
                  <div className={styles.item}>
                    <div className={styles.logoImage}>
                      <Image
                        src={dev.image}
                        height={80}
                        width="100%"
                        alt={dev.name}
                      />
                    </div>

                    <p>{dev.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className={styles.line}></div>
      <section className={styles.recentPosts}>
        <h2 className={styles.heading}>Recent Posts on Medium</h2>
        <div className={styles.row}>
          {content.map((item) => (
            <a
              target="blank"
              style={{
                background: `linear-gradient(#00000020, #00000099),url(${item.thumbnail}) center center / cover no-repeat`,
              }}
              key={item.link}
              href={item.link}
              className={styles.link}
            >
              <h3>{item.title}</h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const username = "adamseanflorez";
  const RSSURL = `https://medium.com/feed/@${username}`;
  const RSSConverter = `https://api.rss2json.com/v1/api.json?rss_url=${RSSURL}`;
  const res = await fetch(RSSConverter);
  const data = await res.json();
  const items = data.items.slice(0, 3);

  return {
    props: {
      content: items,
    },
  };
}
