import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const releases = [
  { code: 'NR001', title: 'Coming Soon', artist: 'Notrite Recordings' },
  { code: 'NR002', title: 'Future Drop', artist: 'TBA' },
  { code: 'NR003', title: 'Underground Cuts', artist: 'TBA' },
  { code: 'NR004', title: 'Pressure Series', artist: 'TBA' }
];

const artists = ['Roster', 'DJs', 'Producers', 'Vocalists', 'Collaborators'];

function NRMark({ className = '' }) {
  return <img className={`nr-mark ${className}`} src="/assets/nr-mark-purple.png" alt="NR" />;
}

function TextLogo() {
  return (
    <div className="text-logo">
      <NRMark />
      <div>
        <span className="notrite">NOTRITE</span>
        <span className="recordings">RECORDINGS</span>
      </div>
    </div>
  );
}

function MainLogo() {
  return (
    <div className="main-logo">
      <NRMark />
      <div className="main-logo-words">
        <span className="notrite">NOTRITE</span>
        <span className="recordings">RECORDINGS</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="site">
      <header className="topbar">
        <a href="#home" aria-label="Notrite Recordings home"><TextLogo /></a>
        <nav>
          <a href="#home">Home</a>
          <a href="#releases">Releases</a>
          <a href="#artists">Artists</a>
          <a href="#events">Events</a>
          <a href="#merch">Merch</a>
          <a href="#demos">Demo Submissions</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="icon-row">
          <a href="#" aria-label="Instagram">◎</a>
          <a href="#" aria-label="SoundCloud">☁</a>
          <a href="#" aria-label="Spotify">◉</a>
          <a href="#" aria-label="Cart">⌁</a>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-bg" />
        <div className="hero-copy">
          <p className="eyebrow">Independent Music Label</p>
          <h1>
            <span>No Rules.</span>
            <span>No Limits.</span>
            <strong>Just Music.</strong>
          </h1>
          <p>
            Notrite Recordings is an independent label pushing underground sounds,
            future artists and music culture without boundaries.
          </p>
          <div className="buttons">
            <a className="btn primary" href="#featured">Latest Release <span>→</span></a>
            <a className="btn ghost" href="#demos">Demo Submissions</a>
          </div>
          <a href="#featured" className="scroll">Scroll ↓</a>
        </div>

        <div className="hero-logo-wrap">
          <MainLogo />
        </div>
      </section>

      <section id="featured" className="featured">
        <div className="feature-cover">
          <NRMark />
          <div>
            <small>NR001</small>
            <h2>First Release</h2>
            <p>Coming Soon</p>
          </div>
        </div>

        <div className="feature-info">
          <small>NR001</small>
          <h2>Notrite Launch Release</h2>
          <h3>Artist / Title TBA</h3>
          <p>
            Our first official release is coming soon. Expect underground energy,
            heavyweight production and forward-thinking music.
          </p>
          <div className="platforms">
            <span>Spotify</span>
            <span>SoundCloud</span>
            <span>Bandcamp</span>
          </div>
          <div className="buttons">
            <a className="btn primary" href="#">Listen Soon →</a>
            <a className="btn ghost" href="#demos">Send Demo</a>
          </div>
        </div>

        <section id="artists" className="artists-panel">
          <div className="section-head compact">
            <h2>Our Artists</h2>
            <a href="#">Coming soon →</a>
          </div>
          <div className="artist-strip">
            {artists.map((artist) => (
              <article key={artist}>
                <div className="artist-placeholder">NR</div>
                <h3>{artist}</h3>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section id="releases" className="releases">
        <div className="section-head">
          <h2>Latest Releases</h2>
          <a href="#">View all releases →</a>
        </div>
        <div className="release-grid">
          {releases.map((release) => (
            <article className="release-card" key={release.code}>
              <div className="release-art">
                <NRMark />
              </div>
              <small>{release.code}</small>
              <h3>{release.title}</h3>
              <p>{release.artist}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lower-grid">
        <div id="merch" className="merch panel">
          <div className="section-head compact">
            <h2>Merch</h2>
            <a href="#">Shopify later →</a>
          </div>
          <div className="merch-grid">
            {['Logo Tee', 'Drip Hoodie', 'Snapback', 'Side Bag'].map((item) => (
              <article key={item}>
                <div className="product">NR</div>
                <h3>{item}</h3>
                <p>Coming soon</p>
              </article>
            ))}
          </div>
        </div>

        <div id="events" className="event panel">
          <div className="section-head compact">
            <h2>Next Event</h2>
          </div>
          <div className="event-card">
            <div className="date">
              <strong>TBA</strong>
              <span>2026</span>
            </div>
            <div>
              <h3>Notrite Takeover</h3>
              <p>Dates, tickets and line-up coming soon.</p>
              <a className="btn ghost small" href="#contact">More Info</a>
            </div>
          </div>
        </div>

        <div id="demos" className="signup panel">
          <div className="mail-icon">✉</div>
          <div>
            <h2>Stay In The Loop</h2>
            <p>Sign up for exclusive releases, events and merch drops.</p>
          </div>
          <form className="newsletter">
            <input placeholder="Enter your email" />
            <button type="button">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="about" className="about">
        <div>
          <p className="eyebrow">About Notrite Recordings</p>
          <h2>No rules. No limits. Built around music.</h2>
          <p>
            Notrite Recordings starts with drum and bass culture, but the label is
            built to move wherever the music takes it. Releases, collaborations,
            visuals, merch and events will grow from the same underground energy.
          </p>
        </div>
        <div className="about-logo"><MainLogo /></div>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Send us something</h2>
          <p>For now these go straight to your email addresses. A proper connected form can be added next.</p>
        </div>
        <div className="email-list">
          <a href="mailto:demos@nrrecordings.com">demos@nrrecordings.com</a>
          <a href="mailto:bookings@nrrecordings.com">bookings@nrrecordings.com</a>
          <a href="mailto:info@nrrecordings.com">info@nrrecordings.com</a>
        </div>
      </section>

      <footer className="footer">
        <TextLogo />
        <p>Independent music label supporting underground artists and pushing sound forward.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#releases">Releases</a>
          <a href="#merch">Merch</a>
          <a href="#demos">Demo Submissions</a>
          <a href="#contact">Contact</a>
        </div>
        <small>© 2026 Notrite Recordings. All rights reserved.</small>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
