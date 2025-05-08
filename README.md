# Chat Assistant Documentation

## Overview
This project implements a Chat Assistant using FastAPI for the backend and JavaScript for the frontend. The assistant allows users to interact with a language model (LLM) and supports file uploads for context.

## Features
- **Frontend**: A simple user interface built with HTML and JavaScript.
- **Backend**: A FastAPI server that handles chat requests and integrates with LiteLLM.
- **Continuous Conversation**: Maintains a conversation history.
- **File Uploads**: Users can upload text and image files to provide context to the LLM.
- **Response Comparison**: Users can compare responses from two LLMs side by side.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/robot-coder/chat-assistant-project.git
   cd chat-assistant-project
   ```
2. Install the required packages:
   ```bash
   pip install fastapi uvicorn requests
   ```
3. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```
4. Open `index.html` in a web browser to access the chat assistant.

## Usage
- Type a message in the input box and click 'Send' to interact with the assistant.
- Use the file upload feature to add context to your queries.
- Click 'Upload File' to send files to the server.

## API Endpoints
- **GET /**: Returns the main page.
- **POST /chat**: Accepts user input and returns the LLM response.
- **POST /uploadfile/**: Accepts file uploads.

## License
This project is licensed under the MIT License.