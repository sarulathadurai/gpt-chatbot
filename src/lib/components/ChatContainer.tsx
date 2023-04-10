import React from "react";
import Loader from "./Loader";
import { useChatsStore } from "../zustand/chatsStore";
import { shallow } from "zustand/shallow";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import { replaceUrl } from "../helpers/utils";

function FormattedResponse({ msg }: { msg: string }) {
  const formattedText = replaceUrl(msg).split(/\r?\n|\r|\n/g);

  return (
    <List>
      {formattedText.map((item, index) => (
        <ListItem key={index}>
          {item.endsWith("com") ? (
            <Link
              href={item}
              underline="always"
              target="_blank"
              rel="noopener"
              variant="body2"
            >
              {item}
            </Link>
          ) : (
            <ListItemText
              primary={item}
              primaryTypographyProps={{
                color: "black",
                variant: "body2",
              }}
              sx={{ margin: 0 }}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
}

export default function ChatContainer() {
  const { chats, isLoadingResponse } = useChatsStore(
    (state) => ({
      chats: state.chats,
      isLoadingResponse: state.isLoadingResponse,
    }),
    shallow
  );
  return (
    <>
      {chats.map((chat, index) => {
        return index % 2 === 0 ? (
          <Box pt={2}>
            <Box
              key={index}
              bgcolor={"primary.light"}
              width="45%"
              borderRadius={3}
            >
              <FormattedResponse msg={chat} />
            </Box>
          </Box>
        ) : (
          <Box
            key={index}
            bgcolor={"secondary.main"}
            width="45%"
            p={2}
            borderRadius={3}
            ml={"50%"}
            mt={2}
          >
            {
              <Typography color="black" variant="body2">
                {chat}
              </Typography>
            }
          </Box>
        );
      })}
      {isLoadingResponse ? <Loader /> : null}
    </>
  );
}
