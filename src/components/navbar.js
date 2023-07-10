import React, { useState } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <img
        alt={props.image_alt2}
        src={props.image_src2}
        className="navbar-image"
      />
      <div className="navbar-nav-content">
        <div className="navbar-nav-links">
          <a href="#HowItWorks" className="navbar-link nav-link" onClick={closeMenu}>
            How It Works
          </a>
          <a href="#Features" className="navbar-link01 nav-link" onClick={closeMenu}>
            <span className="">Features</span>
            <br className=""></br>
          </a>
          <a href="#Pricing" className="navbar-link02 nav-link" onClick={closeMenu}>
            Pricing
          </a>
          <a
            href="https://mailto:pointikico@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="navbar-link03 nav-link"
            onClick={closeMenu}
          >
            Contact Us
          </a>
        </div>
        <a href="#GetStarted" className="navbar-link04">
          <div className="navbar-get-started get-started">
            <span className="navbar-text2">Get started</span>
          </div>
        </a>
        <div id="open-mobile-menu" className="navbar-hamburger get-started" onClick={toggleMenu}>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-image1"
          />
        </div>
      </div>
      <div id="mobile-menu" className={`navbar-mobile-menu ${isOpen ? 'open' : 'closed'}`}>
        <div className="navbar-branding">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="navbar-image"
          />
          <div id="close-mobile-menu" className="navbar-container">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path
                d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="navbar-nav-links1">
          <a href="#HowItWorks" className="navbar-link05 nav-link mobile-menu-item">
            {props.HowItWorksLink}
          </a>
          <a href="#Features" className="navbar-link06 nav-link mobile-menu-item">
            {props.FeaturesLink}
          </a>
          <a href="#Pricing" className="navbar-link07 nav-link mobile-menu-item">
            {props.PricingLink}
          </a>
          <a
            href="https://mailto:pointikico@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="navbar-link08 nav-link mobile-menu-item"
          >
            {props.ContactUsLink}
          </a>
        </div>
        <a href="#GetStarted" className="navbar-link09">
          <div className="navbar-get-started1 get-started">
            <span className="navbar-text3">Get started</span>
          </div>
        </a>
      </div>
      <div className="">
        <Script
          html={`<script>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
          className=""
        ></Script>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  image_alt: 'image',
  image_src1: '/external/logo.png',
  image_src: '/Icons/hamburger-200h.png',
  text: 'Pointiki',
  image_alt1: 'image',
  image_alt2: 'image',
  image_src2: '/external/logo.png',
  rootClassName: '',
  image_alt3: 'image',
  image_src3: '/external/logo.png',
  BrandingLogo: '/external/logo.png',
  HowItWorksLink: 'How It Works',
  FeaturesLink: 'Features',
  PricingLink: 'Pricing',
  ContactUsLink: 'Contact Us',
}

Navbar.propTypes = {
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src3: PropTypes.string,
  image_alt2: PropTypes.string,
  image_src2: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt3: PropTypes.string,
  BrandingLogo: PropTypes.string,
  HowItWorksLink: PropTypes.string,
  FeaturesLink: PropTypes.string,
  PricingLink: PropTypes.string,
  ContactUsLink: PropTypes.string,
}

export default Navbar