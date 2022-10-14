import React, { useRef } from "react";
import emailjs from "emailjs-com";
// styles
import "./contactfirst.scss";
// assets
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
} from "react-icons/ai";

const ContactFirst = () => {
  //#region Email Form Function
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2lrg4yp",
        "template_0inbrv5",
        form.current,
        "uRYW8maA1hDnXmMP_"
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
  };
  //#endregion

  return (
    <>
      <section>
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <AiOutlineMail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>abdulmoiz.solaiman@gmail.com</h5>
              <a
                href="mailto:abdulmoiz.solaiman@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send an email
              </a>
            </article>
            <article className="contact__option">
              <AiOutlineWhatsApp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+63 909 020 6852</h5>
              <a
                href="https://api.whatsapp.com/send?phone=639090206852"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <AiOutlineLinkedin className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <h5>Abdul Moiz Solaiman</h5>
              <a
                href="https://www.linkedin.com/in/abdulmoiz-solaiman/"
                target="_blank"
                rel="noreferrer"
              >
                Connect with me
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input type="text" name="email" placeholder="Your email" required />
            <textarea
              name="message"
              rows="7"
              placeholder="Your message"
              required
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactFirst;
