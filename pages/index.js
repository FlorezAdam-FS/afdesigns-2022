import styles from '../styles/Home.module.scss';
import Head from 'next/head';
import { Design, FrontEnd, BackEnd } from '../data/skills';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import { currentEmployer } from '../data/employers';

export default function Home({ content }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Software Developer Florida | Custom Web Development Services
        </title>
        <meta
          name='description'
          content='Professional software developer in Florida. Custom web development services, specializing in responsive and SEO-friendly websites. Contact me today!'
        />
      </Head>
      <Parallax speed={-10}>
        <section className={styles.head}>
          <h1>orlando web designer</h1>
          <h2 className={styles.displayText}>
            Adam Florez
            <br />
            Talented Software Developer in Florida
            <br />
            User-Friendly Applications
          </h2>
        </section>
      </Parallax>
      <section className={styles.details}>
        <div className={styles.left}>
          <Fade opposite cascade>
            <div className={styles.strong}>
              <span>Who am I?</span>
              <p>
                Adam Florez is a talented and motivated web developer with a
                passion for creating visually appealing and user-friendly
                websites. With over a year of experience in the field, he has
                honed his skills and developed a keen eye for detail. He is
                committed to staying up-to-date with the latest industry trends
                and technologies, and is always seeking new opportunities to
                expand his knowledge and grow as a developer. In addition to his
                technical expertise, Adam is also a fast learner and a true team
                player. He excels in collaborative environments and is dedicated
                to ensuring that all projects are completed to the highest
                standards, both on time and within budget. With his positive
                attitude and strong work ethic, Adam is an asset to any team and
                is sure to bring success to any project he is involved in.
              </p>
            </div>
            <div className={styles.strong}>
              <span>Contact</span>
              <p className={styles.contact}>
                Adam Florez
                <br />
                <a target='blank' href='mailto: adamseanflorez@gmail.com'>
                  adam@adamflorezdesigns.com
                </a>
                <br />
                407-932-8226
                <br />
                <a target='blank' href='https://www.linkedin.com/in/adamflorez'>
                  LinkedIn.com
                </a>
              </p>
            </div>

            <div className={styles.strong}>
              <span>Services</span>
              <p>
                Web Development
                <br />
                Web Design
                <br />
                SEO services
                <br />
                Branding
                <br />
                Marketing
              </p>
            </div>
          </Fade>
        </div>

        <div className={styles.me}></div>

        <div className={styles.right}>
          <Fade opposite cascade>
            <div className={styles.strong}>Years Of Experience</div>
            <h2>1</h2>
            <div className={styles.strong}>Client Satisfaction</div>
            <h2>100%</h2>
            <div className={styles.strong}>Number of Clients</div>
            <h2>3</h2>
            <div className={styles.strong}>Projects Done</div>
            <h2>5</h2>
            <div className={styles.strong}>Current Employer</div>
            <div className={styles.margin}>
              <a
                href='https://www.gcomsoft.com/'
                alt='GCOM Software, LLC'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src={currentEmployer.image}
                  height={80}
                  width={240}
                  alt={currentEmployer.name}
                />
              </a>
            </div>
          </Fade>
        </div>
      </section>
      {/* <Parallax speed={-3}>
        <section className={styles.employer}>
          <h3>Current Employers</h3>
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
      </Parallax> */}
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
                        height={40}
                        width='100%'
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
                        height={40}
                        width='100%'
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
                        height={40}
                        width='100%'
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
              target='blank'
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
  const username = 'adamseanflorez';
  const RSSURL = `https://medium.com/feed/@${username}`;
  const RSSConverter = `https://api.rss2json.com/v1/api.json?rss_url=${RSSURL}`;
  const { items } = await (await fetch(RSSConverter)).json();

  return { props: { content: items.slice(0, 4) } };
}
