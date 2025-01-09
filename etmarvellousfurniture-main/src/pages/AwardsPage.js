import React, { useEffect } from "react";
import styles from "./awardsPage.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/gallery.jpg";
import AwardsSlide from "../components/cards/AwardsSlide";

const AwardsPage = () => {
  useEffect(() => {
    document.title = " Awards";
  }, []);

  return (
    <>
      <PageIntro text={"Awards"} img={zimg} />
      <AwardsSlide/>
      <div className={styles.cont}>
        <div className={styles.box}>
          
        </div>
      </div>
    </>
  );
};

export default AwardsPage;
