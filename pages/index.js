import styles from "../styles/Home.module.scss";
import Nav from "../components/Nav";
import { Design, FrontEnd, BackEnd } from "../data/skills";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Fade from "react-reveal/Fade";

export default function Home({ content }) {
  return (
    <div className={styles.container}>
      <Nav />
      <Parallax speed={-10}>
        <section>
          <Fade opposite delay={200} duration={1000}>
            <h1>
              Adam Florez
              <br />
              Web Developer &amp; Designer
              <br />
              Based in Florida
            </h1>
          </Fade>
        </section>
      </Parallax>
      <section className={styles.details}>
        <div className={styles.left}>
          <Fade opposite cascade>
            <div className={styles.strong}>Biography</div>
            <p>
              Recent Graduate but always learning! I&apos;m Adam, Looking to
              make a difference in web development and design.
            </p>
            <div className={styles.strong}>Contact</div>
            <p className={styles.contact}>
              Adam Florez
              <br />
              <a target="blank" href="mailto: adamseanflorez@gmail.com">
                adamseanflorez@gmail.com
              </a>
              <br />
              407-932-8226
            </p>

            <div className={styles.strong}>Services</div>
            <p>
              Web Development
              <br />
              Web Design <br />
              Web Animations
            </p>
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
          <a href="https://www.pushhere.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="131"
              height="133"
              viewBox="0 0 131 133"
            >
              <g fill="#e5eae5">
                <path d="M21.4121511,7.47694591 C13.5234069,7.47694591 7.10557797,14.0681165 7.10557797,22.1699308 L7.10557797,100.927045 C7.10557797,113.702722 16.4874693,124.414223 28.4656943,125.313327 C39.1154088,126.114314 48.8746428,119.394171 52.1703821,108.970235 C52.6456656,107.466997 54.0102279,106.448793 55.5490407,106.448793 L74.8301674,106.448793 C88.5142454,106.448793 101.158228,100.709211 110.431363,90.2852758 C117.781132,82.0254857 122.213105,71.3763114 122.910708,60.3001087 C123.780159,46.4889497 119.232218,33.3763401 110.105694,23.3769647 C100.882431,13.2720665 87.720504,7.47694591 73.9961681,7.47694591 L21.4121511,7.47694591 Z M30.1901741,132.67463 C29.4463044,132.67463 28.6988295,132.646861 27.9471486,132.591322 C12.2754123,131.414526 -0.000240345622,117.506483 -0.000240345622,100.927045 L-0.000240345622,22.1699308 C-0.000240345622,10.0440529 9.60517244,0.179203814 21.4121511,0.179203814 L73.9961681,0.179203814 C89.6769173,0.179203814 104.727961,6.81542219 115.289949,18.3859164 C125.774426,29.8724859 130.99954,44.925236 130.001505,60.7715678 C129.199351,73.4978772 124.113037,85.7280438 115.677507,95.2084439 C105.041011,107.16277 90.5349512,113.745918 74.8301674,113.745918 L58.0131842,113.745918 C53.293397,125.220146 42.3582721,132.67463 30.1901741,132.67463 Z"></path>
                <path d="M30.1392875,25.6027448 C27.4959564,25.6027448 25.3453084,27.8319778 25.3453084,30.5718965 L25.3453084,101.595505 C25.3453084,104.615776 27.7157872,107.072255 30.6289918,107.072255 C33.5427922,107.072255 35.913271,104.615776 35.913271,101.595505 L35.913271,91.7813227 C35.913271,89.7651328 37.4908101,88.1299503 39.4353295,88.1299503 L74.8811066,88.1299503 C83.1399524,88.1299503 90.8536893,84.7224967 96.6008642,78.5349858 C102.343273,72.3536501 105.333329,64.2283739 105.020562,55.6566336 C104.415282,39.0849728 90.5236453,25.6027448 74.0530177,25.6027448 L30.1392875,25.6027448 Z M30.6289918,114.375 C23.8309186,114.375 18.3,108.641981 18.3,101.595505 L18.3,30.5718965 C18.3,23.8051556 23.6110878,18.3 30.1392875,18.3 L74.0530177,18.3 C83.8226788,18.3 93.1354017,22.0915486 100.277221,28.976235 C107.508999,35.9467562 111.692932,45.324355 112.059913,55.3806039 C112.446553,65.9537138 108.758281,75.9759993 101.67544,83.5998525 C94.5878338,91.2304984 85.0719611,95.4326951 74.8811066,95.4326951 L42.9585794,95.4326951 L42.9585794,101.595505 C42.9585794,108.641981 37.4276608,114.375 30.6289918,114.375 Z"></path>
                <path d="M41.4639191,70.3725137 L73.8873158,70.3725137 C77.4466896,70.3725137 80.751952,68.8858821 83.193236,66.1855332 C85.6302847,63.489566 86.8415488,59.9711003 86.6025631,56.2786204 C86.1572632,49.3944208 80.3199628,44.0024863 73.3119351,44.0024863 L41.4409281,44.0024863 L41.4639191,70.3725137 Z M73.8873158,77.775 L37.8900246,77.775 C35.9146115,77.775 34.3125,76.11811 34.3125,74.0737568 L34.3125,43.9755705 C34.3125,39.9087724 37.5100677,36.6 41.4409281,36.6 L73.3119351,36.6 C84.0717352,36.6 93.0454956,45.0271667 93.7412766,55.7847457 C94.1139732,61.544113 92.2232639,67.0330697 88.4182491,71.2419584 C84.6646616,75.3938857 79.3688603,77.775 73.8873158,77.775 Z"></path>
                <path d="M72.0361125,59.475 L56.0638875,59.475 C54.1581239,59.475 52.6125,57.9389745 52.6125,56.04375 C52.6125,54.1485255 54.1581239,52.6125 56.0638875,52.6125 L72.0361125,52.6125 C73.9418761,52.6125 75.4875,54.1485255 75.4875,56.04375 C75.4875,57.9389745 73.9418761,59.475 72.0361125,59.475"></path>
              </g>
            </svg>
          </a>
        </section>
      </Parallax>
      <div className={styles.line}></div>
      <section className={styles.knowledge}>
        <h2>My Knowledge</h2>
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
        <h2>Recent Posts on Medium</h2>
        <div className={styles.row}>
          {content.map((item) => (
            <a
              target="blank"
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
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@adamseanflorez"
  );
  const data = await res.json();
  const items = data.items;

  return {
    props: {
      content: items,
    },
  };
}