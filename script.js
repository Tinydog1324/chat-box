// Get DOM elements
const messageList = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

// Define event listeners
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		sendMessage();
	}
});

// Define function to send message
function sendMessage() {
	const messageText = messageInput.value.trim();
	if (messageText !== '') {
		const username = 'Guest';
		const time = new Date().toLocaleTimeString();

		// Add user message to message list
		const userMessageHTML = `<li><span class="message-username">${username}</span><span class="message-time">${time}</span><span class="message-text">${messageText}</span></li>`;
		messageList.innerHTML += userMessageHTML;

		// Generate computer response
		const computerMessage = generateComputerResponse(messageText);

		// Add computer response to message list
		const computerMessageHTML = `<li><span class="message-username">Computer</span><span class="message-time">${time}</span><span class="message-text">${computerMessage}</span></li>`;
		messageList.innerHTML += computerMessageHTML;

		// Clear input field
		messageInput.value = '';
	}
}

// Define function to generate computer response
function generateComputerResponse(userMessage) {
	// Define possible responses
	const responses = [
		"I'm sorry, I don't understand.",
		"Could you please clarify?",
		"Interesting point. Can you elaborate?",
		"Thank you for your input.",
		"That's a good question. Let me think about it.",
		"I'm not sure what you mean. Could you rephrase that?",
		"Interesting perspective. Can you explain further?",
		"I appreciate your comment. Thank you.",
		"Let's talk more about that.",
		"I see. Can you tell me more?",
	];

	// Choose random response
	const randomIndex = Math.floor(Math.random() * responses.length);
	const response = responses[randomIndex];

	return response;
}
