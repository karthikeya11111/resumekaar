# ResumeKaar - MERN Resume Builder

A full-stack application for creating and managing resumes with multiple templates.

## Tech Stack

- **Frontend**: React 19 + Vite + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT

## Project Structure

```
.
├── backend/          # Express API server
├── frontend/         # React Vite app
├── docker-compose.yml
├── render.yaml       # Render deployment config
└── README.md
```

---

## Local Development

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB Atlas account (already configured)

### Setup

1. **Clone and install dependencies**

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

2. **Configure environment variables**

Backend (`backend/.env`):
```env
MONGODB_URI=mongodb+srv://admin:Karthikeya%409217@cluster0.utdmesx.mongodb.net/?appName=Cluster0
PORT=8000
JWT_SECRET=hexa
NODE_ENV=development
```

Frontend (`frontend/.env`):
```env
VITE_API_URL=http://localhost:8000
```

3. **Start development servers**

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend (in another terminal):**
```bash
cd frontend
npm run dev
```

Frontend runs on `http://localhost:5173/`
Backend API on `http://localhost:8000/`

---

## Deployment

### Option 1: Docker Compose (Local)

Build and run both services locally with Docker:

```bash
docker-compose up --build
```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000`

### Option 2: Render.com (Recommended)

Render.com provides free hosting for both backend and frontend.

1. **Push to GitHub**

```bash
git add .
git commit -m "Add deployment configs"
git push origin main
```

2. **Deploy with render.yaml**

Go to [render.com](https://render.com)

- Connect your GitHub repository
- Select this repo
- Click "Create New" > "Blueprint"
- Render will auto-detect `render.yaml` and deploy both services

**Or manually:**

#### Backend Service
- Create new "Web Service"
- GitHub: select this repo
- Root directory: `backend`
- Build command: `npm install`
- Start command: `node server.js`
- Environment variables:
  - `MONGODB_URI`: (paste your MongoDB URI)
  - `JWT_SECRET`: (choose a strong secret)
  - `NODE_ENV`: `production`

#### Frontend Service
- Create new "Static Site"
- GitHub: select this repo
- Root directory: `frontend`
- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Environment variables:
  - `VITE_API_URL`: (set to your backend URL, e.g., `https://resumekaar-backend.onrender.com`)

### Option 3: Vercel (Frontend only)

Vercel is great for static frontend hosting.

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure project:
   - Root directory: `frontend`
   - Build command: `npm install && npm run build`
   - Output directory: `dist`
4. Environment variables:
   - `VITE_API_URL`: (set to your backend URL)

### Option 4: Netlify (Frontend only)

1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub
3. Configure:
   - Base directory: `frontend`
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
4. Add environment variable:
   - `VITE_API_URL`: (your backend URL)

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get logged-in user profile
- `POST /api/auth/upload-image` - Upload profile image

### Resumes
- `POST /api/resume/create` - Create new resume
- `GET /api/resume` - Get all resumes
- `GET /api/resume/:id` - Get single resume
- `PUT /api/resume/:id` - Update resume
- `DELETE /api/resume/:id` - Delete resume
- `POST /api/resume/:id/upload-images` - Upload resume images

---

## Environment Variables Reference

### Backend (.env)
| Variable | Example | Required |
|----------|---------|----------|
| `MONGODB_URI` | `mongodb+srv://...` | Yes |
| `PORT` | `8000` | No (default: 8000) |
| `JWT_SECRET` | `your_secret` | Yes |
| `NODE_ENV` | `production` | No |

### Frontend (.env)
| Variable | Example | Required |
|----------|---------|----------|
| `VITE_API_URL` | `http://localhost:8000` | No (default: localhost:8000) |

---

## Production Checklist

- [ ] Update `VITE_API_URL` in frontend with production backend URL
- [ ] Use strong `JWT_SECRET` in production
- [ ] Set `NODE_ENV=production` on backend
- [ ] MongoDB Atlas connection is active
- [ ] CORS is configured correctly (check backend)
- [ ] `.env` files are in `.gitignore`
- [ ] Test login/resume creation on deployed site

---

## Troubleshooting

**Frontend can't connect to backend**
- Check `VITE_API_URL` env variable
- Verify backend is running and accessible
- Check CORS settings in `backend/server.js`

**MongoDB connection fails**
- Verify `MONGODB_URI` is correct
- Check IP whitelist in MongoDB Atlas
- Ensure `.env` file is in backend root

**Build fails**
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 18+)

---

## Scripts

### Backend
- `npm run dev` - Start with nodemon (development)
- `npm start` - Start production server

### Frontend
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## License

ISC

---

## Contact

For issues, create a GitHub issue or contact the maintainer.
