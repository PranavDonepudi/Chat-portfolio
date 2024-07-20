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
        "tell me about your projects": "Sure! Here are some details about my projects...I have worked on multiple projects which involve full-stack development. Pac-man game designed using dynamic website structure using the Spark Java framework and hosted in Heroku.",
        "tell me about your experience": "Worked in DXC Technology and delivered projects for Britannia for over 2 years. Currently working as an Intern in SBS Corps.",
        "contact information": "You can reach me via LinkedIn, Email, or Phone.....link down below.",
        "default": "I'm not sure how to respond to that."
    };

    const botResponse = responses[userInput.toLowerCase()] || responses["default"];
    setTimeout(() => {
        addChatMessage(botResponse, 'bot');
    }, 500);
}

function sendOptionMessage(optionMessage) {
    document.getElementById('user-input').value = optionMessage;
    document.getElementById('send-button').click();
}
