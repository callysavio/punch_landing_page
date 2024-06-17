import React from "react";
import styles from "../styles/OpenBook.module.css";
import text1image from "../assets/images/openImg1.svg";
import text2image from "../assets/images/openImg2.svg";
import text3image from "../assets/images/openImg3.svg";
import text4image from "../assets/images/openImg4.svg";

const messages = [
  {
    id: 1,
    name: "Esther Howard",
    message: "Hi Luis I am currently working as an expert at alfizo.org",
    time: "12:00pm",
    image: text1image,
  },
  {
    id: 2,
    name: "Esther Howard",
    message: "Hi Luis I am currently working as an expert at alfizo.org",
    time: "11:00pm",
    image: text2image,
  },
  {
    id: 3,
    name: "Esther Howard",
    message: "Hi Luis I am currently working as an expert at alfizo.org",
    time: "10:00pm",
    image: text3image,
  },
  {
    id: 4,
    name: "Esther Howard",
    message: "Hi Luis I am currently working as an expert at alfizo.org",
    time: "10:00pm",
    image: text4image,
  },
];

const MessageBox = () => {
  return (
    <div className={styles.messageBox}>
      <p>All Messages</p>
      {messages.map((msg) => (
        <div key={msg.id} className={styles.message}>
          <img src={msg.image} alt="images" />
          <div>
            <div className={styles.msg}>
              <p className={styles.name}>{msg.name}</p>
              <p className={styles.time}>{msg.time}</p>
            </div>
            <p className={styles.text}>{msg.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageBox;
