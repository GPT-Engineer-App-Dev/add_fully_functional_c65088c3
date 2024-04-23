import React, { useState } from "react";
import { Box, VStack, Text, Textarea, Button, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const sendMessage = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "Cannot send an empty message.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    setMessages([...messages, { text: inputValue, sender: "user" }]);
    setInputValue("");

    setTimeout(() => {
      setMessages((msgs) => [...msgs, { text: "This is a simulated response.", sender: "bot" }]);
    }, 1500);
  };

  return (
    <VStack spacing={4} w="100%">
      <Box w="100%" p={4} borderWidth="1px" borderRadius="lg" overflowY="auto" maxHeight={{ base: "300px", md: "400px" }}>
        {messages.map((message, index) => (
          <Text key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"} m={1}>
            {message.text}
          </Text>
        ))}
      </Box>
      <Box w="100%">
        <Textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Type your message here..." />
        <Button leftIcon={<FaPaperPlane />} colorScheme="blue" onClick={sendMessage} mt={2}>
          Send Message
        </Button>
      </Box>
    </VStack>
  );
};

export default ChatWindow;
