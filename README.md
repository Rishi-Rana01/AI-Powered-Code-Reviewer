# AI-Powered Code Reviewer

This repository contains a simple AI-powered code review web app with a React frontend and a Node/Express backend.
![]( https://github.com/Rishi-Rana01/AI-Powered-Code-Reviewer/blob/main/Home.png )
![](https://github.com/Rishi-Rana01/AI-Powered-Code-Reviewer/blob/main/Review.png )

## Folder structure

- `frontend/` - React app built with Vite. 
- `Backend/` - Node/Express backend that exposes an AI review endpoint.

## Frontend (development)

1. Change into the frontend folder:

```powershell
cd "frontend"
```

2. Copy environment example and edit if needed:

```powershell
copy .env.example .env
# Edit .env to point VITE_API_BASE to your backend (default is http://localhost:3000)
```

3. Install dependencies and start dev server:

```powershell
npm install
npm run dev
```

The dev server is usually available at http://localhost:5173 by default.

## Backend

1. Change into the `Backend` folder:

```powershell
cd Backend
```

2. Install dependencies and start the server:

```powershell
npm install
node server.js
```

By default the backend listens on port 3000. The frontend expects the AI endpoint at `${VITE_API_BASE}/ai/get-review`.

## Notes

- The frontend now uses `VITE_API_BASE` for the backend base URL. Set this in `frontend/.env` or the environment before running the dev server.
- I added a small `Nav` component and a `NotFound` fallback route. App routing uses React Router v6.

If you want, I can:
- Add navigation styling or a global header layout.
- Add example requests to test the backend endpoint.
- Start the dev server for you and open a browser preview.
