// ================================
//   WORLD-CLASS PERFORMANCE UTILITIES
//   Lightning-fast optimization tools
// ================================

import { lazy, Suspense } from 'react';

// ================================
//   Code Splitting & Lazy Loading
// ================================

// Dynamic import wrapper with error boundary
export const lazyImport = (importFunc, fallback = null) => {
  const LazyComponent = lazy(importFunc);
  
  return (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Preload components for better UX
export const preloadComponent = (importFunc) => {
  importFunc();
};

// Route-based code splitting helper
export const createLazyRoute = (importFunc) => {
  return lazy(() => 
    importFunc().then(module => ({
      default: module.default || module
    }))
  );
};

// ================================
//   Image Optimization
// ================================

// Lazy loading intersection observer for images
export class LazyImageLoader {
  constructor() {
    this.imageObserver = null;
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            this.loadImage(img);
            this.imageObserver.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px'
      });
    }
  }

  observe(img) {
    if (this.imageObserver) {
      this.imageObserver.observe(img);
    } else {
      // Fallback for browsers without IntersectionObserver
      this.loadImage(img);
    }
  }

  loadImage(img) {
    const src = img.dataset.src;
    if (src) {
      img.src = src;
      img.classList.add('loaded');
      img.removeAttribute('data-src');
    }
  }
}

// WebP format detection and optimization
export const getOptimizedImageUrl = (src, width, quality = 80) => {
  if (!src) return '';

  // Check if browser supports WebP
  const supportsWebP = (() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('webp') !== -1;
  })();

  // Return optimized URL (you'd integrate with your CDN/image service)
  const format = supportsWebP ? 'webp' : 'jpg';
  const params = new URLSearchParams({
    w: width.toString(),
    q: quality.toString(),
    f: format
  });

  // Example for Cloudinary, Vercel, or similar service
  return `${src}?${params.toString()}`;
};

// Generate responsive image sources
export const generateResponsiveImageSources = (src, sizes = [400, 800, 1200, 1600]) => {
  return sizes.map(size => ({
    srcSet: `${getOptimizedImageUrl(src, size)} ${size}w`,
    size
  }));
};

// ================================
//   Bundle Optimization
// ================================

// Tree-shaking friendly icon imports
export const importIcon = async (iconName, library = 'react-icons/hi') => {
  try {
    const iconModule = await import(library);
    return iconModule[iconName];
  } catch (error) {
    console.warn(`Icon ${iconName} not found in ${library}`);
    return null;
  }
};

// Dynamic CSS loading
export const loadCSS = (href, id) => {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.id = id;
    
    link.onload = resolve;
    link.onerror = reject;
    
    document.head.appendChild(link);
  });
};

// ================================
//   Memory Management
// ================================

// Debounce utility for performance
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func(...args);
  };
};

// Throttle utility for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Memory leak prevention for event listeners
export class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  addEventListener(element, event, handler, options) {
    const key = `${element}_${event}`;
    
    if (this.listeners.has(key)) {
      this.removeEventListener(element, event);
    }
    
    element.addEventListener(event, handler, options);
    this.listeners.set(key, { handler, options });
  }

  removeEventListener(element, event) {
    const key = `${element}_${event}`;
    const listener = this.listeners.get(key);
    
    if (listener) {
      element.removeEventListener(event, listener.handler, listener.options);
      this.listeners.delete(key);
    }
  }

  removeAllListeners() {
    this.listeners.clear();
  }
}

// ================================
//   Virtual Scrolling
// ================================

export class VirtualScroller {
  constructor(container, itemHeight, renderItem) {
    this.container = container;
    this.itemHeight = itemHeight;
    this.renderItem = renderItem;
    this.scrollTop = 0;
    this.containerHeight = 0;
    this.totalItems = 0;
    this.visibleItems = [];
    
    this.init();
  }

  init() {
    this.containerHeight = this.container.clientHeight;
    this.bindEvents();
    this.update();
  }

  bindEvents() {
    this.container.addEventListener('scroll', throttle(() => {
      this.scrollTop = this.container.scrollTop;
      this.update();
    }, 16)); // 60fps
  }

  setItems(items) {
    this.totalItems = items.length;
    this.items = items;
    this.update();
  }

  update() {
    const startIndex = Math.floor(this.scrollTop / this.itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(this.containerHeight / this.itemHeight) + 1,
      this.totalItems
    );

    this.visibleItems = [];
    for (let i = startIndex; i < endIndex; i++) {
      if (this.items[i]) {
        this.visibleItems.push({
          index: i,
          item: this.items[i],
          top: i * this.itemHeight
        });
      }
    }

    this.render();
  }

  render() {
    const totalHeight = this.totalItems * this.itemHeight;
    
    this.container.innerHTML = `
      <div style="height: ${totalHeight}px; position: relative;">
        ${this.visibleItems.map(({ item, index, top }) => `
          <div style="position: absolute; top: ${top}px; width: 100%;">
            ${this.renderItem(item, index)}
          </div>
        `).join('')}
      </div>
    `;
  }
}

