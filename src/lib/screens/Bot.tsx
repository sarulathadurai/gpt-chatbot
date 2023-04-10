import { Container, Box, TextField, Button } from "@mui/material";
import React, { useState, useRef, useEffect, ReactNode } from "react";
import { useChatsStore } from "../zustand/chatsStore";
import { shallow } from "zustand/shallow";
import { companyDetsType } from "../apis/geekChat";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";

interface BotPropTypes {
  buttonStyle?: object;
  inputStyle?: object;
  header: ReactNode;
  chatContainer: ReactNode;
  companyDetails: companyDetsType;
  chatTheme: ThemeOptions;
  apiKey: string;
}

function Bot({
  buttonStyle,
  inputStyle,
  header,
  chatContainer,
  companyDetails,
  chatTheme,
  apiKey,
}: BotPropTypes) {
  const [message, setMessage] = useState("");
  const messageRef = useRef<HTMLDivElement>(null);
  const { chats, fetchAiResponse, isLoadingResponse } = useChatsStore(
    (state) => ({
      chats: state.chats,
      fetchAiResponse: state.fetchAiResponse,
      isLoadingResponse: state.isLoadingResponse,
    }),
    shallow
  );

  const theme = createTheme(chatTheme);

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleMessage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage(e.target.value);
  };
  const appendChatList = () => {
    if (message) {
      fetchAiResponse(message, companyDetails, apiKey);
      setMessage("");
    }
  };

  const detectEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      appendChatList();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box className="container">
          {header}
          <Box flex={1} p={3} className="chat-container">
            <>
              {chatContainer}

              <div ref={messageRef}></div>
            </>
          </Box>
          <Box
            p={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              id="standard-basic"
              label="Ask me "
              variant="standard"
              onChange={handleMessage}
              value={message}
              onKeyDown={detectEnterPress}
              InputProps={{
                readOnly: isLoadingResponse ? true : false,
              }}
              sx={{ width: "80%", marginRight: 5, ...inputStyle }}
            />
            <Button
              onClick={appendChatList}
              variant="outlined"
              color="error"
              sx={{
                color: "primary.main",
                borderColor: "primary.main",
                ...buttonStyle,
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Bot;
