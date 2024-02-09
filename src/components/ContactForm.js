import "../blocks/ContactForm.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const contactForm = document.querySelector("#contact-form");

    emailjs
      .sendForm(
        "service_b4w7ghc",
        "template_nh49fpf",
        form.current,
        "nDHnSBmK_oHeBh5e4"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Your message was successfully sent. Thank you for your response and I will get back to you as soon as I can!"
          );
        },
        (error) => {
          console.log(error.text);
          alert("Failed", error);
        }
      );
    contactForm.reset();
  };

  return (
    <section className="contact__form">
      <h1 className="form__title">Contact Me!</h1>
      <div className="form__container">
        <form ref={form} onSubmit={sendEmail} id="contact-form">
          <div className="form__top-group">
            <div className="form__contents">
              <input
                className="form__input"
                type="name"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form__contents">
              <input
                className="form__input"
                type="text"
                name="phone"
                id="phone-number"
                placeholder="Phone # (optional)"
              />
            </div>
          </div>
          <div className="form__bottom-group">
            <div className="form__contents">
              <input
                className="form__input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form__contents">
              <input
                className="form__input"
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="form__contents">
            <textarea
              className="form__textarea"
              id="email-body"
              rows="5"
              placeholder="Type Message"
              name="message"
            />
          </div>
          <button type="submit" className="email__button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
