// ================================
//   WORLD-CLASS UI COMPONENT LIBRARY
//   Centralized export for all UI components
// ================================

// Button Components
export { default as Button } from './Button';

// Card Components
export { 
  default as Card,
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
} from './Card';

// Form Components
export { 
  default as Input,
  Textarea,
  Select
} from './Input';

// Example usage and component combinations for common patterns
export const FormComponents = {
  Input,
  Textarea,
  Select,
  Button
};

export const CardComponents = {
  Card,
  ServiceCard,
  FeatureCard,
  TestimonialCard,
  StatsCard
};

// Component props documentation for TypeScript users (if migrating to TS)
export const ComponentTypes = {
  Button: {
    variants: ['primary', 'secondary', 'accent', 'ghost', 'outline', 'danger', 'success'],
    sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
    examples: {
      primary: '<Button variant="primary">Get Quote</Button>',
      secondary: '<Button variant="secondary" size="lg">Learn More</Button>',
      icon: '<Button icon={<FaPhone />} iconPosition="left">Call Us</Button>'
    }
  },
  Card: {
    variants: ['default', 'elevated', 'outline', 'glass', 'gradient', 'service', 'feature', 'testimonial', 'stats'],
    sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
    examples: {
      service: '<ServiceCard icon={<FaShield />} title="Life Insurance" features={["Coverage", "Benefits"]} />',
      feature: '<FeatureCard icon={<FaStar />} title="24/7 Support" description="Always here for you" />',
      testimonial: '<TestimonialCard quote="Amazing service!" author="John Doe" rating={5} />'
    }
  },
  Input: {
    variants: ['default', 'outline', 'filled', 'underline'],
    sizes: ['sm', 'md', 'lg'],
    types: ['text', 'email', 'password', 'number', 'tel', 'url'],
    examples: {
      basic: '<Input label="Full Name" placeholder="Enter your name" />',
      withIcon: '<Input label="Email" type="email" icon={<FaEnvelope />} />',
      error: '<Input label="Phone" error="Please enter a valid phone number" />'
    }
  }
};

// Pre-configured component combinations for common use cases
export const PresetComponents = {
  // Contact Form Components
  ContactForm: {
    NameInput: (props) => <Input label="Full Name" type="text" required {...props} />,
    EmailInput: (props) => <Input label="Email Address" type="email" required {...props} />,
    PhoneInput: (props) => <Input label="Phone Number" type="tel" {...props} />,
    MessageTextarea: (props) => <Textarea label="Message" rows={5} required {...props} />,
    SubmitButton: (props) => <Button variant="primary" size="lg" fullWidth {...props}>Send Message</Button>
  },

  // Insurance Service Cards
  InsuranceCards: {
    LifeInsurance: (props) => (
      <ServiceCard
        icon="🛡️"
        title="Life Insurance"
        description="Protect your family's future with comprehensive life insurance coverage."
        features={["Term & Whole Life", "Flexible Premiums", "24/7 Support"]}
        {...props}
      />
    ),
    HealthInsurance: (props) => (
      <ServiceCard
        icon="🏥"
        title="Health Insurance"
        description="Comprehensive health coverage for you and your family."
        features={["Medical Coverage", "Prescription Drugs", "Preventive Care"]}
        {...props}
      />
    ),
    AutoInsurance: (props) => (
      <ServiceCard
        icon="🚗"
        title="Auto Insurance"
        description="Complete protection for your vehicle and peace of mind on the road."
        features={["Collision Coverage", "Liability Protection", "Roadside Assistance"]}
        {...props}
      />
    )
  },

  // Statistics Display
  StatsDisplay: {
    ClientsServed: (props) => (
      <StatsCard
        value="10,000+"
        label="Clients Served"
        trend="+15%"
        trendDirection="up"
        icon="👥"
        {...props}
      />
    ),
    ClaimsProcessed: (props) => (
      <StatsCard
        value="25,000+"
        label="Claims Processed"
        trend="+8%"
        trendDirection="up"
        icon="📋"
        {...props}
      />
    ),
    CustomerSatisfaction: (props) => (
      <StatsCard
        value="98%"
        label="Customer Satisfaction"
        trend="+2%"
        trendDirection="up"
        icon="⭐"
        {...props}
      />
    )
  }
};

