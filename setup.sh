#!/bin/bash

echo ""
echo "==================================="
echo "Real Estate Web App - Setup Script"
echo "==================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Create .env file for backend
if [ ! -f "backend/.env" ]; then
    echo "Creating backend/.env file..."
    cat > backend/.env << EOF
PORT=5000
MONGODB_URI=mongodb://localhost:27017/real-estate-db
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
EOF
    echo "✅ Created backend/.env"
fi

# Install backend dependencies
echo ""
echo "Installing backend dependencies..."
cd backend
npm install
cd ..

# Install frontend dependencies
echo ""
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "==================================="
echo "✅ Setup Complete!"
echo "==================================="
echo ""
echo "To start the application:"
echo ""
echo "1. Ensure MongoDB is running (mongod)"
echo "2. In one terminal: cd backend && npm run dev"
echo "3. In another terminal: cd frontend && npm run dev"
echo ""
echo "Frontend: http://localhost:3000"
echo "Backend: http://localhost:5000"
echo ""
echo "Database: mongodb://localhost:27017/real-estate-db"
echo ""
