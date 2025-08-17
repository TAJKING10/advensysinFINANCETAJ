import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Input.css';

const Input = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  hint,
  disabled = false,
  required = false,
  size = 'md',
  variant = 'default',
  icon,
  iconPosition = 'left',
  clearable = false,
  loading = false,
  className = '',
  name,
  id,
  autoComplete,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);
  const inputRef = useRef(null);

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const handleChange = (e) => {
    setHasValue(!!e.target.value);
    onChange && onChange(e);
  };

  const handleClear = () => {
    const event = {
      target: { value: '', name }
    };
    setHasValue(false);
    onChange && onChange(event);
    inputRef.current?.focus();
  };

  const baseClasses = `input-group input-${size} input-${variant}`;
  const additionalClasses = [
    isFocused && 'input-focused',
    hasValue && 'input-has-value',
    error && 'input-error',
    disabled && 'input-disabled',
    loading && 'input-loading',
    className
  ].filter(Boolean).join(' ');

  const classes = `${baseClasses} ${additionalClasses}`.trim();

  const inputVariants = {
    initial: { scale: 1 },
    focus: { 
      scale: 1.01,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  const labelVariants = {
    default: {
      top: '50%',
      fontSize: '16px',
      color: 'var(--text-tertiary)',
      transform: 'translateY(-50%)'
    },
    active: {
      top: '8px',
      fontSize: '12px',
      color: isFocused ? 'var(--primary-600)' : 'var(--text-secondary)',
      transform: 'translateY(0)',
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, color: 'var(--text-tertiary)' },
    focus: { 
      scale: 1.1, 
      color: 'var(--primary-600)',
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  return (
    <div className="input-container">
      <motion.div 
        className={classes}
        variants={inputVariants}
        initial="initial"
        animate={isFocused ? "focus" : "initial"}
      >
        {/* Left Icon */}
        {icon && iconPosition === 'left' && (
          <motion.div 
            className="input-icon input-icon-left"
            variants={iconVariants}
            animate={isFocused ? "focus" : "initial"}
          >
            {icon}
          </motion.div>
        )}

        {/* Input Field */}
        <div className="input-field-container">
          <input
            ref={inputRef}
            type={type}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            required={required}
            placeholder={label ? '' : placeholder}
            className="input-field"
            name={name}
            id={id || name}
            autoComplete={autoComplete}
            {...props}
          />

          {/* Floating Label */}
          {label && (
            <motion.label
              htmlFor={id || name}
              className="input-label"
              variants={labelVariants}
              animate={isFocused || hasValue ? "active" : "default"}
            >
              {label}
              {required && <span className="input-required">*</span>}
            </motion.label>
          )}

          {/* Focus Ring */}
          <motion.div
            className="input-focus-ring"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: isFocused ? 1 : 0,
              backgroundColor: error 
                ? 'var(--error-500)' 
                : 'var(--primary-500)'
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25 
            }}
          />
        </div>

        {/* Right Icon */}
        {icon && iconPosition === 'right' && (
          <motion.div 
            className="input-icon input-icon-right"
            variants={iconVariants}
            animate={isFocused ? "focus" : "initial"}
          >
            {icon}
          </motion.div>
        )}

        {/* Clear Button */}
        {clearable && hasValue && !disabled && (
          <motion.button
            type="button"
            className="input-clear"
            onClick={handleClear}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✕
          </motion.button>
        )}

        {/* Loading Spinner */}
        {loading && (
          <motion.div
            className="input-loading-spinner"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        )}
      </motion.div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="input-error-message"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25 
            }}
          >
            <span className="input-error-icon">⚠</span>
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint Message */}
      {hint && !error && (
        <div className="input-hint">
          {hint}
        </div>
      )}
    </div>
  );
};

