import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Accessibility.css';

// Screen Reader Only Component - Hides content visually but keeps it accessible
const VisuallyHidden = ({ children, className = '', ...props }) => (
  <span className={`sr-only ${className}`.trim()} {...props}>
    {children}
  </span>
);

// Skip Link Component - Helps keyboard users navigate quickly
const SkipLink = ({ href = '#main-content', children = 'Skip to main content', className = '' }) => (
  <a 
    href={href} 
    className={`skip-link ${className}`.trim()}
  >
    {children}
  </a>
);

// Focus Trap Component - Keeps focus within a container (useful for modals)
const FocusTrap = ({ children, active = true, className = '', ...props }) => {
  const containerRef = useRef(null);
  const lastFocusedElementRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    if (!container) return;

    // Store the currently focused element
    lastFocusedElementRef.current = document.activeElement;

    // Get all focusable elements
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus the first element
    if (firstElement) {
      firstElement.focus();
    }

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    container.addEventListener('keydown', handleTabKey);

    return () => {
      container.removeEventListener('keydown', handleTabKey);
      // Restore focus to the previously focused element
      if (lastFocusedElementRef.current) {
        lastFocusedElementRef.current.focus();
      }
    };
  }, [active]);

  return (
    <div ref={containerRef} className={className} {...props}>
      {children}
    </div>
  );
};

// Live Region Component - Announces dynamic content to screen readers
const LiveRegion = ({ 
  children, 
  politeness = 'polite', 
  atomic = false, 
  className = '',
  ...props 
}) => (
  <div
    className={`live-region ${className}`.trim()}
    aria-live={politeness}
    aria-atomic={atomic}
    {...props}
  >
    {children}
  </div>
);

// Landmark Component - Creates semantic page regions
const Landmark = ({ 
  children, 
  role, 
  label, 
  labelledBy,
  className = '',
  ...props 
}) => (
  <div
    role={role}
    aria-label={label}
    aria-labelledby={labelledBy}
    className={`landmark ${className}`.trim()}
    {...props}
  >
    {children}
  </div>
);

// Keyboard Navigation Helper
const KeyboardNavigable = ({ 
  children, 
  onKeyDown,
  className = '',
  ...props 
}) => {
  const handleKeyDown = (e) => {
    // Handle arrow keys for navigation
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
      
      const focusableElements = Array.from(
        e.currentTarget.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      );
      
      const currentIndex = focusableElements.indexOf(document.activeElement);
      let nextIndex;

      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          nextIndex = currentIndex > 0 ? currentIndex - 1 : focusableElements.length - 1;
          break;
        case 'ArrowDown':
        case 'ArrowRight':
          nextIndex = currentIndex < focusableElements.length - 1 ? currentIndex + 1 : 0;
          break;
        default:
          return;
      }

      focusableElements[nextIndex]?.focus();
    }

    onKeyDown && onKeyDown(e);
  };

  return (
    <div
      className={`keyboard-navigable ${className}`.trim()}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {children}
    </div>
  );
};

// High Contrast Mode Detector
const HighContrastModeProvider = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = React.useState(false);

  useEffect(() => {
    const checkHighContrast = () => {
      // Check for high contrast mode using media query
      const highContrastMediaQuery = window.matchMedia('(prefers-contrast: high)');
      setIsHighContrast(highContrastMediaQuery.matches);
    };

    checkHighContrast();
    
    const highContrastMediaQuery = window.matchMedia('(prefers-contrast: high)');
    highContrastMediaQuery.addListener(checkHighContrast);

    return () => {
      highContrastMediaQuery.removeListener(checkHighContrast);
    };
  }, []);

  return (
    <div className={isHighContrast ? 'high-contrast-mode' : ''}>
      {children}
    </div>
  );
};

// Reduced Motion Provider
const ReducedMotionProvider = ({ children }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  useEffect(() => {
    const checkReducedMotion = () => {
      const reducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(reducedMotionMediaQuery.matches);
    };

    checkReducedMotion();
    
    const reducedMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotionMediaQuery.addListener(checkReducedMotion);

    return () => {
      reducedMotionMediaQuery.removeListener(checkReducedMotion);
    };
  }, []);

  return (
    <div className={prefersReducedMotion ? 'reduced-motion' : ''}>
      {children}
    </div>
  );
};

