# 📚 API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require JWT token in header:
```
Authorization: Bearer <token>
```

---

## 👤 Users Endpoints

### Register User
```http
POST /users/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "BUYER"  // ADMIN, SELLER, or BUYER
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "john_doe",
    "email": "john@example.com",
    "role": "BUYER"
  }
}
```

### Login
```http
POST /users/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "john_doe",
    "email": "john@example.com",
    "role": "BUYER"
  }
}
```

### Get Current User
```http
GET /users/me
Authorization: Bearer <token>
```

### Update User Profile
```http
PUT /users/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "phone": "555-1234",
  "address": "123 Main St"
}
```

---

## 🏠 Properties Endpoints

### Get All Properties
```http
GET /properties
```

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Beautiful House",
    "price": 500000,
    "location": "Downtown",
    "bedrooms": 3,
    "bathrooms": 2,
    "squareFeet": 2000,
    "propertyType": "HOUSE",
    "seller": {
      "_id": "507f1f77bcf86cd799439012",
      "username": "seller1"
    },
    "available": true,
    "createdAt": "2026-04-27T10:43:00Z"
  }
]
```

### Get Property by ID
```http
GET /properties/:id
```

### Create Property (SELLER only)
```http
POST /properties
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Modern Apartment",
  "description": "Spacious 2-bedroom apartment",
  "price": 350000,
  "location": "Uptown",
  "bedrooms": 2,
  "bathrooms": 1,
  "squareFeet": 1200,
  "propertyType": "APARTMENT",
  "amenities": ["Parking", "Garden", "Pool"]
}
```

### Update Property (SELLER only)
```http
PUT /properties/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "price": 375000,
  "available": true
}
```

### Delete Property (SELLER only)
```http
DELETE /properties/:id
Authorization: Bearer <token>
```

### Search Properties
```http
GET /properties/search/query?location=Downtown&minPrice=100000&maxPrice=600000
```

**Query Parameters:**
- `location` - Search by location (partial match)
- `minPrice` - Minimum price
- `maxPrice` - Maximum price
- `propertyType` - HOUSE, APARTMENT, COMMERCIAL, LAND

---

## 📅 Bookings Endpoints

### Get All Bookings (protected)
```http
GET /bookings
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439013",
    "property": {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Beautiful House"
    },
    "buyer": {
      "_id": "507f1f77bcf86cd799439012",
      "username": "buyer1"
    },
    "bookingDate": "2026-04-27T10:43:00Z",
    "visitDate": "2026-05-01T14:00:00Z",
    "status": "PENDING",
    "notes": "Interested in viewing"
  }
]
```

### Create Booking (BUYER only)
```http
POST /bookings
Authorization: Bearer <token>
Content-Type: application/json

{
  "propertyId": "507f1f77bcf86cd799439011",
  "visitDate": "2026-05-01T14:00:00Z",
  "notes": "Want to visit on Tuesday afternoon"
}
```

### Update Booking Status
```http
PUT /bookings/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "CONFIRMED"  // PENDING, CONFIRMED, CANCELLED, COMPLETED
}
```

### Cancel Booking
```http
DELETE /bookings/:id
Authorization: Bearer <token>
```

---

## 🔍 Error Responses

### 400 Bad Request
```json
{
  "error": "All fields are required"
}
```

### 401 Unauthorized
```json
{
  "error": "Invalid credentials"
}
```

### 403 Forbidden
```json
{
  "error": "Unauthorized access"
}
```

### 404 Not Found
```json
{
  "error": "Property not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Server error message"
}
```

---

## 🧪 Testing with cURL

### Get All Properties
```bash
curl http://localhost:5000/api/properties
```

### Register New User
```bash
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "username":"testuser",
    "email":"test@example.com",
    "password":"password123",
    "role":"BUYER"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "username":"testuser",
    "password":"password123"
  }'
```

### Get Current User (with token)
```bash
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \
  http://localhost:5000/api/users/me
```

---

## 📊 Data Models

### User
```javascript
{
  id: ObjectId,
  username: String (unique),
  email: String (unique),
  password: String (hashed),
  role: String (ADMIN, SELLER, BUYER),
  phone: String,
  address: String,
  createdAt: Date
}
```

### Property
```javascript
{
  id: ObjectId,
  title: String,
  description: String,
  price: Number,
  location: String,
  bedrooms: Number,
  bathrooms: Number,
  squareFeet: Number,
  propertyType: String (HOUSE, APARTMENT, COMMERCIAL, LAND),
  seller: ObjectId (User),
  images: [String],
  amenities: [String],
  available: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Booking
```javascript
{
  id: ObjectId,
  property: ObjectId (Property),
  buyer: ObjectId (User),
  bookingDate: Date,
  visitDate: Date,
  status: String (PENDING, CONFIRMED, CANCELLED, COMPLETED),
  notes: String,
  createdAt: Date
}
```

---

## 🔐 Authentication Flow

1. User registers or logs in
2. Server returns JWT token
3. Store token in localStorage
4. Include token in Authorization header for all requests
5. Token expires after 7 days

---

For more examples, check [QUICKSTART.md](QUICKSTART.md)
