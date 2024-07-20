
document.getElementById('send-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        addChatMessage(userInput, 'user');
        getBotResponse(userInput);
        document.getElementById('user-input').value = '';
    }
});

document.getElementById('user-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});

function addChatMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message ' + sender;
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    const responses = {
        "hello": "Hello! How can I help you today?",
        "portfolio": "Sure! Here are some details about my portfolio...",
        // Add more predefined responses here
        "default": "I'm not sure how to respond to that."
    };

    const botResponse = responses[userInput.toLowerCase()] || responses["default"];
    setTimeout(() => {
        addChatMessage(botResponse, 'bot');
    }, 500);
}

