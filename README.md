# 🏠 Real Estate Web Application

A complete full-stack Real Estate management system built with Node.js/Express, React, and MongoDB.

## 📋 Features

✅ **User Authentication** - Register, Login with role-based access (Admin, Seller, Buyer)
✅ **Property Management** - Sellers can add, edit, delete properties
✅ **Property Search** - Buyers can search by location, price range
✅ **Booking System** - Buyers can book property viewings
✅ **Responsive UI** - Built with React and TailwindCSS
✅ **Secure API** - JWT authentication, password hashing with bcrypt
✅ **MongoDB** - Cloud database for persistent storage

## 🏗️ Project Structure

```
RealEstateWebApp/
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── middleware/      # Authentication & authorization
│   ├── server.js        # Express server
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── components/  # React components
    │   ├── api.js       # API client
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── public/
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- npm or yarn

### 1️⃣ MongoDB Setup

**Option A: Local MongoDB**
```bash
# Install MongoDB Community
# Windows: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
# macOS: brew install mongodb-community
# Linux: Follow MongoDB official docs

# Start MongoDB
mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/real-estate-db`

### 2️⃣ Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Update .env with your MongoDB URI
# MONGODB_URI=mongodb://localhost:27017/real-estate-db
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/real-estate-db

# Start backend server
npm run dev
# Server will run on http://localhost:5000
```

### 3️⃣ Frontend Setup (New Terminal)

```bash
cd frontend

# Install dependencies
npm install

# Start React app
npm run dev
# App will open on http://localhost:3000
```

## 📝 API Endpoints

### Authentication
- `POST /api/users/register` - Create new user
- `POST /api/users/login` - Login user
- `GET /api/users/me` - Get current user (protected)

### Properties
- `GET /api/properties` - Get all properties
- `GET /api/properties/:id` - Get property details
- `POST /api/properties` - Create property (Seller only)
- `PUT /api/properties/:id` - Update property (Seller only)
- `DELETE /api/properties/:id` - Delete property (Seller only)
- `GET /api/properties/search/query` - Search properties

### Bookings
- `GET /api/bookings` - Get user bookings (protected)
- `POST /api/bookings` - Create booking (Buyer only)
- `PUT /api/bookings/:id` - Update booking status
- `DELETE /api/bookings/:id` - Cancel booking

## 👥 User Roles

| Role   | Permissions                              |
|--------|------------------------------------------|
| ADMIN  | View all properties & bookings           |
| SELLER | Add/Edit/Delete properties               |
| BUYER  | View properties, Search, Create bookings |

## 🧪 Test Accounts

After starting the app, create test accounts:

**Seller Account:**
- Username: seller1
- Email: seller@example.com
- Password: password123
- Role: SELLER

**Buyer Account:**
- Username: buyer1
- Email: buyer@example.com
- Password: password123
- Role: BUYER

## 🐳 Docker Setup (Optional)

```bash
# Build and run with Docker Compose
docker-compose up --build

# Backend: http://localhost:5000
# Frontend: http://localhost:3000
# MongoDB: localhost:27017
```

## 📦 Dependencies

### Backend
- express - Web framework
- mongoose - MongoDB ORM
- jsonwebtoken - JWT authentication
- bcryptjs - Password hashing
- dotenv - Environment variables

### Frontend
- react - UI library
- react-router-dom - Routing
- axios - HTTP client
- tailwindcss - CSS framework

## 🔒 Security Features

- JWT token-based authentication
- Bcrypt password hashing
- Role-based access control (RBAC)
- CORS enabled
- Input validation

## 🐛 Troubleshooting

### MongoDB Connection Failed
- Ensure MongoDB is running: `mongod`
- Check connection string in `.env`
- For Atlas, whitelist your IP

### Port Already in Use
```bash
# Change ports in .env (backend) or create-react-app config
# Kill process on port 5000: netstat -ano | findstr :5000 (Windows)
# Kill process on port 3000: netstat -ano | findstr :3000 (Windows)
```

### CORS Error
- Ensure backend is running on http://localhost:5000
- Check `server.js` CORS configuration

## 📈 Next Steps

- Add property image uploads
- Email notifications
- Payment integration
- Reviews & ratings
- Advanced search filters
- Admin dashboard

## 📞 Support

For issues, check:
1. MongoDB connection
2. Backend running on port 5000
3. Frontend running on port 3000
4. All dependencies installed: `npm install`

---

Live Demo: https://luxury-kleicha-5d45fd.netlify.app/login
GitHub: https://github.com/Sidharth1914/Real-Estate-WebApp

**Happy coding! 🚀**
