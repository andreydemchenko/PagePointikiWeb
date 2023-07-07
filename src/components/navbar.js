import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <img
        alt={props.image_alt2}
        src={props.image_src2}
        className="navbar-image"
      />
      <div className="navbar-nav-content">
        <div className="navbar-nav-links">
          <a href="#HowItWorks" className="navbar-link nav-link">
            How It Works
          </a>
          <a href="#Features" className="navbar-link1 nav-link">
            <span className="">Features</span>
            <br className=""></br>
          </a>
          <a href="#Pricing" className="navbar-link2 nav-link">
            Pricing
          </a>
          <a
            href="https://mailto:pointikico@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
            className="navbar-link3 nav-link"
          >
            Contact Us
          </a>
        </div>
        <a href="#GetStarted" className="navbar-link4">
          <div className="navbar-get-started get-started">
            <span className="navbar-text2">Get started</span>
          </div>
        </a>
        <div id="open-mobile-menu" className="navbar-hamburger get-started">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navbar-image1"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile-menu">
        <div className="navbar-branding">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="navbar-image2"
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
          <span className="nav-link">Features</span>
          <span className="nav-link">Why us</span>
          <span className="nav-link">Prices</span>
          <span className="nav-link">Contact</span>
        </div>
        <div className="get-started">
          <span className="navbar-text3">Get started</span>
        </div>
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
  image_src1: '/Branding/planical7012-ttpb.svg',
  image_src: '/Icons/hamburger-200h.png',
  text: 'Pointiki',
  image_alt1: 'image',
  image_src3:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/af4e078b-11f4-4d37-8bf3-5490d07791c5/076775b8-3b0d-4439-bb9f-af6b89bd85e1?org_if_sml=180590',
  image_alt2: 'image',
  image_src2: '/external/fotor_2023-5-16_16_29_7-1500h-200h.png',
  rootClassName: '',
  image_alt3: 'image',
  BrandingLogo:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/08e9141c-e9e9-4d51-994d-22f260b21c68/0f4ac702-51a5-4a68-8182-06e3f427edb8?org_if_sml=14251',
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
}

export default Navbar
