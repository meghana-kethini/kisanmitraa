import React, { useState } from "react";

export default function ChatBot({ t }) {
  const [messages, setMessages] = useState([
    {
      text: t.chatWelcome || "Hello! Ask me about crops, weather or schemes.",
      sender: "bot"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };

    // Simple mock AI reply logic
    let replyText = "I will help you with that.";

    if (input.toLowerCase().includes("weather")) {
      replyText = "Weather looks good for farming today.";
    } else if (input.toLowerCase().includes("price")) {
      replyText = "You can check market prices in Market section.";
    } else if (input.toLowerCase().includes("disease")) {
      replyText = "Please visit Disease section for crop treatment.";
    }

    const botMessage = { text: replyText, sender: "bot" };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <h3>{t.chatTitle || "Farmer AI Assistant"}</h3>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.sender === "user" ? "user" : "bot"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder={t.typeMessage || "Type your question..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleSend}>
          {t.send || "Send"}
        </button>
      </div>
    </div>
  );
}
