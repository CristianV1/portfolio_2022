import React, { useRef, useState } from "react";
import styles from "./Contact.module.css";
import { AiOutlineUser, AiOutlineFileText } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsChatLeftText } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const [errorName, setErrorName] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    if (e.target.name.value == "") {
      setErrorName("the name should not be empty");
      setTimeout(() => {
        setErrorName("");
      }, 3000);
    }
    if (e.target.email.value == "") {
      setErrorEmail("the email should not be empty");
      setTimeout(() => {
        setErrorEmail("");
      }, 3000);
    }

    emailjs
      .sendForm(
        "service_8hv9fbn",
        "template_7s9wrin",
        form?.current,
        "x5AYMc0uwUxb5t-2n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setTimeout(() => {
      setIsSubmit(false);
    }, 3000);
  };

  if (isSubmit === false) {
    return (
      <div>
        <p className={styles.title}>Contact me</p>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <div className={styles.inputHolder}>
            <AiOutlineUser className={styles.icons} />
            <input placeholder="Your name" name="name" />
          </div>
          {errorName !== "" && <p className={styles.errors}>{errorName}</p>}
          <div className={styles.inputHolder}>
            <HiOutlineMail className={styles.icons} />
            <input placeholder="Your email" name="email" />
          </div>
          {errorEmail !== "" && <p className={styles.errors}>{errorEmail}</p>}
          <div className={styles.inputHolder}>
            <AiOutlineFileText className={styles.icons} />
            <input placeholder="Subject" name="subject" />
          </div>
          <div className={styles.inputHolder}>
            <BsChatLeftText className={styles.icons} />
            <textarea placeholder="Message" type="area" name="message" />
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    );
  } else if (isSubmit === true) {
    return (
      <div>
        <p className={styles.title}>Message submited correcly!</p>
      </div>
    );
  }
};

export default Contact;
