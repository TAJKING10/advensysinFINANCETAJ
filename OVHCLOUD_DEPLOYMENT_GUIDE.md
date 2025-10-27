# 🚀 OVHcloud Deployment Guide for advensys-in-finance.com

## 📦 What to Upload to OVHcloud

Upload **ALL** contents from the `dist` folder to your OVHcloud web hosting.

### Files to Upload:
```
dist/
├── .htaccess                    (IMPORTANT - Created for you!)
├── index.html                   (Main HTML file)
├── robots.txt                   (SEO - Search engine instructions)
├── sitemap.xml                  (SEO - Site structure for Google)
├── f8c3de3d798f4fba8e5a2d85b3c9c4e1.txt  (Verification file)
└── assets/                      (Folder with all images, CSS, JS)
    ├── All images (.png, .svg, .jpg)
    ├── index-0LVvyHBk.js       (Main JavaScript)
    ├── index-Rc8Dp7_W.css      (Stylesheets)
    ├── translations-CDN69fFZ.js (Language files)
    └── vendor-BWTqOkCc.js       (React libraries)
```

---

## 📋 Step-by-Step Deployment to OVHcloud

### **Step 1: Access OVHcloud FTP**

1. Log in to your OVHcloud Control Panel: https://www.ovh.com/manager/
2. Go to **Web Cloud** → **Hosting Plans**
3. Select your hosting plan for `advensys-in-finance.com`
4. Click on **FTP - SSH** tab
5. Note down your FTP credentials:
   - **FTP Server:** ftp.advensys-in-finance.com (or cluster0XX.hosting.ovh.net)
   - **FTP Login:** Your username
   - **Password:** Your FTP password

---

### **Step 2: Connect via FTP Client**

**Option A: Using FileZilla (Recommended)**

1. Download FileZilla: https://filezilla-project.org/
2. Open FileZilla
3. Enter connection details:
   - **Host:** ftp.advensys-in-finance.com
   - **Username:** Your FTP username
   - **Password:** Your FTP password
   - **Port:** 21
4. Click **Quickconnect**

**Option B: Using OVHcloud FTP Explorer**

1. In OVHcloud Control Panel, go to **FTP - SSH** tab
2. Click **FTP Explorer** button
3. Login with your credentials

---

### **Step 3: Upload Files**

1. **Navigate to the correct folder on server:**
   - Look for folder named `www` or `public_html`
   - This is where your website files go

2. **IMPORTANT - Clear existing files:**
   - Delete old files in `www` or `public_html` folder (if any exist)
   - Keep only `.htpasswd` or `.ovhconfig` files if they exist

3. **Upload ALL files from your `dist` folder:**
   - Select ALL files from `C:\Users\Toufi\AndroidStudioProjects\advensysinFINANCETAJ11\dist`
   - Drag and drop to the `www` or `public_html` folder
   - Make sure to upload:
     ✅ .htaccess (CRITICAL!)
     ✅ index.html
     ✅ robots.txt
     ✅ sitemap.xml
     ✅ f8c3de3d798f4fba8e5a2d85b3c9c4e1.txt
     ✅ assets folder (with all contents)

4. **Verify .htaccess uploaded correctly:**
   - Enable "Show hidden files" in FileZilla (Server → Force show hidden files)
   - Confirm `.htaccess` file is visible on the server

---

### **Step 4: Configure SSL (HTTPS)**

1. In OVHcloud Control Panel
2. Go to **Hosting Plans** → Your hosting
3. Click **SSL** tab
4. Enable **Let's Encrypt SSL Certificate** (Free)
5. Wait 5-10 minutes for SSL activation

---

### **Step 5: Verify Domain DNS**

1. Go to **Domain names** section in OVHcloud
2. Select `advensys-in-finance.com`
3. Click **DNS Zone** tab
4. Verify these records exist:

```
Type    Name    Target/Value
A       @       [Your hosting IP]
CNAME   www     advensys-in-finance.com.
```

