import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { Container } from "./styles";

const FormRequest = () => {
  const form = useRef();
  const [sizeMessage, setSizeMessage] = useState(0);

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
          console.log();
          toast.success(`${result.text}! A mensagem foi enviada!`, {
            theme: "dark",
          });
        },
        (error) => {
          toast.error(`${error.text}! A mensagem não foi enviada!`, {
            theme: "dark",
          });
        }
      );
    form.current.reset();
  };

  return (
    <Container>
      <form ref={form} onSubmit={sendEmail} method="POST">
        <p>Seu nome:</p>
        <input name="name" type="text" />
        <p>Seu Email:</p>
        <input name="email" type="text" />
        <p>Sua Mensagem:</p>
        <textarea
          name="message"
          type="text"
          cols="5"
          rows="5"
          onChange={(e) => setSizeMessage(e.target.value)}
        ></textarea>
        <span>{sizeMessage.length > 0 ? sizeMessage.length : "0"}/300</span>
        <button type="submit">ENVIAR!</button>
      </form>
    </Container>
  );
};

export default FormRequest;
