from fastapi import FastAPI, UploadFile, File
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

# Serve static files (HTML, JS, CSS)
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/", response_class=HTMLResponse)
async def read_root():
    return "<h1>Chat Assistant API</h1>"

@app.post("/chat")
async def chat(user_input: str):
    # Here you would integrate LiteLLM and handle the conversation
    return {"response": "This is a placeholder response"}

@app.post("/uploadfile/")
async def upload_file(file: UploadFile = File(...)):
    return {"filename": file.filename}