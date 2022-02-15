import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Container } from "./styles";

const FormRequest = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sqnse53",
        "template_3ol6ani",
        form.current,
        "user_qEnoWaKlEEdNC2NSRTgMn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <form ref={form} onSubmit={sendEmail} method="POST">
        <p>Seu nome:</p>
        <input name="name" type="text" />
        <p>Email:</p>
        <input name="email" type="text" />
        <p>Your Message:</p>
        <textarea name="message" type="text" cols="5" rows="5"></textarea>
        <button type="submit" className="form__input — button">
          Send Message!
        </button>
      </form>
    </Container>
  );
};

export default FormRequest;
