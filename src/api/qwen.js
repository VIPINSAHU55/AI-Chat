async function callQwen(prompt) {
    try{
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_QWEN_API}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "qwen/qwen3-0.6b-04-28:free",
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
        console.log("Qwen API error:", error);
        return "Error contacting Qwen.";
    }
}

export default callQwen;