// Theme and styling utilities
export const UIHelpers = {
  // Animation presets
  animations: {
    slideUp: { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    slideDown: { initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    slideLeft: { initial: { x: 20, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    slideRight: { initial: { x: -20, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    scale: { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
    fade: { initial: { opacity: 0 }, animate: { opacity: 1 } }
  },

  // Transition presets
  transitions: {
    smooth: { type: "spring", stiffness: 300, damping: 25 },
    bouncy: { type: "spring", stiffness: 400, damping: 15 },
    slow: { type: "spring", stiffness: 200, damping: 30 },
    fast: { type: "spring", stiffness: 500, damping: 20 }
  },

  // Color utilities (references to CSS variables)
  colors: {
    primary: 'var(--primary-600)',
    secondary: 'var(--gray-600)',
    accent: 'var(--accent-500)',
    success: 'var(--success-600)',
    error: 'var(--error-600)',
    warning: 'var(--warning-600)'
  },

  // Spacing utilities
  spacing: {
    xs: 'var(--space-1)',
    sm: 'var(--space-2)',
    md: 'var(--space-4)',
    lg: 'var(--space-6)',
    xl: 'var(--space-8)',
    xxl: 'var(--space-12)'
  }
};

// Usage examples and best practices
export const UsageExamples = {
  // Hero section with CTA
  heroSection: `
    <section className="hero-section">
      <Card variant="glass" size="xl" className="hero-card">
        <CardBody>
          <CardTitle level={1}>Protect What Matters Most</CardTitle>
          <CardDescription>
            Comprehensive insurance solutions tailored for your life.
          </CardDescription>
          <div className="hero-actions">
            <Button variant="primary" size="xl" icon={<FaQuoteLeft />}>
              Get Free Quote
            </Button>
            <Button variant="secondary" size="xl">
              Learn More
            </Button>
          </div>
        </CardBody>
      </Card>
    </section>
  `,

  // Contact form
  contactForm: `
    <Card variant="elevated">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          Ready to protect your future? Let's talk about your insurance needs.
        </CardDescription>
      </CardHeader>
      <CardBody>
        <div className="form-grid">
          <Input 
            label="Full Name" 
            placeholder="John Doe" 
            required 
          />
          <Input 
            label="Email" 
            type="email" 
            placeholder="john@example.com" 
            required 
          />
          <Select 
            label="Insurance Type"
            options={[
              { value: 'life', label: 'Life Insurance' },
              { value: 'health', label: 'Health Insurance' },
              { value: 'auto', label: 'Auto Insurance' }
            ]}
            required
          />
          <Textarea 
            label="Message" 
            placeholder="Tell us about your insurance needs..."
            rows={4}
          />
        </div>
      </CardBody>
      <CardFooter>
        <Button variant="primary" size="lg" fullWidth>
          Send Message
        </Button>
      </CardFooter>
    </Card>
  `,

  // Services grid
  servicesGrid: `
    <div className="services-grid">
      <ServiceCard
        icon="🛡️"
        title="Life Insurance"
        description="Secure your family's financial future"
        features={["Term Life", "Whole Life", "Universal Life"]}
        price="25"
        ctaText="Get Quote"
      />
      <ServiceCard
        icon="🏥"
        title="Health Insurance"
        description="Comprehensive healthcare coverage"
        features={["Medical", "Dental", "Vision"]}
        price="150"
        ctaText="Learn More"
      />
      <ServiceCard
        icon="🚗"
        title="Auto Insurance"
        description="Complete vehicle protection"
        features={["Liability", "Collision", "Comprehensive"]}
        price="80"
        ctaText="Compare Plans"
      />
    </div>
  `
};

// Export everything as default for convenient access
export default {
  Button,
  Card,
  Input,
  Textarea,
  Select,
  ServiceCard,
  FeatureCard,
  TestimonialCard,
  StatsCard,
  PresetComponents,
  UIHelpers,
  UsageExamples
};