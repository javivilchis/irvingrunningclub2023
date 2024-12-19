//import logo from './logo.svg';
import React from 'react';
import irclogo from './irving-running-club-logo-white.svg'
import './App.css';

import Header from './components/Header';
import Marketing from './components/Marketing';
import About from './components/About';
import Footer from './components/Footer';
import Weather from './components/Weather';
import { useKonamiCode } from "./utility/useKonamiCode";
import Card from './components/Card';

function App() {
  const konami = useKonamiCode();
  const video = <iframe width="560" height="315" src="https://www.youtube.com/embed/uJEB_5rTfPA?si=i6-DZktI0JzEkQ5w&amp;start=934" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>;

  const logo = konami ? video : null;
  return (
    <div className="App">
      <Header />
      <useKonamiCode />
      <header className="App-header mt-5" style={{ backgroundImage: `linear-gradient(0deg, rgba(255 255 255 / 100%), rgba(18 37 74 / 70%)), url("/images/main_bck.jpeg")`, backgroundSize: 'cover' }}>
        <div className="container">
          <img src={irclogo} className="App-logo pt-2 pt-md-5" alt="logo" />
          <p className="py-5 display-5 masthead">
            <strong>Embracing exercise for a healthier lifestyle.</strong>
          </p>
          <div class="video">
            {logo}
          </div>
          <a
            className="mx-3 btn btn-darkprimary btn-lg shadow"
            href="https://www.facebook.com/groups/irvingrunningclub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit us on Facebook for running dates and times
          </a>

          <Weather />
        </div>

      </header>
      <main>
        <div className="container mb-5 pb-5">
          <Marketing />

        </div>
        <section style={{ minHeight: 600, backgroundImage: `linear-gradient(0deg, rgba(9 20 28/ 100%), rgba(9 20 28/ 70%)), url("/images/irving-marathon-pacers.jpeg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="container d-flex align-items-center">
            <About />
          </div>
        </section>
        <section class="container">
          <div class="row  my-3"><h2>Upcoming events around Irving</h2></div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
            <div class="col">
            <Card title="Running the Distance Series" img="https://rtdtexas.com/wp-content/uploads/2018/06/cropped-header2d.png" date="December" text="Running the Distance (RTD) offers a variety of marathon events designed to cater to runners aiming to qualify for the Boston Marathon. Their courses are certified and sanctioned by USA Track & Field (USATF), ensuring that performances meet the standards required for Boston Marathon qualification." link="https://rtdtexas.com/index.php/texas-double/" linkWeb="https://rtdtexas.com/" linkSignup="https://runsignup.com/Race/TX/Dallas/TexasDouble" />
            </div>
            <div class="col">
              <Card title="Irving Marathon Series" img="https://images.squarespace-cdn.com/content/v1/53456cfbe4b092b8f0186d1d/1f06d935-53ee-4103-b58d-179678823006/IMRS_IM2025_Web_3.png?format=1000w" date="December" text="The Irving Marathon Running Series, established in 2012, offers a diverse range of events throughout the year, catering to runners of all fitness levels. Key events include the Irving Marathon in the spring and the Irving Frost Marathon in the winter, both renowned for their fast, flat, and scenic courses, making them ideal qualifiers for the Boston Marathon." linkWeb="https://www.irvingmarathon.com/" linkSignup="https://runsignup.com/Race/TX/Irving/IrvingMarathon" />
            </div>
            <div class="col">
              <Card title="The Cowtown Marathon" img="https://cdn.prod.website-files.com/620acce4f43c52aa080fb863/6331fe92d03a1b1fbdfc15a3_cowtowncenter_logo-p-500.webp" date="December" text="The Cowtown combines your love of running, the excitement of racing, the joy of giving, and the culture of Fort Worth all together to make a race like no other. With so many distances to choose from — Half Marathon, Full Marathon, Ultra Marathon, Kids 5K, Adults 5K, and 10K — you're sure to find a race that's right for you. So sign up, lace up, and we'll meet you at the finish line." linkWeb="https://www.cowtownmarathon.org/" linkSignup="https://raceroster.com/events/2025/84964/the-2025-cowtown-race-weekend" />
            </div>
          </div>
        </section>
        <Footer />

      </main>

    </div>
  );
}

export default App;
