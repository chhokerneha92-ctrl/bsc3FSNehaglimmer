# GLIIMMER – Luxury Nail Boutique

GLIIMMER is a full-stack web application for a luxury nail lacquer boutique. It was built as Assessment 3 for "AI for Forensic Science (UG) – Intermediate" (BSc Forensic Science, Geeta University).

## Live Links

- Frontend: https://bsc3-fs-nehaglimmer.vercel.app/
- Backend (API): https://bsc3fsnehaglimmerbackend.onrender.com/
- GitHub: https://github.com/chhokerneha92-ctrl/bsc3FSNehaglimmer

## Tech Stack

- **Frontend:** Node.js tooling (npm), deployed on Vercel **(check: add React/Vite/HTML etc.)**
- **Backend:** Node.js with Express, deployed on Render
- **Database:** **(check: add MongoDB/none/etc.)**

## Project Structure

```
Frontend/                              -> frontend code
backend/                               -> backend (Express) code
stitch_gliimmer_luxury_nail_boutique/  -> design files
```

## How to Run Locally

Requirements: Node.js (v18 or later) and npm.

### 1. Clone the repository
```bash
git clone https://github.com/chhokerneha92-ctrl/bsc3FSNehaglimmer.git
cd bsc3FSNehaglimmer
```

### 2. Start the backend
```bash
cd backend
npm install
npm start
```
The server runs on http://localhost:5000 **(check: your port)**.
If the backend needs environment variables, create a `.env` file in `backend/` **(check: list them, e.g. PORT, DB URL)**.

### 3. Start the frontend
Open a new terminal:
```bash
cd Frontend
npm install
npm run dev
```
Open the local address shown in the terminal **(check: use `npm start` if that is your script)**.

## Features

- Browse the nail lacquer collection **(check: edit to match your site)**
- Product details and boutique pages
- Frontend connected to the backend API

## Author

Neha Chhoker, BSc Forensic Science, Geeta University
