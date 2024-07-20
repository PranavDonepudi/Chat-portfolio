document.getElementById('send-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        addChatMessage(userInput, 'user');
        getBotResponse(userInput);
        document.getElementById('user-input').value = '';
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
        "About": "Here is all my info: Earning my Master's degree from Rice University, I honed advanced software engineering skills, delving into machine learning and artificial intelligence. Presently at SBS CORP, my focus lies in leveraging my expertise in JavaScript frameworks and Information and Communications Technology (ICT) to innovate and optimize application deployment. With a passion for creating impactful user-centric software, I am eager to contribute to projects that challenge and expand my technical progress. Our team at DXC Technology thrived as I immersed myself in web application development, mastering JavaScript, HTML, CSS, and Node.js to deliver robust solutions to a diverse clientele.",
        "default": "I'm not sure how to respond to that."
    };

    const botResponse = responses[userInput.toLowerCase()] || responses["default"];
    setTimeout(() => {
        addChatMessage(botResponse, 'bot');
    }, 500);
}
