document.getElementById('upload-button').addEventListener('click', async () => {
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('/uploadfile/', {
        method: 'POST',
        body: formData,
    });
    const data = await response.json();
    alert(`Uploaded file: ${data.filename}`);
});