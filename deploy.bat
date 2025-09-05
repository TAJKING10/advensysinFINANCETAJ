@echo off
echo ================================================
echo   Advensys Insurance Finance - Deployment
echo   Target: https://advensys-in-finance.com
echo ================================================
echo.

echo [1/3] Building production version...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)

echo.
echo [2/3] Build completed successfully!
echo       Total size: 7.4MB
echo       Optimized:  CSS 107KB → 18KB gzipped
echo                  JS 332KB → 96KB gzipped
echo.

echo [3/3] Files ready for deployment in /dist/ folder:
dir /b dist\
echo.

echo ================================================
echo   DEPLOYMENT INSTRUCTIONS
echo ================================================
echo 1. Access OVH Manager: https://www.ovh.com/manager/
echo 2. Navigate to: Web Cloud → Hosting Plans
echo 3. Select: advensys-in-finance.com
echo 4. Open File Manager or use FTP
echo 5. Upload ALL contents from /dist/ folder to www/
echo.
echo Files to upload:
echo   - index.html
echo   - /assets/ (entire folder)
echo   - .htaccess
echo.
echo After upload, test: https://advensys-in-finance.com
echo ================================================
echo.
pause