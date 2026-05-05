# ⚡ Quick Start Guide - Real Estate Web App

## 🚀 Get Running in 5 Minutes

### Prerequisites
- ✅ Node.js installed
- ✅ MongoDB running (local or cloud)

---

## Step 1: Start MongoDB

**Windows:**
```powershell
# MongoDB should run as a service automatically
# If not, open Services app and start MongoDB
```

**macOS:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongodb
```

**Verify it's running:**
```bash
mongosh
# Should show MongoDB shell prompt
exit
```

---

## Step 2: Start Backend Server

Open **Terminal 1** and run:

```bash
cd c:\Users\Admin\Desktop\Projects\RealEstateWebApp\backend
npm run dev
```

Expected output:
```
✅ MongoDB connected successfully
🚀 Server running on http://localhost:5000
```

**Test backend:**
```bash
curl http://localhost:5000/api/health
```

Response should be:
```json
{"status":"Backend is running ✅"}
```

---

## Step 3: Start Frontend

Open **Terminal 2** and run:

```bash
cd c:\Users\Admin\Desktop\Projects\RealEstateWebApp\frontend
npm start
```

Expected output:
```
Compiled successfully!
Local: http://localhost:3000
```

Browser should automatically open to **http://localhost:3000**

---

## Step 4: Test the App

### Create a Test Account

1. Click **"Register here"** link
2. Fill in details:
   - Username: `testuser1`
   - Email: `test@example.com`
   - Password: `password123`
   - Role: `BUYER`
3. Click **Register**
4. You'll be logged in automatically

### View Properties

- You should see the dashboard
- Click **"View Properties"** (it will be empty initially)

### Add Sample Property (as Seller)

Register as SELLER first:
1. Register new account with role: SELLER
2. Login as seller
3. Click **"Add Property"**
4. Fill in:
   - Title: `Beautiful 3-BHK House`
   - Price: `500000`
   - Location: `Downtown`
   - Bedrooms: `3`
   - Bathrooms: `2`
   - Square Feet: `2000`
   - Property Type: `HOUSE`
5. Click **Add Property**

### View Properties as Buyer

1. Login as BUYER account
2. Go to **"View Properties"**
3. Should see the property you just added!

---

## 🔗 URLs

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend | http://localhost:5000 |
| API Health | http://localhost:5000/api/health |
| MongoDB | localhost:27017 |

---

## 📝 API Examples

### Register User
```bash
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john",
    "email": "john@example.com",
    "password": "password123",
    "role": "BUYER"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john",
    "password": "password123"
  }'
```

### Get All Properties
```bash
curl http://localhost:5000/api/properties
```

### Search Properties
```bash
curl "http://localhost:5000/api/properties/search/query?location=Downtown&minPrice=100000&maxPrice=600000"
```

---

## ⚠️ Troubleshooting

| Problem | Solution |
|---------|----------|
| **Port 5000 in use** | `netstat -ano \| findstr :5000` then kill process |
| **Port 3000 in use** | `netstat -ano \| findstr :3000` then kill process |
| **MongoDB not connecting** | Check if `mongod` is running |
| **CORS error** | Ensure backend is on port 5000 |
| **Can't login** | Clear browser cache (Ctrl+Shift+Del) |
| **Blank page** | Check browser console (F12) for errors |

---

## 💡 Tips

- 🔐 Each user is unique (username & email)
- 🏠 Only SELLER role can add properties
- 📅 BUYER role can book properties for viewing
- 🔑 Tokens expire after 7 days (in .env)
- 💾 All data persists in MongoDB

---

## Next Steps

1. ✅ Test all features (add, view, search, book)
2. 📊 Add more properties
3. 🔧 Customize UI in `frontend/src/components/`
4. 🚀 Deploy to cloud (Azure, Heroku, etc.)

---

**Happy coding! 🎉**
