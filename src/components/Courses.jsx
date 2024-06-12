import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/actions";
import styles from "../styles/Courses.module.css";
import bgImage from "../assets/images/courses_bg.svg";

const Courses = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.courses.category);
  const courses = useSelector((state) => state.courses.courses[category]);

  const handleCategoryChange = (newCategory) => {
    dispatch(setCategory(newCategory));
  };

  // Splitting courses into three arrays, with the last containing "Explore more"
  const coursesChunks = [
    courses.slice(0, 4),
    courses.slice(4, 8),
    [...courses.slice(8, 11), "Explore more"],
  ];

  return (
    <>
      <div id={styles.coursesSection}>
        <div id={styles.coursesBtns}>
          <button
            className={`${styles.coursesBtn} ${styles.coursesBtn1} ${
              category === "IT & Development" ? styles.active : ""
            }`}
            onClick={() => handleCategoryChange("IT & Development")}
          >
            IT & Development
          </button>
          <button
            className={`${styles.coursesBtn} ${styles.coursesBtn2} ${
              category === "Design and Creative" ? styles.active : ""
            }`}
            onClick={() => handleCategoryChange("Design & Creative")}
          >
            Design & Creative
          </button>
        </div>
        <div id={styles.coursesHolder}>
          {coursesChunks.map((chunk, chunkIndex) => (
            <ul key={chunkIndex} className={styles.courses}>
              {chunk.map((course, courseIndex) => (
                <li key={courseIndex}>{course}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <img src={bgImage} alt="coursesimage" id={styles.bgImage} />
    </>
  );
};

export default Courses;
