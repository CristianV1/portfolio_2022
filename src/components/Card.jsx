import React, { useState } from "react";
import styles from "./Card.module.css";
import { AiFillInfoCircle } from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ title, description, img, aditionalStyles, link }) => {
  const [flip, setFlip] = useState(false);
  return (
    <div className={styles.card__main}>
      <div
        className={styles.card__holder}
        style={
          flip
            ? {
                transform: "rotateY(180deg)",
              }
            : {
                transform: "rotateY(0)",
              }
        }
      >
        <div className={styles.front__card}>
          <div className={styles.text__holder}>
            <AiFillInfoCircle
              onClick={() => {
                setFlip(true);
              }}
              className={styles.icons}
            />
            {
              //<p className={styles.title}> {title}</p>
              //<p className={styles.description}>{description}</p>
            }
          </div>
          <div className={styles.image__holder}>
            <a target={"_blank"} href={link}>
              <img className={styles.image} style={aditionalStyles} src={img} />
            </a>
          </div>
        </div>
        <div className={styles.back__card}>
          <div className={styles.text__holder}>
            <BsCardImage
              onClick={() => {
                setFlip(false);
              }}
              className={styles.icons}
            />
          </div>
          <div className={styles.back__text__holder}>
            <p className={styles.title}> {title}</p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