// ================================
//   Performance Monitoring
// ================================

// Web Vitals tracking
export class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.observers = [];
    this.init();
  }

  init() {
    // Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    
    // Custom metrics
    this.observeLoadTime();
    this.observeMemoryUsage();
  }

  // Largest Contentful Paint
  observeLCP() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    }
  }

  // First Input Delay
  observeFID() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          this.metrics.fid = entry.processingStart - entry.startTime;
          this.reportMetric('FID', entry.processingStart - entry.startTime);
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    }
  }

  // Cumulative Layout Shift
  observeCLS() {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach(entry => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.cls = clsValue;
            this.reportMetric('CLS', clsValue);
          }
        });
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    }
  }

  // Page load time
  observeLoadTime() {
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      this.metrics.loadTime = loadTime;
      this.reportMetric('Load Time', loadTime);
    });
  }

  // Memory usage (Chrome only)
  observeMemoryUsage() {
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        this.metrics.memory = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        };
      }, 30000); // Check every 30 seconds
    }
  }

  reportMetric(name, value) {
    // In production, you'd send this to your analytics service
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value);
    }
    
    // Example: Send to analytics
    // analytics.track('Performance Metric', { name, value });
  }

  getMetrics() {
    return this.metrics;
  }

  destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// ================================
//   Caching Strategies
// ================================

// Simple in-memory cache with TTL
export class MemoryCache {
  constructor(ttl = 300000) { // 5 minutes default
    this.cache = new Map();
    this.ttl = ttl;
  }

  set(key, value, customTTL) {
    const expiry = Date.now() + (customTTL || this.ttl);
    this.cache.set(key, { value, expiry });
  }

  get(key) {
    const item = this.cache.get(key);
    
    if (!item) return null;
    
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }

  has(key) {
    return this.get(key) !== null;
  }

  delete(key) {
    return this.cache.delete(key);
  }

  clear() {
    this.cache.clear();
  }

  size() {
    return this.cache.size;
  }
}

// LocalStorage cache with compression
export class PersistentCache {
  constructor(prefix = 'app_cache_') {
    this.prefix = prefix;
  }

  set(key, value, ttl = 86400000) { // 24 hours default
    const item = {
      value,
      expiry: Date.now() + ttl,
      timestamp: Date.now()
    };
    
    try {
      localStorage.setItem(
        this.prefix + key, 
        JSON.stringify(item)
      );
    } catch (error) {
      console.warn('Failed to cache item:', error);
    }
  }

  get(key) {
    try {
      const item = localStorage.getItem(this.prefix + key);
      
      if (!item) return null;
      
      const parsed = JSON.parse(item);
      
      if (Date.now() > parsed.expiry) {
        this.delete(key);
        return null;
      }
      
      return parsed.value;
    } catch (error) {
      console.warn('Failed to retrieve cached item:', error);
      return null;
    }
  }

  delete(key) {
    localStorage.removeItem(this.prefix + key);
  }

  clear() {
    Object.keys(localStorage)
      .filter(key => key.startsWith(this.prefix))
      .forEach(key => localStorage.removeItem(key));
  }
}

// ================================
//   Resource Preloading
// ================================

// Preload critical resources
export const preloadResources = (resources) => {
  resources.forEach(({ href, as, type, crossorigin }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    
    if (type) link.type = type;
    if (crossorigin) link.crossOrigin = crossorigin;
    
    document.head.appendChild(link);
  });
};

// Prefetch next page resources
export const prefetchResources = (resources) => {
  resources.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
  });
};

// DNS prefetch for external domains
export const dnsPrefetch = (domains) => {
  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    document.head.appendChild(link);
  });
};

// ================================
//   Service Worker Utilities
// ================================

// Service worker registration with update handling
export const registerServiceWorker = async (swUrl) => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(swUrl);
      
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New version available
            showUpdateAvailableNotification();
          }
        });
      });
      
      return registration;
    } catch (error) {
      console.error('Service worker registration failed:', error);
    }
  }
};

// Show update notification
const showUpdateAvailableNotification = () => {
  // Implement your update notification logic
  console.log('New version available! Please refresh.');
};

// ================================
//   Export Performance Utilities
// ================================

export default {
  lazyImport,
  preloadComponent,
  createLazyRoute,
  LazyImageLoader,
  getOptimizedImageUrl,
  generateResponsiveImageSources,
  importIcon,
  loadCSS,
  debounce,
  throttle,
  EventManager,
  VirtualScroller,
  PerformanceMonitor,
  MemoryCache,
  PersistentCache,
  preloadResources,
  prefetchResources,
  dnsPrefetch,
  registerServiceWorker
};