const styles = `
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f6f8;
}

.page-container {
  padding: 20px;
}

.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.auth-card {
  background: white;
  padding: 30px;
  width: 320px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.auth-card input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
}

.auth-card button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: green;
  color: white;
  border: none;
  cursor: pointer;
}

.app-header {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: green;
  color: white;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid #ddd;
}

.bottom-nav button {
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
}

.market-card,
.scheme-card,
.calendar-card,
.disease-card,
.profile-card,
.weather-card {
  background: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  box-shadow: 0 0 5px rgba(0,0,0,0.05);
}

.chatbot-container {
  background: white;
  padding: 15px;
  border-radius: 8px;
}

.chat-messages {
  height: 200px;
  overflow-y: auto;
  margin-bottom: 10px;
}

.chat-message {
  padding: 8px;
  margin: 5px 0;
  border-radius: 6px;
}

.chat-message.user {
  background: #dcf8c6;
  text-align: right;
}

.chat-message.bot {
  background: #eee;
}
`;

export default styles;
