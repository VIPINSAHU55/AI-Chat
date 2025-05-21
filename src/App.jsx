import { useState } from "react";
import callGemini from "./api/gemini";
import callChatGPT from "./api/chatgpt";
import callDeepseek from "./api/deepseek";
import "./App.css";
import callQwen from "./api/qwen";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState([]);
  const [selectedModel, setSelectedModel] = useState("Gemini");

  async function main() {
    let output = "";

    if (selectedModel === "Gemini") {
      output = await callGemini(prompt);
    } else if (selectedModel === "ChatGPT") {
      output = await callChatGPT(prompt);
    } else if (selectedModel === "Deepseek") {
      output = await callDeepseek(prompt);
    } else if (selectedModel === "Qwen") {
      output = await callQwen(prompt);
    }

    setResponse([...response, { prompt: prompt, response: output }]);
    setPrompt("");
  }

  return (
    <>
      <h1 className="chat">AI Chat</h1>
      <div className="container">
        <div className="response">
          {response.map((res, index) => (
            <div key={index}>
              <p className='question'><strong>Question:</strong></p>
              <p className="question-text">{res.prompt}</p>
              <p className='answer'><strong>Answer:</strong></p>
              <p className="answer-text">{res.response}</p>
            </div>
          ))}
        </div>

        <div>
          <div className='models'>
            <button className={`model ${selectedModel === "Gemini" ? "active" : ""}`}
              onClick={() => setSelectedModel("Gemini")}
            >Gemini</button>
            <button className={`model ${selectedModel === "ChatGPT" ? "active" : ""}`}
              onClick={() => setSelectedModel("ChatGPT")}
            >ChatGPT</button>
            <button className={`model ${selectedModel === "Deepseek" ? "active" : ""}`}
              onClick={() => setSelectedModel("Deepseek")}
            >Deepseek</button>
            <button className={`model ${selectedModel === "Qwen" ? "active" : ""}`}
              onClick={() => setSelectedModel("Qwen")}
            >Qwen</button>
          </div>
          <div className='box'>
            <textarea type="text" className='text' placeholder='Type your question' onChange={(e) => {
              setPrompt(e.target.value);
            }}></textarea>
            <button className='btn' onClick={main}>SEND</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
