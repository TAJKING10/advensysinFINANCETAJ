import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({
  children,
  variant = 'default',
  size = 'md',
  hover = true,
  padding = true,
  shadow = true,
  border = true,
  background = 'default',
  onClick,
  className = '',
  as = 'div',
  href,
  ...props
}) => {
  const baseClasses = `card card-${variant} card-${size}`;
  const additionalClasses = [
    hover && 'card-hover',
    !padding && 'card-no-padding',
    !shadow && 'card-no-shadow',
    !border && 'card-no-border',
    background !== 'default' && `card-bg-${background}`,
    onClick && 'card-clickable',
    className
  ].filter(Boolean).join(' ');

  const classes = `${baseClasses} ${additionalClasses}`.trim();

  const cardVariants = {
    initial: { 
      scale: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0
    },
    hover: { 
      scale: hover ? 1.02 : 1,
      y: hover ? -8 : 0,
      rotateX: hover ? 2 : 0,
      rotateY: hover ? 1 : 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    },
    tap: { 
      scale: onClick ? 0.98 : 1,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 25 
      }
    }
  };

  const Component = motion[as] || motion.div;

  const commonProps = {
    className: classes,
    variants: cardVariants,
    initial: "initial",
    whileHover: hover ? "hover" : {},
    whileTap: onClick ? "tap" : {},
    onClick,
    style: { perspective: '1000px' },
    ...props
  };

  if (href) {
    return (
      <motion.a
        href={href}
        {...commonProps}
        as={undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <Component {...commonProps}>
      {children}
    </Component>
  );
};

// Card sub-components
const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`card-header ${className}`} {...props}>
    {children}
  </div>
);

const CardBody = ({ children, className = '', ...props }) => (
  <div className={`card-body ${className}`} {...props}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`card-footer ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, level = 2, className = '', ...props }) => {
  const Tag = `h${level}`;
  return (
    <Tag className={`card-title ${className}`} {...props}>
      {children}
    </Tag>
  );
};

const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`card-description ${className}`} {...props}>
    {children}
  </p>
);

const CardImage = ({ src, alt, className = '', aspectRatio = '16/9', ...props }) => (
  <div 
    className={`card-image ${className}`} 
    style={{ aspectRatio }}
    {...props}
  >
    <img src={src} alt={alt} />
  </div>
);

const CardIcon = ({ icon, className = '', ...props }) => (
  <div className={`card-icon ${className}`} {...props}>
    {icon}
  </div>
);

const CardBadge = ({ children, variant = 'default', className = '', ...props }) => (
  <span className={`card-badge card-badge-${variant} ${className}`} {...props}>
    {children}
  </span>
);

// Service Card Component for insurance services
const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features = [], 
  price, 
  ctaText = "Learn More",
  onCtaClick,
  className = '',
  ...props 
}) => {
  return (
    <Card 
      variant="service" 
      className={`service-card ${className}`}
      {...props}
    >
      <CardIcon icon={icon} />
      <CardBody>
        <CardTitle level={3}>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        
        {features.length > 0 && (
          <ul className="service-features">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="feature-check">✓</span>
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
        
        {price && (
          <div className="service-price">
            <span className="price-currency">$</span>
            <span className="price-amount">{price}</span>
            <span className="price-period">/month</span>
          </div>
        )}
      </CardBody>
      
      <CardFooter>
        <motion.button
          className="btn btn-primary btn-full"
          onClick={onCtaClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {ctaText}
        </motion.button>
      </CardFooter>
    </Card>
  );
};

// Feature Card Component
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  className = '',
  ...props 
}) => {
  return (
    <Card 
      variant="feature" 
      className={`feature-card ${className}`}
      {...props}
    >
      <CardIcon icon={icon} />
      <CardBody>
        <CardTitle level={3}>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardBody>
    </Card>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  company, 
  avatar,
  rating = 5,
  className = '',
  ...props 
}) => {
  return (
    <Card 
      variant="testimonial" 
      className={`testimonial-card ${className}`}
      {...props}
    >
      <CardBody>
        <div className="testimonial-rating">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={`star ${i < rating ? 'star-filled' : 'star-empty'}`}
            >
              ⭐
            </span>
          ))}
        </div>
        
        <blockquote className="testimonial-quote">
          "{quote}"
        </blockquote>
        
        <div className="testimonial-author">
          {avatar && (
            <img 
              src={avatar} 
              alt={author}
              className="author-avatar"
            />
          )}
          <div className="author-info">
            <cite className="author-name">{author}</cite>
            <span className="author-role">
              {role} {company && `at ${company}`}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

// Stats Card Component
const StatsCard = ({ 
  value, 
  label, 
  trend, 
  trendDirection = 'up',
  icon,
  className = '',
  ...props 
}) => {
  return (
    <Card 
      variant="stats" 
      className={`stats-card ${className}`}
      {...props}
    >
      <CardBody>
        <div className="stats-header">
          <div className="stats-value">{value}</div>
          {icon && <CardIcon icon={icon} />}
        </div>
        
        <div className="stats-label">{label}</div>
        
        {trend && (
          <div className={`stats-trend stats-trend-${trendDirection}`}>
            <span className="trend-arrow">
              {trendDirection === 'up' ? '↗' : '↘'}
            </span>
            {trend}
          </div>
        )}
      </CardBody>
    </Card>
  );
};

// Export all components
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Image = CardImage;
Card.Icon = CardIcon;
Card.Badge = CardBadge;

export default Card;
export { 
  ServiceCard, 
  FeatureCard, 
  TestimonialCard, 
  StatsCard,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardDescription,
  CardImage,
  CardIcon,
  CardBadge
};