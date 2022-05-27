import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import { Parallax } from "react-scroll-parallax";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [timeline, setTimeline] = useState("");
  const [price, setPrice] = useState("$0 - $500");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    setSuccess("");
    let data = {
      name,
      phone,
      email,
      project,
      timeline,
      price,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setName("");
        setPhone("");
        setEmail("");
        setProject("");
        setTimeline("");
        setSuccess("Message Sent!");
        setPrice(1);
      }
      console.log(res);
    });
  };

  return (
    <div className={styles.contact}>
      <Parallax speed={-3}>
        <section className={styles.intro}>
          <h1>Let&apos;s get you an estimate.</h1>
          <div className={styles.social}>
            <a href="https://github.com/FlorezAdam-FS">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/adamflorez/">
              <AiFillLinkedin />
            </a>
            <a href="https://instagram.com/adamflorezdesigns">
              <AiOutlineInstagram />
            </a>
            <a href="https://www.facebook.com/adam.florez.754">
              <FaFacebookF />
            </a>
          </div>
        </section>
      </Parallax>
      <section className={styles.contactForm}>
        <div className={styles.left}>
          <div>
            <strong>Address</strong>
            <p>507 Pinnacle cove Blvd Orlando FL, 32824 United States</p>
          </div>
          <div>
            <strong>Email</strong>
            <p className={styles.contact}>
              <a target="blank" href="mailto: adam@adamflorezdesigns.com">
                adam@adamflorezdesigns.com
              </a>
            </p>
          </div>
          <div>
            {" "}
            <strong>Phone</strong>
            <p>407-932-8226</p>
          </div>
        </div>
        <div className={styles.right}>
          <strong>TELL US ABOUT YOUR PROJECT AND GOALS.</strong>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.input}>
              <strong>01</strong>
              <div>
                <p>What&apos;s Your name?</p>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                ></input>
              </div>
            </div>
            <div className={styles.input}>
              <strong>02</strong>
              <div>
                <p>What&apos;s your phone number?</p>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                ></input>
              </div>
            </div>
            <div className={styles.input}>
              <strong>03</strong>
              <div>
                <p>What&apos;s Your email address?</p>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
              </div>
            </div>
            <div className={styles.input}>
              <strong>04</strong>
              <div>
                <p>Tell me about your project.</p>
                <input
                  type="text"
                  name="project"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  required
                ></input>
              </div>
            </div>
            <div className={styles.input}>
              <strong>05</strong>
              <div>
                <p>Do you have a timeline?</p>
                <input
                  type="text"
                  name="timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  required
                ></input>
              </div>
            </div>
            <div className={styles.input}>
              <strong>06</strong>
              <div>
                <p>What&apos;s Your budget?</p>
                <select
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                >
                  <option value="$0 - $500">$0 - $500</option>
                  <option value="$501 - $2500">$501 - $2500</option>
                  <option value="$2501+">$2501+</option>
                </select>
              </div>
            </div>
            <div className={styles.buttonDiv}>
              <button type="submit">
                <span>Submit</span> <BsArrowUpRight />
              </button>
              <span>{success}</span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
