import React from "react";
import { Container, VStack, Heading, Text, Box, IconButton } from "@chakra-ui/react";
import { FaWhatsapp, FaFacebook, FaTelegramPlane } from "react-icons/fa";
import ChatWindow from "../components/ChatWindow";

const Index = () => {
  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          Township Small Business Chatbot
        </Heading>
        <ChatWindow />
        <Text>Or connect with us on:</Text>
        <Box>
          <IconButton aria-label="WhatsApp" icon={<FaWhatsapp />} m={1} colorScheme="whatsapp" />
          <IconButton aria-label="Facebook" icon={<FaFacebook />} m={1} colorScheme="facebook" />
          <IconButton aria-label="Telegram" icon={<FaTelegramPlane />} m={1} colorScheme="telegram" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
