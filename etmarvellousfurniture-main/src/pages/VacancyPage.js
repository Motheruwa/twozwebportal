import React, { useEffect } from "react";
import styles from "./vacancyPage.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/gallery.jpg";

const VacancyPage = () => {
  useEffect(() => {
    document.title = " Vacancy";
  }, []);

  return (
    <>
      <PageIntro text={"VacancyPage - Comming Soon"} img={zimg} />
      <div className={styles.cont}>
        <div className={styles.box}>
          
        </div>
      </div>
    </>
  );
};

export default VacancyPage;
