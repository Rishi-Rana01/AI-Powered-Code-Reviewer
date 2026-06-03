# AI-Powered Code Reviewer

[![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5+-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4+-black?style=flat-square&logo=express)](https://expressjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

An intelligent web application that leverages **AI** to provide automated code reviews and suggestions. Submit your code snippets and receive actionable feedback on code quality, best practices, potential bugs, and optimization opportunities.

🌐 **[Live Demo](#)** | 📂 **[GitHub](https://github.com/Rishi-Rana01/AI-Powered-Code-Reviewer)** | 👤 **[Profile](https://github.com/Rishi-Rana01)**

---

## 📸 Screenshots

![Home Page](https://github.com/Rishi-Rana01/AI-Powered-Code-Reviewer/blob/main/Home.png)
![Review Results](https://github.com/Rishi-Rana01/AI-Powered-Code-Reviewer/blob/main/Review.png)

---

## ✨ Key Features

- **🤖 AI-Powered Analysis**: Intelligent code review using advanced AI models
- **📝 Syntax Highlighting**: Beautiful code display with language-specific formatting
- **💡 Smart Suggestions**: Actionable recommendations for code improvements
- **🔍 Bug Detection**: Identify potential bugs and vulnerabilities
- **⚡ Performance Tips**: Suggestions for optimizing code performance
- **🎨 Clean UI**: Intuitive interface with real-time feedback
- **📱 Fully Responsive**: Works seamlessly on desktop and mobile devices

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 18** | UI library |
| **Vite** | Fast build tool |
| **Tailwind CSS** | Styling |
| **Axios** | HTTP client |
| **React Router** | Routing |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | Runtime |
| **Express.js** | Web framework |
| **Gemini API** | AI engine |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** v9+
- **Google AI API Key**

---

## 📋 Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/Rishi-Rana01/AI-Powered-Code-Reviewer.git
cd AI-Powered-Code-Reviewer
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create `.env`:
```env
PORT=3000
GEMINI_API_KEY=your_api_key_here
NODE_ENV=development
```

Start backend:
```bash
npm start
```

Backend: **http://localhost:3000**

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env.local`:
```env
VITE_API_BASE=http://localhost:3000
```

Start frontend:
```bash
npm run dev
```

Frontend: **http://localhost:5173**

---

## 💻 Usage

### Getting Code Reviews

1. Navigate to `http://localhost:5173`
2. Paste your code
3. Select language
4. Click "Get Review"
5. View AI suggestions

### Example

**Input:**
```javascript
function sum(a, b) {
  return a + b;
}
let result = sum("5", 10);
```

**Output:**
```
✓ Good: Simple function
⚠ Type coercion issue
💡 Use TypeScript for safety
```

---

## 🔌 API Endpoints

### POST `/ai/get-review`

**Request:**
```json
{
  "code": "function hello() { console.log('world'); }",
  "language": "javascript"
}
```

**Response:**
```json
{
  "success": true,
  "review": {
    "quality": "Good",
    "suggestions": ["Add JSDoc comments"]
  }
}
```

---

## 🚀 Deployment

### Backend (Render)
1. Push to GitHub
2. Connect to Render
3. Set environment variables
4. Deploy

### Frontend (Vercel)
1. Import frontend folder
2. Set `VITE_API_BASE`
3. Deploy

---

## 🔗 Connect & Support

- **GitHub Profile**: [@Rishi-Rana01](https://github.com/Rishi-Rana01)
- **Report Issues**: [GitHub Issues](https://github.com/Rishi-Rana01/AI-Powered-Code-Reviewer/issues)
- **Email**: rishirana.dev@gmail.com

---

## 📝 License

MIT License

---

**Made with ❤️ by [Rishi Rana](https://github.com/Rishi-Rana01)**
