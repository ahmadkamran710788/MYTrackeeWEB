import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSatellite, 
  faMapMarkedAlt, 
  faPowerOff, 
  faShieldAlt,
  faClock,
  faMap,
  faBell,
  faPhone,
  faBatteryFull,
  faTachometerAlt,
  faCar,
  faExclamationTriangle,
  faCarCrash,
  faHandcuffs,
  faCarSide,
  faRocket,
  faSignal,
  faEnvelope,
  faLightbulb,
  faCrosshairs,
  faCog,
  faVolumeUp,
  faPhoneVolume,
  faExclamationCircle,
  faLightbulb as faFlashlight,
  faThermometerHalf,
  faUser,
  faGlobe,
  faMobile,
  faUsers,
  faPhoneAlt,
  faChevronLeft,
  faChevronRight,
  faFileAlt,
  faCloud,
  faCheckCircle,
  faAnchor
} from '@fortawesome/free-solid-svg-icons';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: faSatellite,
      title: "REAL-TIME TRACKING",
      description: "Continuous monitoring and instant updates of live data, providing dynamic insights and precise information."
    },
    {
      icon: faPowerOff,
      title: "ENGINE KILL",
      description: "Disabling Power: Exploring the Function and Impact of an 'Engine Kill' Switch in Modern Vehicles"
    },
    {
      icon: faClock,
      title: "REPORTS & HISTORY",
      description: "Exploring past events and documented accounts to gain insights into historical context and trends."
    },
    {
      icon: faShieldAlt,
      title: "SAFETY ALARMS",
      description: "Safeguarding with Vigilance: Essential Safety Alarms for Timely Threat Detection and Response in Any Setting."
    },
    {
      icon: faMap,
      title: "GEO-FENCE AREA",
      description: "Defining Virtual Boundaries: Geo-Fence Area for Precise Location-Based Control and Notifications."
    },
    {
      icon: faBell,
      title: "DIRECT SMS ALERTS",
      description: "Receive immediate text message notifications with important updates and information through our direct SMS alerts."
    },
    {
      icon: faPhone,
      title: "ROBOT CALL ALERTS",
      description: "Automated Notifications: Receive timely alerts and updates through efficient robot-driven calling technology"
    },
    {
      icon: faBatteryFull,
      title: "BACKUP BATTERY",
      description: "A secondary power source providing electricity during outages, ensuring uninterrupted device operation"
    },
    {
      icon: faTachometerAlt,
      title: "OVER-SPEED ALERT",
      description: "Over-speed alert: Safety system warning to prevent vehicles from exceeding safe speed limits, ensuring road safety"
    },
    {
      icon: faClock,
      title: "FAST UPDATE INTERVAL",
      description: "Minimal time between updates, ensuring real-time information and swift data refresh for optimal accuracy."
    },
    {
      icon: faCar,
      title: "ROUGH DRIVING CHECK",
      description: "Assessing vehicle operation for erratic behavior, potentially indicating unsafe or inexperienced driving practices. Monitoring road safety."
    },
    {
      icon: faShieldAlt,
      title: "ANTI-THEFT SENSOR",
      description: "Anti-theft sensors are security devices that detect and prevent unauthorized access or theft of valuable items."
    },
    {
      icon: faExclamationTriangle,
      title: "TOWING DETECTION",
      description: "Towing detection: Identifying and alerting when a vehicle is being towed without proper authorization or awareness."
    },
    {
      icon: faPowerOff,
      title: "ENGINE START ALERT",
      description: "Initiating Power: Engine Start Alert Signals the Commencement of Mechanical Motion and Operation."
    },
    {
      icon: faClock,
      title: "ENGINE IDLE RUN ALERT",
      description: "Warning: Engine in Idle State - Immediate Attention Needed to Prevent Issues or Damage."
    },
    {
      icon: faTachometerAlt,
      title: "APPROX FUEL USED",
      description: "Estimate of consumed fuel, typically in vehicles, represented as an approximation due to various factors."
    },
    {
      icon: faCarCrash,
      title: "ACCIDENT CRASH DETECTION",
      description: "Utilizing sensors and AI to swiftly identify and alert accidents for prompt response and enhanced safety."
    },
    {
      icon: faHandcuffs,
      title: "HARD BRAKING",
      description: "Hard braking: Sudden and forceful application of brakes, often leading to rapid vehicle deceleration and safety risks"
    },
    {
      icon: faCarSide,
      title: "DRIFITNG SLIDING HARD CORNERING",
      description: "Executing controlled slides while cornering sharply, showcasing impressive driving skills and vehicle control in challenging maneuvers."
    },
    {
      icon: faRocket,
      title: "HARD ACCELARATION",
      description: "Rapid and forceful increase in velocity, propelling an object or vehicle with intense forward motion."
    },
    {
      icon: faSignal,
      title: "ANTI JAMMER",
      description: "Anti-jammer technology prevents unauthorized signal interference, ensuring seamless communication and network reliability in various applications"
    },
    {
      icon: faEnvelope,
      title: "EMAIL ALERTS",
      description: "Stay informed and never miss important updates with our customizable and reliable email alerts service."
    },
    {
      icon: faLightbulb,
      title: "POWER SAVER",
      description: "Power Saver: Efficient solutions for energy conservation, reducing consumption without compromising performance or comfort"
    },
    {
      icon: faCrosshairs,
      title: "HIGH ACCURACY",
      description: "Precision-driven results achieved with remarkable accuracy through meticulous attention to detail and advanced technology."
    },
    {
      icon: faTachometerAlt,
      title: "AUTOMATIC SPEED LIMITER KIT",
      description: "An Automatic Speed Limiter Kit restricts vehicle speed, enhancing safety and adherence to speed regulations."
    },
    {
      icon: faVolumeUp,
      title: "REMOTE CONTROL BUZZER ALARM",
      description: "A wireless device for activating a buzzer alarm from a distance, providing convenient security management."
    },
    {
      icon: faPhoneVolume,
      title: "VOICE MONITORING ON CALL",
      description: "Real-time tracking and analysis of vocal interactions during calls for enhanced communication quality and training"
    },
    {
      icon: faPhoneVolume,
      title: "TWO-WAY CALLING SYSTEM",
      description: "Interactive communication setup enabling simultaneous audio exchange between two participants using voice-enabled technology."
    },
    {
      icon: faExclamationCircle,
      title: "SOS BUTTON",
      description: "SOS Button: Instantly signals emergency, seeking urgent help in critical situations for personal safety and assistance."
    },
    {
      icon: faFlashlight,
      title: "REMOTE CONTROL FLASHLIGHTS",
      description: "Wireless flashlights operated from a distance, providing convenient illumination and enhancing accessibility in various scenarios."
    },
    {
      icon: faThermometerHalf,
      title: "TEMPERATURE & HUMIDITY SENSORS",
      description: "Temperature & humidity sensors measure and monitor atmospheric conditions for various applications, ensuring accurate environmental control."
    },
    {
      icon: faUser,
      title: "PERSON TRACKER",
      description: "A person tracker is a tool or system designed to monitor and locate individuals' movements and positions."
    },
    {
      icon: faGlobe,
      title: "WEB APP",
      description: "Experience seamless user interactions and dynamic functionality with our innovative and user-friendly web app."
    },
    {
      icon: faMobile,
      title: "MOBILE APPS",
      description: "Convenient tools on the go: Explore, create, connect, and simplify with our diverse mobile app collection."
    },
    {
      icon: faCog,
      title: "CUSTOM SETTINGS",
      description: "Tailored Configuration: Personalized adjustments to optimize preferences, enhancing user experience and efficiency significantly."
    },
    {
      icon: faUsers,
      title: "MULTI-USERS",
      description: "Multi-users: Collaborate seamlessly as multiple users interact, share, and engage within a unified digital environment."
    }
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="container">
            <div className="hero-content">
              <h1>FEATURES</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="main-features">
        <div className="container">
          <div className="main-features-content">
            <div className="main-features-text">
              <h2>WE OFFER THE BEST SERVICE FOR YOU</h2>
              <p>MyTrackee Pvt Ltd Company excels all the other service providers in the GPS tracker fraternity.</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
            
            <div className="main-features-grid">
              <div className="main-feature-card">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faFileAlt} />
                </div>
                <h3>LIVE TRACKING 24/7</h3>
                <p>Continuous real-time monitoring all day, every day.</p>
              </div>
              
              <div className="main-feature-card">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faCloud} />
                </div>
                <h3>GEO-FENCE</h3>
                <p>Virtual Boundary: Geo-Fence Technology for Location-based Control</p>
              </div>
              
              <div className="main-feature-card">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faPowerOff} />
                </div>
                <h3>ENGINE KILL</h3>
                <p>Ceasing Power: Disabling the Engine for Immediate Halt</p>
              </div>
              
              <div className="main-feature-card">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h3>SAFETY ALERTS</h3>
                <p>Important Notifications for Your Personal and Environmental Safety</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Features Section */}
      <section className="all-features">
        <div className="container">
          <h2>OUR FEATURES</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <div className="container">
          <div className="carousel-container">
            <button className="carousel-arrow carousel-prev">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="carousel-image">
              <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Mercedes-Benz on coastal road" />
            </div>
            <button className="carousel-arrow carousel-next">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>GET OUR CORPORATE PACKAGES NOW</h2>
            <div className="cta-phone">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span>+92-309-5555213</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features; 