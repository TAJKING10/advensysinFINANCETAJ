import React from 'react';
import { motion } from 'framer-motion';
import './Layout.css';

// Container Component - Centers content with responsive padding
const Container = ({ 
  children, 
  size = 'xl', 
  padding = true,
  className = '',
  as = 'div',
  ...props 
}) => {
  const Component = motion[as] || motion.div;
  const classes = `container container-${size} ${!padding ? 'container-no-padding' : ''} ${className}`.trim();

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

// Section Component - Provides consistent section spacing
const Section = ({ 
  children, 
  size = 'md',
  background = 'default',
  className = '',
  id,
  ...props 
}) => {
  const classes = `section section-${size} section-bg-${background} ${className}`.trim();

  return (
    <motion.section
      className={classes}
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      {...props}
    >
      {children}
    </motion.section>
  );
};

// Grid Component - Responsive grid system
const Grid = ({ 
  children, 
  cols = { xs: 1, sm: 2, md: 3, lg: 4 },
  gap = 'md',
  align = 'stretch',
  className = '',
  ...props 
}) => {
  const gridClasses = [
    'grid',
    `grid-gap-${gap}`,
    `grid-align-${align}`,
    // Responsive column classes
    `grid-cols-${cols.xs || 1}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={gridClasses} {...props}>
      {children}
    </div>
  );
};

// Flex Component - Flexible layout utility
const Flex = ({ 
  children,
  direction = 'row',
  align = 'center',
  justify = 'start',
  wrap = false,
  gap = 'md',
  className = '',
  responsive = {},
  ...props 
}) => {
  const flexClasses = [
    'flex',
    `flex-${direction}`,
    `items-${align}`,
    `justify-${justify}`,
    wrap && 'flex-wrap',
    `gap-${gap}`,
    // Responsive variants
    responsive.sm && `sm:flex-${responsive.sm.direction || direction}`,
    responsive.sm && `sm:items-${responsive.sm.align || align}`,
    responsive.sm && `sm:justify-${responsive.sm.justify || justify}`,
    responsive.md && `md:flex-${responsive.md.direction || direction}`,
    responsive.md && `md:items-${responsive.md.align || align}`,
    responsive.md && `md:justify-${responsive.md.justify || justify}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={flexClasses} {...props}>
      {children}
    </div>
  );
};

// Stack Component - Vertical spacing utility
const Stack = ({ 
  children, 
  space = 'md',
  align = 'stretch',
  className = '',
  ...props 
}) => {
  const stackClasses = `stack stack-${space} stack-align-${align} ${className}`.trim();

  return (
    <div className={stackClasses} {...props}>
      {children}
    </div>
  );
};

// Box Component - Generic container with spacing utilities
const Box = ({ 
  children,
  p = 0, // padding
  m = 0, // margin
  bg = 'transparent',
  rounded = false,
  shadow = false,
  border = false,
  className = '',
  ...props 
}) => {
  const boxClasses = [
    'box',
    p && `p-${p}`,
    m && `m-${m}`,
    bg !== 'transparent' && `bg-${bg}`,
    rounded && (typeof rounded === 'string' ? `rounded-${rounded}` : 'rounded'),
    shadow && (typeof shadow === 'string' ? `shadow-${shadow}` : 'shadow'),
    border && (typeof border === 'string' ? `border-${border}` : 'border'),
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={boxClasses} {...props}>
      {children}
    </div>
  );
};

// AspectRatio Component - Maintains aspect ratios
const AspectRatio = ({ 
  children, 
  ratio = '16/9',
  className = '',
  ...props 
}) => {
  return (
    <div 
      className={`aspect-ratio ${className}`.trim()} 
      style={{ aspectRatio: ratio }}
      {...props}
    >
      {children}
    </div>
  );
};

// Responsive Image Component
const ResponsiveImage = ({ 
  src, 
  alt, 
  aspectRatio = '16/9',
  sizes = '100vw',
  loading = 'lazy',
  className = '',
  ...props 
}) => {
  return (
    <AspectRatio ratio={aspectRatio} className={`responsive-image ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading={loading}
        className="responsive-image-element"
        {...props}
      />
    </AspectRatio>
  );
};

// Spacer Component - Add space between elements
const Spacer = ({ 
  size = 'md',
  direction = 'vertical',
  className = '',
  ...props 
}) => {
  const spacerClasses = `spacer spacer-${direction} spacer-${size} ${className}`.trim();
  
  return <div className={spacerClasses} {...props} />;
};

// Divider Component - Visual separator
const Divider = ({ 
  orientation = 'horizontal',
  variant = 'solid',
  size = 'md',
  className = '',
  children,
  ...props 
}) => {
  const dividerClasses = `divider divider-${orientation} divider-${variant} divider-${size} ${className}`.trim();
  
  if (children) {
    return (
      <div className={`${dividerClasses} divider-with-content`} {...props}>
        <span className="divider-content">{children}</span>
      </div>
    );
  }
  
  return <hr className={dividerClasses} {...props} />;
};

// Center Component - Centers content both horizontally and vertically
const Center = ({ 
  children, 
  className = '',
  minHeight = 'auto',
  ...props 
}) => {
  return (
    <div 
      className={`center ${className}`.trim()}
      style={{ minHeight }}
      {...props}
    >
      {children}
    </div>
  );
};

// Show/Hide Components for responsive visibility
const Show = ({ children, breakpoint = 'md', direction = 'up' }) => {
  const showClass = direction === 'up' ? `show-${breakpoint}-up` : `show-${breakpoint}-down`;
  return <div className={showClass}>{children}</div>;
};

const Hide = ({ children, breakpoint = 'md', direction = 'up' }) => {
  const hideClass = direction === 'up' ? `hide-${breakpoint}-up` : `hide-${breakpoint}-down`;
  return <div className={hideClass}>{children}</div>;
};

// Responsive Text Component
const ResponsiveText = ({ 
  children,
  size = { xs: 'base', md: 'lg', lg: 'xl' },
  weight = 'normal',
  align = { xs: 'left', md: 'center' },
  className = '',
  as = 'p',
  ...props 
}) => {
  const Component = as;
  const textClasses = [
    // Base size
    `text-${size.xs || 'base'}`,
    // Responsive sizes
    size.sm && `sm:text-${size.sm}`,
    size.md && `md:text-${size.md}`,
    size.lg && `lg:text-${size.lg}`,
    size.xl && `xl:text-${size.xl}`,
    // Weight
    `font-${weight}`,
    // Alignment
    `text-${align.xs || 'left'}`,
    align.sm && `sm:text-${align.sm}`,
    align.md && `md:text-${align.md}`,
    align.lg && `lg:text-${align.lg}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={textClasses} {...props}>
      {children}
    </Component>
  );
};

// Breakpoint Component - Conditional rendering based on screen size
const Breakpoint = ({ children, show, hide }) => {
  const [currentBreakpoint, setCurrentBreakpoint] = React.useState('xs');

  React.useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1280) setCurrentBreakpoint('xl');
      else if (width >= 1024) setCurrentBreakpoint('lg');
      else if (width >= 768) setCurrentBreakpoint('md');
      else if (width >= 640) setCurrentBreakpoint('sm');
      else setCurrentBreakpoint('xs');
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  // Check if current breakpoint should show content
  if (show && !show.includes(currentBreakpoint)) return null;
  if (hide && hide.includes(currentBreakpoint)) return null;

  return children;
};

// Layout Presets for common patterns
const HeroLayout = ({ 
  children, 
  background = 'gradient',
  minHeight = '100vh',
  className = '',
  ...props 
}) => {
  return (
    <Section 
      size="none" 
      background={background}
      className={`hero-layout ${className}`.trim()}
      style={{ minHeight }}
      {...props}
    >
      <Container>
        <Center minHeight={minHeight}>
          {children}
        </Center>
      </Container>
    </Section>
  );
};

const TwoColumnLayout = ({ 
  left, 
  right, 
  leftWidth = '50%',
  gap = 'lg',
  reverse = false,
  stackOnMobile = true,
  className = '',
  ...props 
}) => {
  const layoutClasses = [
    'two-column-layout',
    reverse && 'two-column-reverse',
    stackOnMobile && 'two-column-stack-mobile',
    `gap-${gap}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={layoutClasses} style={{ '--left-width': leftWidth }} {...props}>
      <div className="two-column-left">{left}</div>
      <div className="two-column-right">{right}</div>
    </div>
  );
};

const SidebarLayout = ({ 
  sidebar, 
  main, 
  sidebarWidth = '300px',
  sidebarPosition = 'left',
  collapsible = false,
  className = '',
  ...props 
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const layoutClasses = [
    'sidebar-layout',
    `sidebar-${sidebarPosition}`,
    collapsible && 'sidebar-collapsible',
    isCollapsed && 'sidebar-collapsed',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={layoutClasses} 
      style={{ '--sidebar-width': sidebarWidth }}
      {...props}
    >
      <aside className="sidebar-content">
        {collapsible && (
          <button 
            className="sidebar-toggle"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? '→' : '←'}
          </button>
        )}
        {sidebar}
      </aside>
      <main className="main-content">
        {main}
      </main>
    </div>
  );
};

// Export all components
export {
  Container,
  Section,
  Grid,
  Flex,
  Stack,
  Box,
  AspectRatio,
  ResponsiveImage,
  Spacer,
  Divider,
  Center,
  Show,
  Hide,
  ResponsiveText,
  Breakpoint,
  HeroLayout,
  TwoColumnLayout,
  SidebarLayout
};

export default {
  Container,
  Section,
  Grid,
  Flex,
  Stack,
  Box,
  AspectRatio,
  ResponsiveImage,
  Spacer,
  Divider,
  Center,
  Show,
  Hide,
  ResponsiveText,
  Breakpoint,
  HeroLayout,
  TwoColumnLayout,
  SidebarLayout
};