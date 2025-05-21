async function callChatGPT(prompt) {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_CHATGPT_API}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: prompt
            }
          ]
        })
      });
  
      const data = await response.json();

     
        return data.choices[0].message.content;
      
    } catch (error) {
      console.error("ChatGPT API error:", error);
      return "Error contacting ChatGPT.";
    }
  }

  export default callChatGPT;
  