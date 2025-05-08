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
    document.getElementById('messages').innerHTML += `<div>User: ${userInput}</div>`;
    document.getElementById('messages').innerHTML += `<div>Assistant: ${data.response}</div>`;
    document.getElementById('user-input').value = '';
});