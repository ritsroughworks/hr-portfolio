import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
from fastapi import FastAPI, File, UploadFile, Form, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://barani-portfolio.onrender.com/contact","https://barani-portfolio.onrender.com/services-rfq","https://barani-portfolio.onrender.com/careers"],  # In production, specify the frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

from pydantic import BaseModel
from typing import List, Optional

# ... (imports remain the same, but ensure pydantic is there if not already, FastAPI includes it)

# Request Models
class ContactRequest(BaseModel):
    companyName: str
    contactNumber: str
    email: str
    message: str

class RFQRequest(BaseModel):
    companyName: str
    email: str
    phone: str
    message: str
    selected_services: str

def send_email_generic(subject: str, body: str, recipient_email: str, attachment: Optional[dict] = None):
    smtp_server = os.getenv("SMTP_SERVER")
    smtp_port = int(os.getenv("SMTP_PORT", 587))
    email_user = os.getenv("EMAIL_USER")
    email_pass = os.getenv("EMAIL_PASS")

    if not all([smtp_server, email_user, email_pass, recipient_email]):
        print("Error: Missing environment variables.")
        return

    msg = MIMEMultipart()
    msg['From'] = email_user
    msg['To'] = recipient_email
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    if attachment:
        try:
            part = MIMEBase('application', 'octet-stream')
            part.set_payload(attachment['content'])
            encoders.encode_base64(part)
            part.add_header('Content-Disposition', f'attachment; filename="{attachment["filename"]}"')
            msg.attach(part)
        except Exception as e:
            print(f"Error attaching file: {e}")

    try:
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(email_user, email_pass)
        text = msg.as_string()
        server.sendmail(email_user, recipient_email, text)
        server.quit()
        print(f"Email sent successfully to {recipient_email}")
    except Exception as e:
        print(f"Failed to send email: {e}")

# Reusing the generic function for the task
def send_application_email_task(name: str, email: str, age: str, gender: str, position: str, file_content: bytes, filename: str):
    recipient = os.getenv("RECIPIENT_EMAIL")
    subject = f"New Job Application: {position} - {name}"
    body = f"""
    New Job Application Received:
    
    Position: {position}
    Name: {name}
    Email: {email}
    Age: {age}
    Gender: {gender}
    
    Please find the resume attached.
    """
    send_email_generic(subject, body, recipient, {'content': file_content, 'filename': filename})

def send_contact_email_task(data: ContactRequest):
    recipient = os.getenv("RECIPIENT_EMAIL")
    subject = f"New Contact Request from {data.companyName}"
    body = f"""
    New Contact Request:
    
    Company: {data.companyName}
    Contact Number: {data.contactNumber}
    Email: {data.email}
    
    Message:
    {data.message}
    """
    send_email_generic(subject, body, recipient)

def send_rfq_email_task(data: RFQRequest):
    recipient = os.getenv("RECIPIENT_EMAIL")
    subject = f"New RFQ from {data.companyName}"
    body = f"""
    New Request for Quotation:
    
    Company: {data.companyName}
    Phone: {data.phone}
    Email: {data.email}
    
    Selected Services:
    {data.selected_services}
    
    Message:
    {data.message}
    """
    send_email_generic(subject, body, recipient)

@app.post("/apply")
async def apply_for_job(
    background_tasks: BackgroundTasks,
    name: str = Form(...),
    email: str = Form(...),
    age: str = Form(...),
    gender: str = Form(...),
    position: str = Form(...),
    resume: UploadFile = File(...)
):
    if not resume.filename.lower().endswith(('.pdf', '.doc', '.docx')):
        raise HTTPException(status_code=400, detail="Invalid file format. Only PDF and DOC allowed.")
    
    file_content = await resume.read()
    
    background_tasks.add_task(
        send_application_email_task, 
        name, 
        email, 
        age, 
        gender, 
        position, 
        file_content, 
        resume.filename
    )

    return {"message": "Application submitted successfully", "filename": resume.filename}

@app.post("/contact")
async def contact_form(
    contact_request: ContactRequest,
    background_tasks: BackgroundTasks
):
    background_tasks.add_task(send_contact_email_task, contact_request)
    return {"message": "Message sent successfully"}

@app.post("/rfq")
async def rfq_form(
    rfq_request: RFQRequest,
    background_tasks: BackgroundTasks
):
    background_tasks.add_task(send_rfq_email_task, rfq_request)
    return {"message": "RFQ sent successfully"}

@app.get("/")
def read_root():
    return {"message": "Barani HR Backend is running"}


