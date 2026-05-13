import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const releases = [
  { code: 'NR001', title: 'Coming Soon', artist: 'Notrite Recordings' },
  { code: 'NR002', title: 'Future Drop', artist: 'TBA' },
  { code: 'NR003', title: 'Underground Cuts', artist: 'TBA' },
  { code: 'NR004', title: 'Pressure Series', artist: 'TBA' }
];

function App() {
  return (
    <main className="site">
      <header className="topbar">
        <a href="#home" className="brand">
          <span className="brand-nr">NR</span>
          <span className="brand-name">Notrite<br />Recordings</span>
        </a>
        <nav>
          <a href="#home">Home</a>
          <a href="#releases">Releases</a>
          <a href="#merch">Merch</a>
          <a href="#demos">Demo Submissions</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="kicker">Independent Music Label</p>
          <h1>No Rules.<span>No Limits.</span><strong>Just Music.</strong></h1>
          <p className="intro">
            Notrite Recordings is an independent label pushing underground sounds,
            future artists and music culture without boundaries.
          </p>
          <div className="actions">
            <a className="button primary" href="#releases">Latest Release →</a>
            <a className="button ghost" href="#demos">Demo Submissions</a>
          </div>
        </div>

        <div className="hero-logo">
          <img src="/assets/notrite-logo-full.png" alt="Notrite Recordings logo" />
          <div className="logo-fallback">NR<br /><small>Notrite Recordings</small></div>
        </div>
      </section>

      <section className="featured">
        <div className="cover">
          <img src="/assets/nr-logo.png" alt="NR logo" />
          <div>
            <p>NR001</p>
            <h2>First Release</h2>
            <span>Coming Soon</span>
          </div>
        </div>
        <div className="release-info">
          <p className="kicker">NR001</p>
          <h2>Notrite Launch Release</h2>
          <h3>Artist / Title TBA</h3>
          <p>
            Our first official release is coming soon. Expect underground energy,
            heavyweight production and forward-thinking music.
          </p>
          <div className="actions">
            <a className="button primary" href="#">Listen Soon</a>
            <a className="button ghost" href="#demos">Send Demo</a>
          </div>
        </div>
      </section>

      <section id="releases" className="grid-section">
        <div className="section-head">
          <h2>Latest Releases</h2>
          <a href="#">View all releases →</a>
        </div>
        <div className="release-grid">
          {releases.map((release) => (
            <article className="mini-card" key={release.code}>
              <div className="mini-art">
                <img src="/assets/nr-logo.png" alt="" />
                <span>NR</span>
              </div>
              <p>{release.code}</p>
              <h3>{release.title}</h3>
              <small>{release.artist}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="merch" className="split">
        <div>
          <h2>Merch Coming Soon</h2>
          <p>Shopify integration can be added later for tees, hoodies, caps, bags and vinyl drops.</p>
        </div>
        <div className="product-grid">
          {['Logo Tee', 'Drip Hoodie', 'Snapback', 'Side Bag'].map((item) => (
            <article key={item}>
              <div className="product-box">NR</div>
              <h3>{item}</h3>
              <small>Coming soon</small>
            </article>
          ))}
        </div>
      </section>

      <section id="demos" className="demos">
        <h2>Demo Submissions</h2>
        <p>Send music, links and enquiries directly to the right inbox.</p>
        <div className="email-buttons">
          <a href="mailto:demos@nrrecordings.com">demos@nrrecordings.com</a>
          <a href="mailto:bookings@nrrecordings.com">bookings@nrrecordings.com</a>
          <a href="mailto:info@nrrecordings.com">info@nrrecordings.com</a>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <form action="mailto:info@nrrecordings.com" method="post" encType="text/plain">
          <input name="name" placeholder="Your name" />
          <input name="email" placeholder="Your email" />
          <select name="enquiry">
            <option>General enquiry</option>
            <option>Demo submission</option>
            <option>Booking enquiry</option>
          </select>
          <textarea name="message" placeholder="Message / links / details" />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <strong>NR Notrite Recordings</strong>
        <p>© 2026 Notrite Recordings. All rights reserved.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