If not correct, edit and wait 4-24 hours for DNS propagation.

---

## ✅ Post-Deployment Verification

### **Immediately After Upload:**

1. **Visit your website:**
   - https://advensys-in-finance.com
   - https://www.advensys-in-finance.com (should redirect to non-www)

2. **Test all pages:**
   - Home page: `/`
   - About: `/about`
   - Services: `/services`
   - Contact: `/contact`
   - Service pages: `/services/broker-in-bank`

3. **Test language switching:**
   - Click language selector
   - Switch between English, French, Swedish
   - Verify all content changes

4. **Test mobile responsiveness:**
   - Open on mobile device
   - Check all pages load correctly

5. **Verify SEO files:**
   - Visit: https://advensys-in-finance.com/robots.txt
   - Visit: https://advensys-in-finance.com/sitemap.xml
   - Both should display correctly

---

## 🔍 SEO Setup (After Website is Live)

### **1. Google Search Console (CRITICAL)**

1. Go to: https://search.google.com/search-console
2. Click **Add Property**
3. Enter: `advensys-in-finance.com`
4. Verify ownership using HTML file method:
   - Upload verification file to your `www` folder
5. Once verified, **submit your sitemap:**
   - Click **Sitemaps** in left menu
   - Enter: `sitemap.xml`
   - Click **Submit**

### **2. Google Business Profile**

1. Go to: https://www.google.com/business/
2. Create profile for your Luxembourg office
3. Add business name, address, phone, website
4. Verify your business

### **3. Bing Webmaster Tools**

1. Go to: https://www.bing.com/webmasters
2. Add your site
3. Submit sitemap: `https://advensys-in-finance.com/sitemap.xml`

---

## 📊 Performance Monitoring

### **Tools to Check Website Health:**

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Test: `advensys-in-finance.com`

2. **SSL Checker**
   - https://www.ssllabs.com/ssltest/
   - Test: `advensys-in-finance.com`

3. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly
   - Test: `advensys-in-finance.com`

---

## 🐛 Troubleshooting

### **Issue: Pages show 404 error**
- **Solution:** Verify `.htaccess` file uploaded correctly
- Enable "Show hidden files" in FTP client
- Re-upload `.htaccess` file

### **Issue: Site not redirecting to HTTPS**
- **Solution:** Wait 10 minutes after SSL activation
- Clear browser cache
- Check SSL certificate in OVHcloud panel

### **Issue: Images not loading**
- **Solution:** Verify entire `assets` folder uploaded
- Check file permissions (should be 644 for files, 755 for folders)

### **Issue: Language switching not working**
- **Solution:** Hard refresh browser (Ctrl + F5)
- Clear browser cache
- Verify all JavaScript files uploaded

---

## 📞 Support

### **OVHcloud Support:**
- Phone: Check your country's OVHcloud support number
- Help: https://help.ovhcloud.com/
- Guides: https://docs.ovh.com/

### **Website Issues:**
- Check browser console for errors (F12 → Console tab)
- Verify all files uploaded correctly via FTP

---

## ✨ Final Checklist Before Going Live

- [ ] All files from `dist` folder uploaded
- [ ] `.htaccess` file present and visible on server
- [ ] SSL certificate activated (HTTPS working)
- [ ] Domain DNS pointing to correct hosting
- [ ] All pages accessible and loading
- [ ] Language switching working (EN/FR/SV)
- [ ] Mobile responsive design working
- [ ] Contact form working
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible
- [ ] Google Search Console configured
- [ ] Sitemap submitted to Google

---

## 🎉 Congratulations!

Your website is now live and optimized for search engines!

**Expected Timeline:**
- Website live: Immediately after upload
- Google indexing: 1-7 days (submit sitemap to speed up)
- Full SEO ranking: 2-4 weeks
- ChatGPT browsing: Works immediately (when someone asks directly)

---

**Need Help?** Check the troubleshooting section or contact OVHcloud support.
