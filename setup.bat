@echo off
REM Setup and Run Real Estate App

echo.
echo ===================================
echo Real Estate Web App - Setup Script
echo ===================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    exit /b 1
)

echo ✅ Node.js found: %NODE_VERSION%

REM Create .env file for backend
if not exist "backend\.env" (
    echo Creating backend\.env file...
    (
        echo PORT=5000
        echo MONGODB_URI=mongodb://localhost:27017/real-estate-db
        echo JWT_SECRET=your_jwt_secret_key_change_this_in_production
        echo NODE_ENV=development
    ) > backend\.env
    echo ✅ Created backend\.env
)

REM Install backend dependencies
echo.
echo Installing backend dependencies...
cd backend
call npm install
cd ..

REM Install frontend dependencies
echo.
echo Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo.
echo ===================================
echo ✅ Setup Complete!
echo ===================================
echo.
echo To start the application:
echo.
echo 1. Ensure MongoDB is running (mongod)
echo 2. In one terminal: cd backend && npm run dev
echo 3. In another terminal: cd frontend && npm run dev
echo.
echo Frontend: http://localhost:3000
echo Backend: http://localhost:5000
echo.
echo Database: mongodb://localhost:27017/real-estate-db
echo.
