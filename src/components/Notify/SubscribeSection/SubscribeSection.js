import React from "react";

import { Container, Content, Form } from "./styles";

const SubscribeSection = () => {
  return (
    <Container>
      <Content>
        <strong>Get Notified Of Any Updates!</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          fringilla fringilla nisl congue congue. Maecenas nec condimentum
          libero, at elementum mauris. Phasellus eget nisi dapibus, ultricies
          nisl at, hendrerit risusuis ornare luctus id sollicitudin ante
          lobortis at.
        </p>
        <Form>
          <input type="email" placeholder="Email Address" required />
          <button>
            Notify
          </button>
        </Form>
      </Content>
      <iframe
        title="naruto-run"
        width="450"
        height="290"
        src="https://www.youtube.com/embed/0q9rX86yUHE"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Container>
  );
};

export default SubscribeSection;
