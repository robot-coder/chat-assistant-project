document.getElementById('send-button').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    const response = await fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: userInput }),
    });
    const data = await response.json();
    // Append user input and assistant response to the messages div
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML += `<div>User: ${userInput}</div>`;
    messagesDiv.innerHTML += `<div>Assistant: ${data.response}</div>`;
    document.getElementById('user-input').value = '';
});