// Textarea Component
const Textarea = ({
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  hint,
  disabled = false,
  required = false,
  size = 'md',
  variant = 'default',
  rows = 4,
  autoResize = false,
  maxRows = 10,
  className = '',
  name,
  id,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);
  const textareaRef = useRef(null);

  useEffect(() => {
    setHasValue(!!value);
    if (autoResize && textareaRef.current) {
      resizeTextarea();
    }
  }, [value, autoResize]);

  const resizeTextarea = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const scrollHeight = textarea.scrollHeight;
    const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
    const maxHeight = lineHeight * maxRows;
    
    textarea.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  const handleChange = (e) => {
    setHasValue(!!e.target.value);
    onChange && onChange(e);
    if (autoResize) {
      resizeTextarea();
    }
  };

  const baseClasses = `input-group input-${size} input-${variant} textarea-group`;
  const additionalClasses = [
    isFocused && 'input-focused',
    hasValue && 'input-has-value',
    error && 'input-error',
    disabled && 'input-disabled',
    className
  ].filter(Boolean).join(' ');

  const classes = `${baseClasses} ${additionalClasses}`.trim();

  return (
    <div className="input-container">
      <motion.div 
        className={classes}
        initial={{ scale: 1 }}
        animate={{ 
          scale: isFocused ? 1.01 : 1,
          transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }
        }}
      >
        <div className="input-field-container">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            required={required}
            placeholder={label ? '' : placeholder}
            rows={rows}
            className="input-field textarea-field"
            name={name}
            id={id || name}
            {...props}
          />

          {/* Floating Label */}
          {label && (
            <motion.label
              htmlFor={id || name}
              className="input-label textarea-label"
              animate={{
                top: isFocused || hasValue ? '8px' : '16px',
                fontSize: isFocused || hasValue ? '12px' : '16px',
                color: isFocused 
                  ? 'var(--primary-600)' 
                  : 'var(--text-tertiary)',
                transform: 'translateY(0)',
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }
              }}
            >
              {label}
              {required && <span className="input-required">*</span>}
            </motion.label>
          )}

          {/* Focus Ring */}
          <motion.div
            className="input-focus-ring"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: isFocused ? 1 : 0,
              backgroundColor: error 
                ? 'var(--error-500)' 
                : 'var(--primary-500)'
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25 
            }}
          />
        </div>
      </motion.div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="input-error-message"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25 
            }}
          >
            <span className="input-error-icon">⚠</span>
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint Message */}
      {hint && !error && (
        <div className="input-hint">
          {hint}
        </div>
      )}
    </div>
  );
};

// Select Component
const Select = ({
  label,
  placeholder = "Select an option...",
  value,
  onChange,
  options = [],
  error,
  hint,
  disabled = false,
  required = false,
  size = 'md',
  variant = 'default',
  searchable = false,
  className = '',
  name,
  id,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const selectRef = useRef(null);

  const filteredOptions = searchable 
    ? options.filter(option => 
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const selectedOption = options.find(option => option.value === value);

  const handleSelect = (option) => {
    onChange && onChange({
      target: { value: option.value, name }
    });
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseClasses = `input-group input-${size} input-${variant} select-group`;
  const additionalClasses = [
    isOpen && 'select-open',
    selectedOption && 'input-has-value',
    error && 'input-error',
    disabled && 'input-disabled',
    className
  ].filter(Boolean).join(' ');

  const classes = `${baseClasses} ${additionalClasses}`.trim();

  return (
    <div className="input-container" ref={selectRef}>
      <motion.div 
        className={classes}
        initial={{ scale: 1 }}
        animate={{ 
          scale: isFocused ? 1.01 : 1,
          transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }
        }}
      >
        <div className="input-field-container">
          <button
            type="button"
            className="select-trigger"
            onClick={() => !disabled && setIsOpen(!isOpen)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <span className="select-value">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <motion.span
              className="select-arrow"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ▼
            </motion.span>
          </button>

          {/* Floating Label */}
          {label && (
            <motion.label
              className="input-label select-label"
              animate={{
                top: selectedOption || isOpen ? '8px' : '50%',
                fontSize: selectedOption || isOpen ? '12px' : '16px',
                color: isFocused 
                  ? 'var(--primary-600)' 
                  : 'var(--text-tertiary)',
                transform: selectedOption || isOpen 
                  ? 'translateY(0)' 
                  : 'translateY(-50%)',
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }
              }}
            >
              {label}
              {required && <span className="input-required">*</span>}
            </motion.label>
          )}

          {/* Focus Ring */}
          <motion.div
            className="input-focus-ring"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: isFocused || isOpen ? 1 : 0,
              backgroundColor: error 
                ? 'var(--error-500)' 
                : 'var(--primary-500)'
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25 
            }}
          />
        </div>
      </motion.div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="select-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
          >
            {searchable && (
              <div className="select-search">
                <input
                  type="text"
                  placeholder="Search options..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="select-search-input"
                />
              </div>
            )}

            <div className="select-options" role="listbox">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <motion.button
                    key={option.value}
                    type="button"
                    className={`select-option ${
                      option.value === value ? 'select-option-selected' : ''
                    }`}
                    onClick={() => handleSelect(option)}
                    role="option"
                    aria-selected={option.value === value}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.05 }
                    }}
                    whileHover={{ x: 4, backgroundColor: 'rgba(var(--primary-rgb), 0.05)' }}
                  >
                    {option.label}
                  </motion.button>
                ))
              ) : (
                <div className="select-no-options">No options found</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            className="input-error-message"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25 
            }}
          >
            <span className="input-error-icon">⚠</span>
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint Message */}
      {hint && !error && (
        <div className="input-hint">
          {hint}
        </div>
      )}
    </div>
  );
};

export default Input;
export { Textarea, Select };