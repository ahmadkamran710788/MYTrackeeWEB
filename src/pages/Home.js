import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck,
  faChevronDown,
  faChevronUp,
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faCar,
  faBuilding,
  faRocket,
  faGlobe,
  faCog,
  faKey,
  faUsers,
  faShieldAlt,
  faHandshake,
  faQuoteLeft,
  faPhoneAlt,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How does car tracking work?",
      answer: "Car tracking works by using GPS technology to determine the exact location of your vehicle. The tracking device installed in your car sends location data to our servers, which you can access through our web portal or mobile app in real-time."
    },
    {
      question: "What are the benefits of car tracking?",
      answer: "Car tracking provides numerous benefits including real-time location monitoring, theft prevention, route optimization, fuel cost reduction, driver behavior monitoring, and comprehensive reporting for fleet management."
    },
    {
      question: "Can I track my vehicle using a mobile app?",
      answer: "Yes! SignTrack provides a powerful mobile app available for both iOS and Android devices. You can track your vehicle, receive alerts, view reports, and control various features directly from your smartphone."
    },
    {
      question: "Is the SignTrack car tracking device easily installable?",
      answer: "Yes, our car tracking devices are designed for easy installation. Our expert technicians can install the device professionally, and it typically takes only 1-2 hours to complete the installation process."
    },
    {
      question: "Will the car tracker drain my vehicle's battery?",
      answer: "No, our car tracking devices are designed to be energy-efficient and have minimal impact on your vehicle's battery. They use advanced power management technology to ensure optimal performance without draining the battery."
    },
    {
      question: "How accurate is the location tracking provided by SignTrack?",
      answer: "SignTrack provides highly accurate location tracking with precision up to 3-5 meters. Our advanced GPS technology ensures reliable and accurate location data in real-time."
    },
    {
      question: "How does car tracking improve vehicle security?",
      answer: "Car tracking significantly improves vehicle security by providing real-time location monitoring, theft alerts, engine kill capabilities, geofencing, and immediate notifications for unauthorized vehicle movement."
    },
    {
      question: "Can I track multiple vehicles with SignTrack?",
      answer: "Yes, SignTrack offers fleet management solutions that allow you to track multiple vehicles from a single dashboard. Our platform supports unlimited vehicle tracking with comprehensive fleet management features."
    },
    {
      question: "Can I transfer my SignTrack car tracker to a new vehicle?",
      answer: "Yes, you can transfer your SignTrack car tracker to a new vehicle. Our technicians can professionally remove the device from your current vehicle and install it in your new vehicle."
    },
    {
      question: "Is SignTrack available throughout Pakistan?",
      answer: "Yes, SignTrack provides nationwide coverage across Pakistan. We have service centers and support teams in major cities including Islamabad, Lahore, Karachi, and many other locations."
    },
    {
      question: "What kind of customer support does SignTrack offer?",
      answer: "SignTrack provides 24/7 customer support through multiple channels including phone, email, and live chat. Our dedicated support team is always available to assist you with any questions or technical issues."
    }
  ];

  const services = [
    {
      icon: faBuilding,
      title: "Real Time Tracking Experience",
      description: "Experience real-time vehicle tracking with our advanced GPS technology, providing instant location updates and comprehensive monitoring capabilities."
    },
    {
      icon: faCar,
      title: "24/7 Control Room Monitoring",
      description: "Our dedicated control room operates 24/7 to monitor your vehicles, providing round-the-clock security and support for your peace of mind."
    },
    {
      icon: faRocket,
      title: "Fastest Tech Communication System",
      description: "Benefit from our cutting-edge communication technology that ensures fast, reliable, and secure data transmission for optimal tracking performance."
    },
    {
      icon: faGlobe,
      title: "Presence around Pakistan",
      description: "With nationwide coverage and local support teams across Pakistan, we provide comprehensive service and support wherever you are."
    },
    {
      icon: faCog,
      title: "Qualified & Tested Hardware",
      description: "Our tracking devices are built with high-quality, tested components to ensure reliability, durability, and optimal performance in all conditions."
    },
    {
      icon: faKey,
      title: "Key Services",
      description: "Access a comprehensive suite of tracking services including geofencing, alerts, reports, and mobile app integration for complete vehicle management."
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "Rs 14,000",
      amf: "PKR 8,000",
      features: [
        "24/7 Control Room Monitoring",
        "Real time tracking",
        "Nationwide Tracking",
        "Web Access Portal",
        "Mobile App IOS/Android",
        "Share Track Via Web & Mobile App",
        "Standard Geo-Fencing Call",
        "Customized Geo-Fencing Call",
        "Battery Tempering Call",
        "Battery Temper Alert on App",
        "300+ Cities Exit Alerts on App",
        "300+ Cities Entrance Alerts on App",
        "Ignition On/Off Alerts on App",
        "Over Speed Alerts on APP",
        "Hourly Status Alerts on App",
        "Route Deviation Alerts on App",
        "Daily, Weekly & Monthly Basic Movement/Activity Report (6 Months)",
        "Video Playback History (6 Months)",
        "Drive & Stop Report (6 Months)",
        "Average Fuel Consumption (6 Months)",
        "Geo-Fence Summary (6 Months)",
        "Mileage Report (6 Months)",
        "Running Report (6 Months)",
        "Trip Report (6 Months)",
        "Park Report (6 Months)",
        "Ignition On/Off Report (6 Months)",
        "Excessive Idling Report (6 Months)",
        "Schedule Email Reports",
        "Multi-Layer Maps",
        "Periodic Maintenance",
        "Location on Demand",
        "Assistance in Theft Case",
        "Engine Kill/Release Via Control Room and Mobile App",
        "Illegal Ignition on Alert",
        "Navigation on Demand",
        "Fast Update Interval",
        "Custom settings",
        "Engine Tuning Reminder",
        "Oil Change Reminder",
        "Voice Listening",
        "Door Open Alert",
        "Panic Button",
        "Towing Detection",
        "Moving Analytics",
        "Harsh Cornering",
        "Harsh Braking",
        "Harsh Acceleration",
        "High Surveillance"
      ]
    },
    {
      name: "Standard",
      price: "Rs 21,000",
      amf: "PKR 10,000",
      recommended: true,
      features: [
        "All Basic Plan Features",
        "Extended Data Retention (12 Months)",
        "Enhanced Reporting Capabilities",
        "Advanced Analytics",
        "Priority Customer Support",
        "Custom Alerts Configuration",
        "Fleet Management Features",
        "Advanced Geofencing",
        "Detailed Performance Reports",
        "Fuel Efficiency Analytics",
        "Driver Behavior Monitoring",
        "Maintenance Scheduling",
        "Route Optimization",
        "Cost Analysis Reports",
        "Real-time Notifications",
        "Emergency Response Support",
        "Insurance Integration",
        "Compliance Reporting",
        "Custom Dashboard",
        "API Access",
        "Bulk Operations",
        "Advanced Security Features",
        "Backup Systems",
        "24/7 Technical Support"
      ]
    },
    {
      name: "Premium",
      price: "Rs 28,000",
      amf: "PKR 12,000",
      features: [
        "All Standard Plan Features",
        "Extended Data Retention (3 Years)",
        "Enterprise-level Support",
        "Custom Integration",
        "Dedicated Account Manager",
        "Advanced Analytics Platform",
        "Custom Development",
        "White-label Solutions",
        "Advanced Security Protocols",
        "Compliance Management",
        "Risk Assessment Tools",
        "Predictive Analytics",
        "Machine Learning Insights",
        "Custom Reporting Engine",
        "Multi-tenant Architecture",
        "Advanced API Access",
        "Custom Mobile Apps",
        "Integration Support",
        "Training Programs",
        "Consultation Services",
        "Priority Response Times",
        "Custom Alerts Engine",
        "Advanced Geofencing",
        "Comprehensive Audit Trail"
      ]
    }
  ];

  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "How Car Tracking Data Can Improve Urban Planning in Pakistan",
      excerpt: "Discover how GPS tracking data is revolutionizing urban planning and traffic management across Pakistan's major cities."
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "The Ultimate Guide To Live Tracking in Pakistan",
      excerpt: "Everything you need to know about real-time vehicle tracking technology and its applications in Pakistan."
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      title: "The Ultimate Guide to Bike Tracker Prices in Pakistan",
      excerpt: "Complete pricing guide for motorcycle tracking solutions and the best options available in Pakistan."
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Drive Safe, Protect your Ride with GPS Tracker</h1>
                <p>Leading car tracker company in Pakistan providing cutting-edge solutions for vehicle safety and real-time monitoring.</p>
                <div className="hero-buttons">
                  <Link to="/features" className="btn btn-primary">View Features</Link>
                  <Link to="/pricing" className="btn btn-secondary">Get Pricing</Link>
                </div>
              </div>
              <div className="hero-form">
                <div className="form-header">
                  <FontAwesomeIcon icon={faCar} className="form-icon" />
                  <h3>Get Started Today</h3>
                </div>
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Full Name*" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Phone Number*" required />
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="">Choose Plan*</option>
                      <option value="car-tracking">Car Tracking</option>
                      <option value="bike-tracking">Bike Tracking</option>
                      <option value="fleet-management">Fleet Management</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Message" rows="4"></textarea>
                  </div>
                  <button type="submit" className="btn btn-submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Sign Track</h2>
              <h3>Drive Safe, Protect your Ride with GPS Tracker</h3>
              <p>SignTrack is a leading car tracker company in Pakistan, specializing in cutting-edge car tracker solutions for vehicle safety and real-time monitoring. We provide comprehensive GPS tracking services that help you protect your valuable assets.</p>
              <p>Why Choose SignTrack? We offer 24/7 support, nationwide coverage, and powerful mobile app integration. Our solutions use the latest GPS/GSM technology to provide accurate, real-time tracking information.</p>
              <p>Affordable Car Tracker Price in Pakistan - We believe that vehicle security should be accessible to everyone. That's why we offer competitive pricing and tailored plans to meet your specific needs.</p>
              
              <div className="progress-bars">
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Tracking Solutions</span>
                    <span>99%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '99%'}}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Services</span>
                    <span>98%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '98%'}}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-label">
                    <span>24/7 Support</span>
                    <span>98%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '98%'}}></div>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="btn btn-primary">More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <div className="services-title">
              <span className="section-subtitle">Our Services</span>
              <h2>What Service We Offer</h2>
            </div>
            <div className="services-intro">
              <p>Sign Track Pvt Ltd Company excels all the other service providers in the GPS tracker fraternity.</p>
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            </div>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card ${index === 1 ? 'highlighted' : ''}`}>
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <h2>Car Tracker Price in Pakistan</h2>
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
                {plan.recommended && <div className="recommended-badge">RECOMMENDED</div>}
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="amf">(Next year AMF will be {plan.amf})</span>
                  </div>
                </div>
                <div className="plan-features">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                      <FontAwesomeIcon icon={faCheck} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="btn btn-order">ORDER NOW</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-left">
              <h2>Why <span className="highlight">Choose Us</span></h2>
              <p>When it comes to vehicle security, SignTrack stands out as the best car tracker company in Pakistan and here's why:</p>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Trusted by Thousands Across Pakistan</span>
                </div>
                <div className="benefit-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Affordable Car Tracker Price in Pakistan</span>
                </div>
                <div className="benefit-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>24/7 Control Room & Customer Support</span>
                </div>
                <div className="benefit-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Latest GPS/GSM Technology</span>
                </div>
                <div className="benefit-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Engine Kill & Anti-Theft Features</span>
                </div>
                <div className="benefit-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Nationwide Installation & Support</span>
                </div>
              </div>
              
              <div className="progress-bars">
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Savings</span>
                    <span>85%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Quality</span>
                    <span>95%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="progress-item">
                  <div className="progress-label">
                    <span>Services</span>
                    <span>80%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="why-choose-right">
              <div className="expertise-grid">
                <div className="expertise-card">
                  <div className="expertise-icon">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <h4>Expert Engineers</h4>
                  <p>Highly skilled engineers with extensive expertise and experience.</p>
                </div>
                <div className="expertise-card highlighted">
                  <div className="expertise-icon">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <h4>Experience Skills</h4>
                  <p>Proficient professionals with a wealth of practical expertise.</p>
                </div>
                <div className="expertise-card">
                  <div className="expertise-icon">
                    <FontAwesomeIcon icon={faShieldAlt} />
                  </div>
                  <h4>Guarantee Service</h4>
                  <p>Assured satisfaction through our reliable and trustworthy service.</p>
                </div>
                <div className="expertise-card">
                  <div className="expertise-icon">
                    <FontAwesomeIcon icon={faHandshake} />
                  </div>
                  <h4>Trusted Work</h4>
                  <p>Dependable and reputable work you can rely on.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call Back & Testimonials Section */}
      <section className="callback-testimonials">
        <div className="container">
          <div className="callback-testimonials-content">
            <div className="callback-section">
              <div className="callback-background">
                <h3>Request A Call Back</h3>
                <form className="callback-form">
                  <div className="form-group">
                    <input type="text" placeholder="Name*" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Phone Number*" required />
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="car-tracking">Car Tracking</option>
                      <option value="bike-tracking">Bike Tracking</option>
                      <option value="fleet-management">Fleet Management</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Message" rows="4"></textarea>
                  </div>
                  <button type="submit" className="btn btn-send">Send</button>
                </form>
              </div>
            </div>
            
            <div className="testimonials-section">
              <h3>What Client Say About Us</h3>
              <div className="testimonial-content">
                <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                <p>I've been using the car tracking service from Signtrack for the past year and it has been a game changer for my business. Not only can I see the real-time location of my fleet, but the detailed reports have helped me optimize routes and reduce fuel costs.</p>
                <div className="client-info">
                  <div className="client-avatar">UZ</div>
                  <span className="client-name">Usama Zafar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>FREQUENTLY ASKED <span className="highlight">QUESTION</span></h2>
          <div className="faq-grid">
            <div className="faq-column">
              {faqs.slice(0, 6).map((faq, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-question" onClick={() => toggleFAQ(index)}>
                    <span>{faq.question}</span>
                    <FontAwesomeIcon icon={activeFAQ === index ? faChevronUp : faChevronDown} />
                  </div>
                  {activeFAQ === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="faq-column">
              {faqs.slice(6).map((faq, index) => (
                <div key={index + 6} className="faq-item">
                  <div className="faq-question" onClick={() => toggleFAQ(index + 6)}>
                    <span>{faq.question}</span>
                    <FontAwesomeIcon icon={activeFAQ === index + 6 ? faChevronUp : faChevronDown} />
                  </div>
                  {activeFAQ === index + 6 && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="latest-posts-section">
        <div className="container">
          <div className="posts-header">
            <h2>LATEST POSTS</h2>
          </div>
          <div className="posts-grid">
            {blogPosts.map((post, index) => (
              <div key={index} className="post-card">
                <div className="post-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to="/blog" className="read-more">
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 