// Tooltip Component with proper accessibility
const AccessibleTooltip = ({ 
  children, 
  content, 
  position = 'top',
  delay = 300,
  className = '',
  ...props 
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [timeoutId, setTimeoutId] = React.useState(null);
  const tooltipId = React.useId();

  const showTooltip = () => {
    const id = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  return (
    <div 
      className={`tooltip-container ${className}`.trim()}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      aria-describedby={isVisible ? tooltipId : undefined}
      {...props}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            id={tooltipId}
            role="tooltip"
            className={`tooltip tooltip-${position}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            {content}
            <div className="tooltip-arrow" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Error Boundary with accessibility features
class AccessibleErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Accessibility Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div 
          role="alert" 
          className="error-boundary"
          aria-labelledby="error-title"
          aria-describedby="error-description"
        >
          <h2 id="error-title">Something went wrong</h2>
          <p id="error-description">
            We apologize for the inconvenience. Please refresh the page or contact support if the problem persists.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Progress Indicator with accessibility
const AccessibleProgress = ({ 
  value, 
  max = 100, 
  label,
  showValue = true,
  className = '',
  ...props 
}) => {
  const percentage = Math.round((value / max) * 100);
  const progressId = React.useId();
  const labelId = React.useId();

  return (
    <div className={`progress-container ${className}`.trim()}>
      {label && (
        <label id={labelId} className="progress-label">
          {label}
          {showValue && <span className="progress-value">({percentage}%)</span>}
        </label>
      )}
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-labelledby={label ? labelId : undefined}
        className="progress-bar"
        {...props}
      >
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

// Accessible Modal/Dialog
const AccessibleModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  className = '',
  ...props 
}) => {
  const modalRef = useRef(null);
  const titleId = React.useId();

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Announce modal opening to screen readers
      const announcement = document.createElement('div');
      announcement.setAttribute('aria-live', 'assertive');
      announcement.setAttribute('aria-atomic', 'true');
      announcement.className = 'sr-only';
      announcement.textContent = `Dialog opened: ${title}`;
      document.body.appendChild(announcement);
      
      // Clean up announcement
      setTimeout(() => {
        if (document.body.contains(announcement)) {
          document.body.removeChild(announcement);
        }
      }, 1000);

      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, title]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          onKeyDown={handleEscapeKey}
        >
          <FocusTrap active={isOpen}>
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className={`modal ${className}`.trim()}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              {...props}
            >
              <div className="modal-header">
                <h2 id={titleId} className="modal-title">
                  {title}
                </h2>
                <button
                  type="button"
                  className="modal-close"
                  onClick={onClose}
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>
              <div className="modal-content">
                {children}
              </div>
            </motion.div>
          </FocusTrap>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Color Contrast Checker (development utility)
const ColorContrastChecker = ({ color1, color2, children }) => {
  const [contrastRatio, setContrastRatio] = React.useState(null);

  React.useEffect(() => {
    // This is a simplified contrast ratio calculation
    // In production, you'd want a more robust implementation
    const getLuminance = (color) => {
      // Convert hex to RGB and calculate luminance
      const rgb = parseInt(color.slice(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;
      
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const l1 = getLuminance(color1);
    const l2 = getLuminance(color2);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    setContrastRatio(ratio.toFixed(2));
  }, [color1, color2]);

  if (process.env.NODE_ENV === 'development') {
    const isAACompliant = contrastRatio >= 4.5;
    const isAAACompliant = contrastRatio >= 7;
    
    return (
      <div className="contrast-checker">
        {children}
        <div className="contrast-info">
          <span>Contrast: {contrastRatio}</span>
          <span className={isAACompliant ? 'compliant' : 'non-compliant'}>
            AA: {isAACompliant ? '✓' : '✗'}
          </span>
          <span className={isAAACompliant ? 'compliant' : 'non-compliant'}>
            AAA: {isAAACompliant ? '✓' : '✗'}
          </span>
        </div>
      </div>
    );
  }

  return children;
};

// Export all accessibility components
export {
  VisuallyHidden,
  SkipLink,
  FocusTrap,
  LiveRegion,
  Landmark,
  KeyboardNavigable,
  HighContrastModeProvider,
  ReducedMotionProvider,
  AccessibleTooltip,
  AccessibleErrorBoundary,
  AccessibleProgress,
  AccessibleModal,
  ColorContrastChecker
};

export default {
  VisuallyHidden,
  SkipLink,
  FocusTrap,
  LiveRegion,
  Landmark,
  KeyboardNavigable,
  HighContrastModeProvider,
  ReducedMotionProvider,
  AccessibleTooltip,
  AccessibleErrorBoundary,
  AccessibleProgress,
  AccessibleModal,
  ColorContrastChecker
};