// JavaScript for class schedule interaction
document.addEventListener('DOMContentLoaded', () => {
    const scheduleData = {
        '2024': ['Maths - 9 AM', 'Physics - 11 AM', 'CS - 2 PM'],
        '2025': ['English - 8 AM', 'Biology - 10 AM', 'CS - 1 PM']
    };

    const batchInput = document.querySelector('#batchInput');
    const scheduleDisplay = document.querySelector('#scheduleDisplay');

    if (batchInput && scheduleDisplay) {
        document.querySelector('#submitButton').addEventListener('click', () => {
            const batch = batchInput.value;
            if (scheduleData[batch]) {
                scheduleDisplay.textContent = `Classes for batch ${batch}: ` + scheduleData[batch].join(', ');
            } else {
                scheduleDisplay.textContent = 'Schedule not found for this batch.';
            }
        });
    }

    // Chatbot functionality
    const chatInput = document.querySelector('#chatInput');
    const chatDisplay = document.querySelector('#chatDisplay');
    const sendButton = document.querySelector('#sendButton');

    if (chatInput && chatDisplay && sendButton) {
        sendButton.addEventListener('click', () => {
            const userInput = chatInput.value;
            if (userInput) {
                chatDisplay.textContent += `\nYou: ${userInput}`;
                // Basic response logic for demo purposes
                if (userInput.toLowerCase() === 'when is my next class?') {
                    chatDisplay.textContent += `\nCampusAI: Your next class is at 9 AM.`;
                } else {
                    chatDisplay.textContent += `\nCampusAI: I'm here to help, but I don't understand that question yet.`;
                }
                chatInput.value = '';
            }
        });
    }
});
