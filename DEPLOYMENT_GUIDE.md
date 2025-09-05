# 🚀 Advensys Insurance Finance - OVH Cloud Deployment Guide

## 📋 Pre-Deployment Checklist

✅ **Production Build:** Complete - optimized for performance  
✅ **Assets:** All images, icons, and files included in `/dist/assets/`  
✅ **Email Service:** EmailJS configured with production credentials  
✅ **Routing:** SPA routing configured with `.htaccess`  
✅ **Security:** Security headers and HTTPS redirect configured  
✅ **SEO:** Meta tags and Open Graph tags included  

## 🌐 Deployment to OVH Cloud (advensys-in-finance.com)

### Step 1: Prepare Files for Upload

The production-ready files are located in the `/dist/` folder:
- `index.html` - Main entry point
- `/assets/` - All optimized CSS, JS, and media files
- `.htaccess` - Server configuration for routing and performance

### Step 2: Upload via OVH Control Panel

1. **Login to OVH Manager**: https://www.ovh.com/manager/
2. **Navigate to**: Web Cloud → Hosting Plans → advensys-in-finance.com
3. **Access File Manager** or use FTP credentials

### Step 3: Upload Files

**Option A: Via OVH File Manager**
1. Select "File Manager" in your hosting control panel
2. Navigate to the `www/` or `public_html/` directory
3. Delete existing files (backup first if needed)
4. Upload ALL contents from your `/dist/` folder:
   - `index.html`
   - `/assets/` folder (entire directory)
   - `.htaccess`

**Option B: Via FTP Client (FileZilla, etc.)**
```
FTP Settings:
- Server: ftp.advensys-in-finance.com (or provided by OVH)
- Port: 21
- Username: [Your OVH FTP username]
- Password: [Your OVH FTP password]
```

Upload all `/dist/` contents to the root web directory.

### Step 4: Verify Domain Configuration

Ensure your domain `advensys-in-finance.com` points to your OVH hosting:
- DNS A record should point to OVH server IP
- CNAME for `www` should redirect to main domain

### Step 5: Enable HTTPS/SSL

1. In OVH Manager, go to "SSL certificates"
2. Enable "Let's Encrypt" SSL (free) or upload custom certificate
3. The `.htaccess` file will automatically redirect HTTP → HTTPS

## 🔧 Technical Specifications

### Build Optimization
- **CSS:** 107KB → 18KB gzipped (83% reduction)
- **JavaScript:** 
  - Main bundle: 332KB → 96KB gzipped (71% reduction)
  - Language chunks: 32-37KB → 8-10KB gzipped
- **Assets:** All images and icons optimized
- **Total size:** ~500KB gzipped (excellent for performance)

### Language Support
- **French (FR):** Complete localization
- **English (EN):** Complete localization  
- **Swedish (SE):** Complete localization
- **Dynamic loading:** Language files loaded on demand

### Email Functionality
- **Service:** EmailJS configured
- **Forms:** Contact form will work immediately
- **No server-side code required**

### SEO & Performance
- **Meta tags:** Complete SEO optimization
- **Open Graph:** Social media sharing configured
- **Caching:** Browser caching enabled via `.htaccess`
- **Compression:** Gzip compression enabled
- **Security:** Security headers configured

## 🌍 Post-Deployment Testing

After uploading, test these URLs:

1. **Main site:** https://advensys-in-finance.com
2. **Language switching:** Test FR/EN/SE switching
3. **Pages:** /about, /services, /contact, /news
4. **Forms:** Submit a test contact form
5. **Mobile:** Test responsive design on mobile devices

## 🔒 Security Features

- ✅ HTTPS enforcement
- ✅ XSS protection headers
- ✅ Content type nosniff
- ✅ Frame options protection
- ✅ Hidden file protection

## 📱 Features Verified

- ✅ **Multi-language support** (FR/EN/SE)
- ✅ **Contact form** with EmailJS
- ✅ **Responsive design** for all devices
- ✅ **Video integration** with correct YouTube links
- ✅ **Social media links** (Facebook AIF, YouTube, LinkedIn)
- ✅ **Service pages** with accurate business content
- ✅ **Professional presentation** matching functional testing requirements

## 🆘 Troubleshooting

**If pages show 404 errors:**
- Verify `.htaccess` file was uploaded correctly
- Check file permissions (755 for folders, 644 for files)

**If contact form doesn't work:**
- EmailJS is configured and should work immediately
- Check browser console for any JavaScript errors

**If images don't load:**
- Verify `/assets/` folder was uploaded completely
- Check file paths are correct (should be `/assets/filename`)

## 📞 Support

After deployment, the website will be fully functional at:
**https://advensys-in-finance.com**

All functional testing report requirements have been implemented and verified. The website is ready for production use with professional quality and performance optimization.