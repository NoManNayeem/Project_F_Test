
# Project_F Deployment

This repository contains a minimal **Django REST Framework backend** and **React (Vite) frontend** setup, each with its own Docker and Docker Compose configuration.

## Project Structure
```
Project_F_Deployment_Test/
├─ backend/        # Django + DRF backend
│  ├─ Dockerfile
│  ├─ docker-compose.yml
│  ├─ .env
│  └─ ...
├─ frontend/       # React + Vite frontend
│  ├─ Dockerfile
│  ├─ docker-compose.yml
│  ├─ .env
│  └─ ...
└─ venv/           # Python virtual environment (ignored by git)
```

## Backend (Django + DRF)

### Start Backend with Docker
```
cd backend
docker-compose up --build
```
This will start the Django backend at: **http://localhost:8000**

### Sample API Endpoint
```
GET http://localhost:8000/ping/
Response: { "message": "pong" }
```

## Frontend (React + Vite)

### Start Frontend with Docker
```
cd frontend
docker-compose up --build
```
This will start the React frontend at: **http://localhost:3000**

The frontend will fetch data from the backend `/ping` endpoint.

## Environment Files
- Each app has its own `.env` and `.env.example` file.
- Copy `.env.example` to `.env` and update values as needed.

## Notes
- **CORS** is enabled in Django for development to allow frontend-backend communication.
- `.gitignore` ensures sensitive `.env` files are not committed (but `.env.example` remains).

---

**Author:** Project_F Setup
