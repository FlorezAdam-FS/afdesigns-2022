import React from "react";
import styles from "../../styles/Web_design.module.scss";
import Link from "next/Link";
import Image from "next/Image";
import Head from "next/Head";
import Contact from "../contact";
const web_design = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>af. Designs | Florida Web Design</title>
        <meta
          name="description"
          content="af.designs is a full-service web design company located in Florida. We offer web design, branding, and SEO services to help your business grow online."
        />
      </Head>
      <div className={styles.hero}>
        <h3 className={styles.h3}>Website Design Florida</h3>
        <h1>Web Design Florida</h1>
        <div className={styles.buttons}>
          <Link href="/web_design_pricing">
            <a>Web Design Pricing</a>
          </Link>
          <Link href="#pricing">
            <a>Web Design Details</a>
          </Link>
          <Link href="#pricing">
            <a>Web Design FAQ</a>
          </Link>
        </div>
      </div>
      <div className={styles.quote}>
        <p>
          Web design is the process of planning, creating, and maintaining a
          website. It encompasses a variety of disciplines and skills, including
          web development, user experience (UX) design, and graphic design. A
          successful website must be easy to use and navigate, visually
          appealing, and informative. It must also be responsive, meaning it can
          be viewed on a variety of
        </p>
      </div>
      <div className={styles.wiwd}>
        <div className={styles.info}>
          <div>
            <h3 className={styles.h3}>Web Design &amp; Development</h3>
            <p>
              Our Website is build on relationships - it sounds cliché, but
              it&apos;s true. We believe repeat business is the key to a
              successful company. Our great work is meant to keep clients coming
              back and NOT on sales pitches. A true partnership can be measured
              by the quality of their collaborations. We want to build
              relationships that last 15+ years.
            </p>
            <p>
              We take your investment in your website and belief in us very
              seriously. With critical focus on providing our clients the best
              web design solutions in Florida. Hand-crafted and user friendly
              web design with web development and digital marketing that
              delivers actual results. We are a family-owned business who design
              with a personal touch.
            </p>
            <p>
              Our professional in-house web designers and developers have been
              sharpening their skills and utilizing the latest and greatest
              technologies to help our clients achieve their online sales goals.
              At AF. Designs, we stay true to our philosophy that effective
              website and eCommerce solutions combine a great web design, user
              experience, rock-solid technology and integrated web marketing.
            </p>
            <p>
              We have worked with startups, small businesses and large
              corporations to provide professional and reliable website design.
              We’ve helped companies in Florida helping them gain a competitive
              edge in their industry while providing an unmatched level of
              personal attention and customer support.
            </p>

            <Link href="/contact">
              <a>Request a Web Design Consultation</a>
            </Link>
          </div>

          <Image
            src={"/../public/web-design-florida-2.jpg"}
            height={800}
            width={570}
            alt="Florida Web Design"
          />
        </div>
        <div className={styles.info}>
          <Image
            src={"/../public/web-design-florida-3.jpg"}
            height={800}
            width={570}
            alt="Florida Web Design"
          />
          <div>
            <h3 className={styles.h3}>WEB DESIGN INDUSTRIES</h3>
            <p>
              Though we are happy work with all businesses. We wanted to focus
              on industries that we believe we can help improve. This is just a
              small list of possible industries we can do{" "}
              <strong>Web Design</strong> for.
            </p>
            <div className={styles.lists}>
              <ul>
                <li>Architecture</li>
                <li>Beauty</li>
                <li>Cannabis</li>
                <li>Catering</li>
                <li>Consulting</li>
                <li>Construction</li>
                <li>eCommerce</li>
                <li>Education</li>
                <li>Entertainment</li>
                <li>Fitness</li>
                <li>Fortune 500</li>
                <li>Healthcare</li>
                <li>HVAC</li>
              </ul>
              <ul>
                <li>Law</li>
                <li>Manufacturing</li>
                <li>Medical</li>
                <li>Non-for-Profit</li>
                <li>Pest Control</li>
                <li>Property Management</li>
                <li>Real Estate</li>
                <li>Resorts</li>
                <li>Restaurants</li>
                <li>Security</li>
                <li>Social Media 500</li>
                <li>Travel</li>
                <li>Many More…</li>
              </ul>
            </div>
            <Link href="/contact">
              <a>Request a Web Design Consultation</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.why}>
        <h3 className={styles.h3}>Why af. Designs?</h3>
        <p>
          Though we are a new company, we have been focused on customer
          satisfaction and results. Our track record may be short but our work
          will prove our longevity. <strong>Web Design</strong> is not only our
          bread and butter but its our passion. We can help you build the
          website of your dreams and improve the user experience for everyone of
          your customers. We want to prove we are the best{" "}
          <strong>Web Designers in Florida</strong>.
        </p>
        <div className={styles.reasons}>
          <div className={styles.reason}>
            <h2>1</h2>
            <h3>Passion</h3>
            <p>
              Our Focus when starting AF.Designs was <strong>web design</strong>{" "}
              and development at first.
            </p>
          </div>
          <div className={styles.reason}>
            <h2>2</h2>
            <h3>Knowledge</h3>
            <p>
              Not all of us went to college for <strong>web design</strong>, but
              we all know what a website needs to succeed.
            </p>
          </div>
          <div className={styles.reason}>
            <h2>3</h2>
            <h3>In-House</h3>
            <p>
              We want this to all bepersonal and help your brand. Adding more
              people destroys communication.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.pricingContainer}>
        <h3 className={styles.h3}>Our Website Design Pricing</h3>
        <div className={styles.pricing}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>Bronze</h2>
              <p>
                We will build a template WordPress website based on your samples
                provided, direction and brand guidelines.
              </p>
              <h4>Website Package Details</h4>
              <ul>
                <li>WordPress Template</li>
                <li>1 Hour Brainstorm</li>
                <li>Customization of Theme</li>
                <li>Mobile Responsiveness</li>
                <li>Social Media Integration</li>
                <li>Google Maps</li>
                <li>Mailing List Plugin</li>
                <li>Contact Form</li>
                <li>Photo Sourcing</li>
                <li>2 Rounds of Revisions</li>
              </ul>
              <div>
                <div className={styles.price}>
                  <h3 className={styles.h3}>$1,500</h3>
                  <strong>Bronze Package</strong>
                </div>
                <div className={styles.examples}>
                  <h4>For Example:</h4>
                  <div>
                    <h4>3 Page Website $2,400</h4>
                    <span>($300 per additional website page)</span>
                  </div>
                  <div>
                    <h4>5 Page Website $3,000</h4>
                    <span>($300 per additional website page)</span>
                  </div>
                  <div>
                    <h4>10 Page Website $4,500</h4>
                    <span>($300 per additional website page)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>Silver</h2>
              <p>
                We will build a customized WordPress website based on your
                samples provided, direction and brand guidelines.
              </p>
              <h4>Website Package Details</h4>
              <ul>
                <li>Customized WP Theme</li>
                <li>1 Hour Brainstorm</li>
                <li>Mobile Responsiveness</li>
                <li>Social Media Integration</li>
                <li>Custom Icons</li>
                <li>Google Maps</li>
                <li>Mailing List Plugin</li>
                <li>Contact Form</li>
                <li>Photo Sourcing</li>
                <li>Google Analytics</li>
                <li>Social Sharing</li>
                <li>404 Redirect</li>
                <li>XML Sitemaap</li>
                <li>3 Rounds of Revisions</li>
              </ul>
              <div>
                <div className={styles.price}>
                  <h3 className={styles.h3}>$3,000</h3>
                  <strong>Silver Package</strong>
                </div>
                <div className={styles.examples}>
                  <h4>For Example:</h4>
                  <div>
                    <h4>3 Page Website $3,900</h4>
                    <span>($300 per additional website page)</span>
                  </div>
                  <div>
                    <h4>5 Page Website $4,500</h4>
                    <span>($300 per additional website page)</span>
                  </div>
                  <div>
                    <h4>10 Page Website $6,000</h4>
                    <span>($300 per additional website page)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>Gold</h2>
              <p>
                We will build a website from scraatch with mock-ups on a
                WordPress CMS based on your requirements for ultimate success.
              </p>
              <h4>Website Package Details</h4>
              <ul>
                <li>Website from Scratch</li>
                <li>2 Page Custom Mock-up</li>
                <li>Custom WordPress CMS</li>
                <li>1 Hour Brainstorm</li>
                <li>Mobile Responsive</li>
                <li>Social Media Integration</li>
                <li>6 Custom Icons</li>
                <li>Google Maps</li>
                <li>Mailing List Plugin</li>
                <li>Contact Form</li>
                <li>Social Sharing</li>
                <li>Photo Sourcing</li>
                <li>404 Redirect</li>
                <li>XML Sitemap</li>
                <li>Google Analytics</li>
                <li>2 Hour &quot;How To&quot; Tutorial</li>
                <li>3 Rounds of Revisions</li>
              </ul>
              <div>
                <div className={styles.price}>
                  <h3 className={styles.h3}>$5,000</h3>
                  <strong>Gold Package</strong>
                </div>
                <div className={styles.examples}>
                  <h4>For Example:</h4>
                  <div>
                    <h4>3 Page Website $5,900</h4>
                    <span>($300 per additional website page)</span>
                  </div>
                  <div>
                    <h4>5 Page Website $6,500</h4>
                    <span>($300 per additional website page)</span>
                  </div>
                  <div>
                    <h4>10 Page Website $8,000</h4>
                    <span>($300 per additional website page)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default web_design;
