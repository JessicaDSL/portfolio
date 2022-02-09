import React from "react";
import emailjs from "emailjs-com";
import apikeys from "../../apikey";

const FormRequest = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", apikeys.TEMPLATE_ID, e.target, apikeys.USER_ID)
      .then(
        (result) => {
          alert("Mensagem enviada, retornarei em breve", result.text);
        },
        (error) => {
          alert("Ocorreu um erro, tente novamente", error.text);
        }
      );
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <p>Seu nome</p>
      <input
        name="name"
        type="text"
        placeholder="Name..."
        className="form__input"
      />
      <p>Assunto</p>
      <input
        name="subject"
        type="text"
        placeholder="Assunto..."
        className="form__input"
      />
      <p>Your Message:</p>
      <textarea
        name="message"
        type="text"
        placeholder="Your Message…"
        className="form__input-message"
      ></textarea>
      <button className="form__input — button">Send Message</button>
    </form>
  );
};

export default FormRequest;
