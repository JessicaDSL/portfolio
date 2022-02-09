import React, { useRef, useEffect, useState } from "react";
import { gsap, Power2, Power0 } from "gsap";
import { toast } from "react-toastify";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import { Container, Title, Email, Input, Form } from "./styles";
import { dark } from "@mui/material/styles/createPalette";

const Contact = () => {
  const titleRef = useRef();
  const imageRef = useRef();
  const infoRef = useRef();

  const [sizeMessage, setSizeMessage] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitRequest = async (e) => {
    e.preventDefault();
    console.log({email, message});
    const response = await fetch("/acess", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringfy({email, message})
    });
    const resData = await response.json();
    if(resData.status === 'success') {
      alert("Message Sent!");
      this.resetForm()
    } else if(resData.status === 'fail') {
      alert("Message failed to send")
    }
  }

  function handleInputChange(e) {
    console.log("clicou");
    if (e.target.name === "message") {
      data[e.target.name] = e.target.files[0];
    } else {
      [e.target.name] = e.target.value;
      setData(data);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("oiiii");
  }

  // console.log(sizeMessage.length);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(infoRef.current, {
      duration: 1,
      scrollTrigger: ".info",
      opacity: 1,
      y: 15,
      delay: 1,
    });
  });

  useEffect(() => {
    gsap.to(titleRef.current, {
      delay: 1,
      scrollTrigger: ".title",
      opacity: 1,
      //x: 200,
    });
  });

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,

      { y: 0, opacity: 1 },
      {
        ease: Power2.easeOut,
        repeat: -1,
        y: "+=30px",
        duration: 5,
        yoyo: true,
        opacity: 1,
      }
    );
  });

  useEffect(() => {
    if (sizeMessage.length > 200) {
      toast.error("No máximo 200 caracteres!", {
        theme: dark,
      });
      return;
    }
  }, [sizeMessage]);

  return (
    <Container id="contact">
      <Title className="title" ref={titleRef}>
        <p>
          <span>
            <hr />
          </span>
          <h3>Connect</h3>
        </p>
        <p>
          <h2>Did you like my work and are interested in contacting me?</h2>{" "}
        </p>
      </Title>

      <Email>
        <p>
          Contact me through social media, filling out the contact form, or
          simply send me an email: <span>jessikurt@gmail.com</span>
        </p>
      </Email>
      <ul>
        <li>
          <GitHubIcon />
        </li>
        <li>
          <LinkedInIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
      </ul>

      <Form onSubmit={submitRequest}>
        <label htmlFor="name">What's your name?</label>
        <input
          type="text"
          name="name"
          id="name"
          value="name"
          onChange={(e) => handleInputChange(e)}
        />
        <label htmlFor="email">Your email address</label>
        <input type="text" name="email" id="email" value="email"/>
        <label htmlFor="message">Type your message here</label>
        <textarea
          name="message"
          id="message"
          value="message"
          type="text"
          rows="5"
          cols="50"
          onKeyDown={(e) => {
            sizeMessage.length > 200
              ? toast.error("No máximo 200 caracteres!", {
                  theme: dark,
                })
              : setSizeMessage(e.target.value);
          }}
        />
        <span>{sizeMessage.length}/200</span>
        <button type="submit" value="Send Message!" />
      </Form>
    </Container>
  );
};

export default Contact;
