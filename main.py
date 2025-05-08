# Import necessary libraries
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import requests

app = FastAPI()

# Serve static files (HTML, JS, CSS)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Endpoint for the main page
@app.get("/", response_class=HTMLResponse)
async def read_root():
    return "<h1>Chat Assistant API</h1>"

# Endpoint for chat
@app.post("/chat")
async def chat(user_input: str):
    # Integrate LiteLLM for LLM calls
    llm_response = call_llm(user_input)
    return {"response": llm_response}

# Function to call the LLM
def call_llm(prompt):
    # Replace with your actual LLM API call
    url = "https://api.openrouter.ai/v1/llm"
    headers = {"Authorization": "Bearer YOUR_API_KEY"}
    data = {"prompt": prompt}
    response = requests.post(url, headers=headers, json=data)
    return response.json().get('response', 'No response')

# Endpoint for file upload
@app.post("/uploadfile/")
async def upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename}