# 🚀 Installation & Run Guide

## Step 1: Install MongoDB

### Windows
1. Download MongoDB from: https://www.mongodb.com/try/download/community
2. Run the installer and follow the setup wizard
3. Keep all defaults, click "Install"
4. MongoDB will be installed as a service

**Start MongoDB:**
```bash
# MongoDB should start automatically
# Or start manually via Services app
```

### macOS
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux (Ubuntu)
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

**Verify MongoDB is running:**
```bash
mongosh
# You should see MongoDB shell prompt
exit
```

---

## Step 2: Setup Backend & Frontend

### Windows PowerShell / Command Prompt

```bash
# Navigate to project root
cd c:\Users\Admin\Desktop\Projects\RealEstateWebApp

# Run setup script (creates .env and installs dependencies)
setup.bat
```

### macOS / Linux

```bash
cd ~/Desktop/Projects/RealEstateWebApp
chmod +x setup.sh
./setup.sh
```

---

## Step 3: Start the Application

### Terminal 1 - Start Backend

```bash
cd c:\Users\Admin\Desktop\Projects\RealEstateWebApp\backend
npm run dev
```

Expected output:
```
✅ MongoDB connected successfully
🚀 Server running on http://localhost:5000
```

### Terminal 2 - Start Frontend

```bash
cd c:\Users\Admin\Desktop\Projects\RealEstateWebApp\frontend
npm run dev
```

Expected output:
```
Compiled successfully!
Local: http://localhost:3000
```

---

## Step 4: Access the Application

Open in browser: **http://localhost:3000**

### Create Test Accounts:

**Seller Account:**
- Register new account with role: SELLER
- Username: seller1
- Email: seller@test.com
- Password: password123

**Buyer Account:**
- Register new account with role: BUYER
- Username: buyer1
- Email: buyer@test.com
- Password: password123

---

## Common Issues & Solutions

### ❌ MongoDB Connection Error

**Problem:** "connect ECONNREFUSED 127.0.0.1:27017"

**Solution:**
```bash
# Check if MongoDB is running
# Windows: Check Services app for MongoDB
# macOS: brew services list | grep mongo
# Linux: sudo systemctl status mongodb

# Restart MongoDB
# Windows: net stop MongoDB && net start MongoDB
# macOS: brew services restart mongodb-community
# Linux: sudo systemctl restart mongodb
```

### ❌ Port Already in Use

**Problem:** "Port 5000 is already in use"

**Solution - Windows:**
```powershell
# Find process on port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID with actual number)
taskkill /PID [PID] /F
```

**Solution - macOS/Linux:**
```bash
lsof -i :5000
kill -9 [PID]
```

### ❌ npm install fails

**Problem:** "npm: command not found"

**Solution:** Install Node.js from https://nodejs.org/

---

## Performance Tips

1. **Keep MongoDB running** - Don't close the MongoDB terminal
2. **Clear Browser Cache** - F12 > Storage > Clear Site Data
3. **Check Network** - Open DevTools (F12) to see API calls
4. **Restart if needed** - Kill both servers and restart

---

## Using Docker (Alternative)

```bash
# Requires Docker Desktop installed

docker-compose up --build

# Access:
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
# MongoDB: localhost:27017
```

---

## Environment Variables

Backend `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/real-estate-db
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

For MongoDB Atlas (cloud):
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/real-estate-db
```

---

## Verify Everything is Working

1. ✅ Backend running: `curl http://localhost:5000/api/health`
2. ✅ Frontend running: Open `http://localhost:3000`
3. ✅ MongoDB connected: Check backend logs
4. ✅ Can register: Create new account
5. ✅ Can login: Login with created account

---

**Need Help?** Check the main README.md for more details!
