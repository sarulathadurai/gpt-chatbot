# gpt-chatbot

Do you need a chatbot for your website that answers all the questions related to your company. Here is a chatbot that is powered by chatgpt that acts as your assistant.

## Installation

`npm install gpt-chatbot`

## Usage

This library comes with customisable components where you can customise it according to your needs.

```
import { Bot, Header, ChatContainer } from "gpt-chatbot";
function App() {
  const theme = {
    palette: {
      primary: {
        main: "#ca0714",
        light: "#fec9c9",
      },
      secondary: {
        main: "#ddd",
      },
    },
  };
  return (
    <Bot
      header={<Header title="Canva" />}
      chatContainer={<ChatContainer />}
      companyDetails={{
        name: "canva",
        website: "https://www.canva.com/",
      }}
      chatTheme={theme}
      apiKey={import.meta.env.VITE_OPENAI_API_KEY}
    />
  );
}
```

### Props List of Bot Component

| Props          | Example                                                     |
| -------------- | ----------------------------------------------------------- |
| header         | [Header](#Header)                                           |
| companyDetails | `{name:/Your CompanyName/,website: /Your Company Website/}` |
| chatTheme      | [theme](#theme)                                             |
| apiKey         | pass your openAi key                                        |
| inputStyle     | style for input                                             |
| buttonStyle    | style for button                                            |

# Header

| Props          | Explanation                |
| -------------- | -------------------------- |
| title          | your chatbot name          |
| containerStyle | style for header container |
| textStyle      | text style                 |

### Example

```
<Header
  title="canva"
  textStyle={{fontWeight:'bold',fontFamily:'Calibri'}}
  containerStyle={{backgroundColor:'blue'}}
>
```

# theme

The library is providing customised theming options for you to change theme of your bot that contemplates with
your website
 primary.main - main color
 primary.light - bot message color
 secondary.main - user message color
```
const theme = {
    palette: {
      primary: {
        main: "#ca0714",
        light: "#fec9c9",
      },
      secondary: {
        main: "#ddd",
      },
    },
  };
```
