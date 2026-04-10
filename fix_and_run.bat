@echo off
echo [1/4] Cleaning previous installation...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del /f /q package-lock.json

echo [2/4] Installing dependencies (this may take a few minutes)...
call npm install --legacy-peer-deps

echo [3/4] Installing animation peer dependencies...
call npm install @react-spring/core @react-spring/animated @react-spring/shared @react-spring/three

echo [4/4] Starting the Portfolio Website...
call npm run dev
pause
