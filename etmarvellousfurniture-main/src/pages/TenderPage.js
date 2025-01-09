import React, { useEffect } from "react";
import styles from "./tenderPage.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/gallery.jpg";

const TenderPage = () => {
  useEffect(() => {
    document.title = " Tender";
  }, []);

  return (
    <>
      <PageIntro text={"TenderPage - Comming Soon"} img={zimg} />
      <div className={styles.cont}>
        <div className={styles.box}>
          
        </div>
      </div>
    </>
  );
};

export default TenderPage;
