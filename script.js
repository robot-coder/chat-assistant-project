async function compareResponses(prompt) {
    const response1 = await fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: prompt }),
    });
    const data1 = await response1.json();

    const response2 = await fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: prompt }),
    });
    const data2 = await response2.json();

    // Display both responses side by side
    const comparisonDiv = document.getElementById('comparison');
    comparisonDiv.innerHTML = `<div>Response 1: ${data1.response}</div>`;
    comparisonDiv.innerHTML += `<div>Response 2: ${data2.response}</div>`;
}