import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Preview,
  Text,
  Hr,
  Heading,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailTypeProps = {
  message: string;
  senderEmail: string;
};

const ContactFormEmail = ({
  message,
  senderEmail,
}: ContactFormEmailTypeProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site.</Preview>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="px-10 py-4 my-10 bg-white rounded-md borderBlack">
              <Heading className="leading-tight">
                you recived this follwing message from the contact form.
              </Heading>
              <Text>{message}</Text>
              <Text>sent by {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
