import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  onClick,
  href,
  className = '',
  type = 'button',
  ariaLabel,
  ...props
}) => {
  const baseClasses = `btn btn-${variant} btn-${size}`;
  const additionalClasses = [
    fullWidth && 'btn-full',
    loading && 'btn-loading',
    className
  ].filter(Boolean).join(' ');

  const classes = `${baseClasses} ${additionalClasses}`.trim();

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      y: -2,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 20 
      }
    },
    tap: { 
      scale: 0.98,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 600, 
        damping: 30 
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: variant === 'primary' ? 5 : 0,
      scale: 1.1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  const renderIcon = () => {
    if (!icon) return null;
    
    return (
      <motion.span 
        className="btn-icon"
        variants={iconVariants}
        style={{ order: iconPosition === 'right' ? 2 : 0 }}
      >
        {icon}
      </motion.span>
    );
  };

  const renderContent = () => (
    <>
      {iconPosition === 'left' && renderIcon()}
      <span className="btn-text" style={{ order: 1 }}>
        {children}
      </span>
      {iconPosition === 'right' && renderIcon()}
      {variant === 'primary' && <div className="btn-shimmer" />}
      {loading && (
        <motion.div 
          className="btn-loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      )}
    </>
  );

  const commonProps = {
    className: classes,
    disabled: disabled || loading,
    'aria-label': ariaLabel,
    'aria-busy': loading,
    ...props
  };

  if (href && !disabled && !loading) {
    return (
      <motion.a
        href={href}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        {...commonProps}
      >
        {renderContent()}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      variants={buttonVariants}
      initial="initial"
      whileHover={disabled || loading ? {} : "hover"}
      whileTap={disabled || loading ? {} : "tap"}
      {...commonProps}
    >
      {renderContent()}
    </motion.button>
  );
};

export default Button;