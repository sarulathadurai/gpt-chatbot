export interface companyDetsType {
  name: string;
  website: string;
}

export function geekChat(chat: string, company: companyDetsType) {
  return fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.REACT_OPENAI_API_KEY,
    },
    method: "POST",
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a chatbot of ${company.name} company.Their website is ${company.website}.Provide website link if possible`,
        },
        {
          role: "user",
          content: `${chat}.
        If the above text is not related to ${company.name} company and coding you should give response as 'Sorry, I can't answer that question'
        `,
        },
      ],
      max_tokens: 256,
      temperature: 0.7,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }),
  });
}
