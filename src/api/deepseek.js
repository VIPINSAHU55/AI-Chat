async function callDeepseek(prompt) {
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_DEEPSEEK_API}`, 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free", 
          messages: [
            {
              role: "user",
              content: prompt
            }
          ]
        })
      });
  
      const data = await response.json();
  
      if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content;
      } else {
        console.error("Unexpected response:", data);
        return "No response from Deepseek.";
      }
    } catch (error) {
      console.error("Deepseek API error:", error);
      return "Error contacting Deepseek.";
    }
  }

  export default callDeepseek;
  