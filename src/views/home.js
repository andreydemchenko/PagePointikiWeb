import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Includes from '../components/includes'
import Excludes from '../components/excludes'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Planical modern template</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <span className="home-caption">
                  Empowering Institutions to Engage and Motivate Students in a
                  Fun and Innovative Way!
                </span>
                <h1 className="home-heading">
                  Transform Learning with Gamification!
                </h1>
              </header>
            </main>
          </div>
          <div className="home-image">
            <img
              alt="pastedImage"
              src="/external/pastedimage-eom-900w.png"
              className="home-pasted-image"
            />
          </div>
        </div>
      </section>
      <section id="HowItWorks" className="home-section01">
        <h2 className="home-text">How It Works</h2>
        <h2 className="home-heading01">
          Simplified Steps to Amplified Engagement
        </h2>
        <div className="home-container01">
          <img
            alt="pastedImage"
            src="/external/pastedimage-94ik-1500w.png"
            className="home-pasted-image01"
          />
          <div className="home-container02">
            <span className="home-text01">Initial Setup</span>
            <span className="home-text02">
              <span>
                Begin by registering your institution. Customize achievement
                badges, set up class schedules, and plan events
              </span>
              <br></br>
            </span>
            <span className="home-text05">
              Engage &amp; Encourage Participation
            </span>
            <span className="home-text06">
              Now comes the fun part! Your students earn points for class
              attendance, participating in contests, clubs, Olympiads, and more.
              Every activity is a chance to earn points, motivating students to
              engage more actively 
            </span>
          </div>
        </div>
        <img
          alt="pastedImage"
          src="/external/pastedimage-g4e-200w.png"
          className="home-pasted-image02"
        />
        <div className="home-container03">
          <div className="home-container04">
            <img
              alt="pastedImage"
              src="/external/pastedimage-rzev-300w.png"
              className="home-pasted-image03"
            />
            <img
              alt="pastedImage"
              src="/external/pastedimage-hjmc-300w.png"
              className="home-pasted-image04"
            />
          </div>
          <div className="home-container05">
            <span className="home-text07">Reward Achievements</span>
            <span className="home-text08">
              Points earned can be exchanged in online store. Choose from
              virtual goods to upgrade avatars, or tangible merchandise like
              your organization&apos;s swag. Every point earned is a step closer
              to a reward, boosting enthusiasm and participation
            </span>
            <span className="home-text09">Monitor &amp; Improve</span>
            <span className="home-text10">
              <span>
                {' '}
                Publish upcoming events, manage the online store, and facilitate
                communication through group and individual chats
              </span>
              <br></br>
              <br></br>
            </span>
          </div>
        </div>
      </section>
      <section className="home-section02">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left side"></div>
        </div>
        <main className="home-banner">
          <div className="home-header01">
            <h2 className="section-heading home-heading02">
              Start your journey with us today
            </h2>
            <p className="home-description section-description">
              Let&apos;s revolutionize the way your students learn and interact
            </p>
          </div>
          <div className="home-buttons">
            <a href="#GetStarted" className="home-link">
              <div className="home-get-started button">
                <span className="home-text14">Get started</span>
              </div>
            </a>
          </div>
        </main>
      </section>
      <section id="Features" className="home-section03">
        <header className="home-header02">
          <h2 className="home-text15">Features</h2>
          <span className="home-text16">
            Feature-packed to Amplify Engagement!
          </span>
        </header>
        <section className="home-note">
          <div className="home-image1">
            <img
              alt="pastedImage"
              src="/external/pastedimage-tjst-1000w.png"
              className="home-pasted-image05"
            />
          </div>
          <div className="home-content1">
            <div className="home-main1">
              <div className="home-caption1">
                <span className="home-section04 section-head">
                  no more manual tracking of visits
                </span>
              </div>
              <div className="home-heading03">
                <h2 className="section-heading">
                  Automatic attendance tracking
                </h2>
                <p className="section-description">
                  Our platform doesn&apos;t just make learning fun, it makes
                  administration efficient. Student attendance is recorded by
                  scanning  QR-codes of events.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-note1">
          <div className="home-image2">
            <img
              alt="pastedImage"
              src="/external/pastedimage-bi0a-1100w.png"
              className="home-pasted-image06"
            />
          </div>
          <div className="home-content2">
            <main className="home-main2">
              <header className="home-caption2">
                <span className="home-section05 section-head">
                  Recognition that Inspires
                </span>
              </header>
              <main className="home-heading05">
                <header className="home-header03">
                  <h2 className="section-heading">Achievement Badges</h2>
                  <p className="section-description">
                    Awarding students for different milestones, whether
                    it&apos;s a certain number of class visits, active
                    participation, or winning competitions. Every badge earned
                    is a testament to their hard work and progress
                  </p>
                </header>
              </main>
            </main>
          </div>
        </section>
        <section className="home-note2">
          <div className="home-image3">
            <img
              alt="pastedImage"
              src="/external/pastedimage-g4e-200w-200w.png"
              className="home-pasted-image07"
            />
            <img
              alt="pastedImage"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/af4e078b-11f4-4d37-8bf3-5490d07791c5/9989569f-5c54-4be9-bae2-5f3b00974c67?org_if_sml=120008"
              className="home-pasted-image08"
            />
            <img
              alt="pastedImage"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/af4e078b-11f4-4d37-8bf3-5490d07791c5/34156a64-c7b2-426c-94b6-4dbf930fde85?org_if_sml=120008"
              className="home-pasted-image09"
            />
          </div>
          <div className="home-content3">
            <div className="home-main3">
              <div className="home-caption3">
                <span className="home-section06 section-head">
                  a new dimension 
                </span>
              </div>
              <div className="home-heading07">
                <h2 className="section-heading">In-app Currency</h2>
                <p className="section-description">
                  Our unique in-app currency system rewards students for
                  participating in classes, contests, clubs, Olympiads, and
                  more. Each activity comes with a chance to earn points -
                  &quot;pointiki&quot;, transforming the educational process
                  into a rewarding journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-note3">
          <div className="home-image4">
            <img
              alt="pastedImage"
              src="/external/pastedimage-gc0q-200w.png"
              className="home-pasted-image10"
            />
          </div>
          <div className="home-content4">
            <main className="home-main4">
              <header className="home-caption4">
                <span className="home-section07 section-head">leaderboard</span>
              </header>
              <main className="home-heading09">
                <header className="home-header04">
                  <h2 className="section-heading">
                    An exciting layer of competition
                  </h2>
                  <p className="section-description">
                    It showcases students&apos; rankings based on points earned,
                    with the top three on a pedestal. This healthy competition
                    fosters motivation and pushes students to participate more
                    actively
                  </p>
                </header>
              </main>
            </main>
          </div>
        </section>
      </section>
      <section className="home-section08">
        <div className="home-cube1">
          <div className="home-top1 side"></div>
          <div className="home-front1 side"></div>
          <div className="home-left1 side"></div>
        </div>
        <main id="Pricing" className="home-pricing">
          <header className="home-header05">
            <header className="home-left2">
              <span className="home-section09 section-head">Pricing</span>
              <h2 className="home-heading11 section-heading">
                Jumpstart your gamified education journey
              </h2>
            </header>
            <div className="home-right"></div>
          </header>
          <div className="home-plans-container">
            <main className="home-plans">
              <div className="home-plan">
                <div className="home-details">
                  <div className="home-header06">
                    <label className="home-name">Basic</label>
                    <div className="home-pricing1">
                      <h1 className="home-price">$100</h1>
                      <span className="home-duration">/mo</span>
                    </div>
                  </div>
                  <p className="home-description1">
                    Perfect for small institutions looking to enhance student
                    engagement
                  </p>
                </div>
                <div className="home-buy-details">
                  <a href="#GetStarted" className="home-link1">
                    <div className="home-buy button">
                      <span className="home-text17">
                        <span>Start Basic</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <div className="home-features">
                    <span className="home-heading12">You will get</span>
                    <div className="home-list">
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes
                        Label="In-app Currency"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Achievement Badges"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="QR Check-In"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Excludes
                        Label="Leaderboard"
                        rootClassName="excludes-root-class-name"
                      ></Excludes>
                      <Excludes
                        Label="Online Store"
                        rootClassName="excludes-root-class-name"
                      ></Excludes>
                      <Excludes
                        Label="Enhanced Administrator Tools"
                        rootClassName="excludes-root-class-name"
                      ></Excludes>
                      <Excludes
                        Label="Multi-office support"
                        rootClassName="excludes-root-class-name"
                      ></Excludes>
                      <Excludes
                        Label="Priority support"
                        rootClassName="excludes-root-class-name"
                      ></Excludes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-details1">
                  <div className="home-header07">
                    <label className="home-name1">Professional</label>
                    <div className="home-pricing2">
                      <h1 className="home-price1">$150</h1>
                      <span className="home-duration1">/mo</span>
                    </div>
                  </div>
                  <p className="home-description2">
                    <span>Ideal for medium-sized institutions</span>
                    <br></br>
                    <br></br>
                  </p>
                </div>
                <div className="home-buy-details1">
                  <a href="#GetStarted" className="home-link2">
                    <div className="home-buy1 button">
                      <span className="home-text23">
                        <span>Start Professional</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <div className="home-features1">
                    <span className="home-heading13">You will get</span>
                    <div className="home-list1">
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes
                        Label="In-app Currency"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Achievement Badges"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="QR Check-In"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Leaderboard"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Online Store"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Enhanced Administrator Tools"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Excludes
                        Label="Multi-office support"
                        rootClassName="excludes-root-class-name"
                      ></Excludes>
                      <Excludes
                        Label="Priority support"
                        rootClassName="excludes-root-class-name"
                      ></Excludes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-details2">
                  <div className="home-header08">
                    <label className="home-name2">Enterprise</label>
                    <div className="home-pricing3">
                      <span className="home-price2">$250</span>
                      <span className="home-duration2">/mo</span>
                    </div>
                  </div>
                  <p className="home-description3">
                    <span>
                      Our most comprehensive plan for large institutions
                    </span>
                    <br></br>
                  </p>
                </div>
                <div className="home-buy-details2">
                  <a href="#GetStarted" className="home-link3">
                    <div className="home-buy2 button">
                      <span className="home-text28">
                        <span>Start Enterprise</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <div className="home-features2">
                    <span className="home-heading14">You will get</span>
                    <div className="home-list2">
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes
                        Label="In-app Currency"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Achievement Badges"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="QR Check-In"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Leaderboard"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Online Store"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Enhanced Administrator Tools"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Multi-office support"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                      <Includes
                        Label="Priority support"
                        rootClassName="includes-root-class-name"
                      ></Includes>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
        <div className="home-help">
          <span className="home-text31">
            <span>Need any help?</span>
            <br></br>
          </span>
          <div className="home-contact-support">
            <p className="home-text34">Contact support -&gt;</p>
          </div>
        </div>
      </section>
      <div id="GetStarted" className="home-container06">
        <h2 className="home-heading15 section-heading">
          Let&apos;s Get Started
        </h2>
        <div className="home-container07">
          <div className="home-container08">
            <span className="home-text35">
              <span>
                Please provide your email address so we can get back to you
              </span>
              <br></br>
            </span>
            <input
              type="text"
              placeholder="Your Email"
              className="home-textinput input"
            />
          </div>
          <div className="home-container09">
            <span className="home-text38">
              <span>Tell Us About Your Institution</span>
              <br></br>
            </span>
            <textarea
              placeholder="Provide a brief description of your organization. Include any specific goals, needs, or questions you might have"
              className="home-textarea textarea"
            ></textarea>
          </div>
        </div>
        <div className="home-buy3 button">
          <span className="home-text41">Submit</span>
          <span className="home-text42">Submit</span>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-content5">
          <main className="home-main-content">
            <div className="home-content6">
              <header className="home-main5">
                <div className="home-header09">
                  <span className="home-text43 footer-header">Pointiki</span>
                  <span className="home-text44">
                    Transform Learning with Gamification!
                  </span>
                </div>
              </header>
              <div className="home-socials">
                <a
                  href="https://linkedin.com/company/96213822"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link4"
                >
                  <img
                    alt="image"
                    src="/Icons/linkedin-200h.png"
                    className="social"
                  />
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link5"
                >
                  <img
                    alt="image"
                    src="/Icons/instagram-200h.png"
                    className="social"
                  />
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link6"
                >
                  <img
                    alt="image"
                    src="/Icons/twitter-200h.png"
                    className="social"
                  />
                </a>
              </div>
              <div className="home-container10">
                <p className="home-text45">Contact support </p>
                <a
                  href="https://mailto::pointikico@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link7"
                >
                  pointikico@gmail.com
                </a>
              </div>
            </div>
            <section className="home-copyright">
              <span className="home-text46">© 2023. All Rights Reserved.</span>
            </section>
          </main>
          <section className="home-copyright1">
            <span className="home-text47">© 2023 All Rights Reserved.</span>
          </section>
        </div>
      </footer>
      <div>
        <Script
          html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
        ></Script>
      </div>
    </div>
  )
}

export default Home
