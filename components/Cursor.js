import { useEffect, useRef } from "react";
import styles from "../styles/Cursor.module.scss";
import gsap from "gsap";
const Cursor = () => {
  const cursor = useRef();
  const follower = useRef();
  useEffect(() => {
    var posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;
    const links = document.getElementsByTagName("a");
    const cards = document.getElementsByClassName(".card");

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        gsap.set(follower.current, {
          css: {
            left: posX - 12,
            top: posY - 12,
          },
        });

        gsap.set(cursor.current, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    function mouseEnter() {
      gsap.to(cursor.current, {
        scale: 0.6,
        duration: 1,
        ease: "expo.inOut",
      });
      gsap.to(follower.current, {
        opacity: 0.7,
        height: 60,
        width: 60,
        x: -12,
        y: -12,
        duration: 1,
        ease: "expo.out",
      });
    }

    function mouseLeave() {
      gsap.to(cursor.current, {
        scale: 1,
        duration: 1,
        ease: "expo.inOut",
      });
      gsap.to(follower.current, {
        opacity: 0.3,
        height: 20,
        width: 20,
        duration: 1,
        x: 6,
        y: 6,
        ease: "expo.out",
      });
    }

    window.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
    Array.from(links).forEach((l) => {
      l.addEventListener("mouseenter", () => mouseEnter());
      l.addEventListener("mouseleave", () => mouseLeave());
    });
    Array.from(cards).forEach((card) => {
      card.addEventListener("mouseenter", () => mouseEnter());
      card.addEventListener("mouseleave", () => mouseLeave());
    });
  });

  return (
    <>
      <div className={styles.cursor} ref={cursor}></div>
      <div className={styles.cursorFollower} ref={follower}></div>
    </>
  );
};

export default Cursor;
