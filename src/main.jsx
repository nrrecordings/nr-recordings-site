import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const releases = [
  { code: 'NR001', title: 'Signal Pressure', artist: 'Notrite Recordings', tag: 'Liquid / Roller', status: 'Out Soon' },
  { code: 'NR002', title: 'After Hours', artist: 'NR Collective', tag: 'Deep / Vocal', status: 'Preview' },
  { code: 'NR003', title: 'Northbound', artist: 'Various Artists', tag: 'Jungle / Breaks', status: 'Pre-Save' },
  { code: 'NR004', title: 'No Limits', artist: 'Notrite Sessions', tag: 'Bass Music', status: 'Coming Soon' }
];

const artists = ['Roster', 'DJs', 'Producers', 'Vocalists', 'Collaborators'];

function NRMark({ className = '' }) {
  return <img className={`nr-mark ${className}`} src="/assets/nr-mark.png" alt="NR" />;
}

function BrandLogo() {
  return (
    <div className="brand-logo">
      <NRMark />
      <div className="brand-words">
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
      <div className="main-words">
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
        <a href="#home"><BrandLogo /></a>
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
        <div className="social-icons">
          <a href="#">◎</a>
          <a href="#">☁</a>
          <a href="#">◉</a>
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
          <p className="intro">
            Notrite Recordings is an independent label pushing underground sounds,
            future artists and music culture without boundaries.
          </p>
          <div className="buttons">
            <a className="btn primary" href="#featured">Latest Release →</a>
            <a className="btn ghost" href="#demos">Demo Submissions</a>
          </div>
        </div>

        <div className="hero-logo">
          <MainLogo />
        </div>
      </section>

      <section id="featured" className="featured">
        <div className="release-art feature-art">
          <NRMark />
          <div>
            <small>NR001</small>
            <h2>Signal Pressure</h2>
            <p>Out Soon</p>
          </div>
        </div>

        <div className="release-info">
          <small>NR001</small>
          <h2>Signal Pressure</h2>
          <h3>Notrite Recordings / Launch Drop</h3>
          <p>
            A heavyweight first drop built around underground pressure, rolling basslines
            and future-facing energy. Placeholder release content for launch preview.
          </p>
          <div className="platforms">
            <span>Spotify</span><span>SoundCloud</span><span>Bandcamp</span>
          </div>
          <div className="buttons">
            <a className="btn primary" href="#">Pre-Save Soon →</a>
            <a className="btn ghost" href="#demos">Send Demo</a>
          </div>
        </div>

        <div id="artists" className="artists">
          <div className="section-head">
            <h2>Our Artists</h2>
            <a href="#">Coming soon →</a>
          </div>
          <div className="artist-strip">
            {artists.map((artist) => (
              <article key={artist}>
                <span>NR</span>
                <h3>{artist}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="releases" className="releases">
        <div className="section-head">
          <h2>Latest Releases</h2>
          <a href="#">View all releases →</a>
        </div>
        <div className="release-grid">
          {releases.map((release, index) => (
            <article className={`release-tile release-${index + 1}`} key={release.code}>
              <div className="mini-art">
                <NRMark />
                <div className="art-noise" />
                <span>{release.status}</span>
              </div>
              <small>{release.code}</small>
              <h3>{release.title}</h3>
              <p>{release.artist}</p>
              <em>{release.tag}</em>
            </article>
          ))}
        </div>
      </section>

      <section className="lower">
        <div id="merch" className="panel">
          <div className="section-head">
            <h2>Merch</h2>
            <a href="#">Shopify later →</a>
          </div>
          <div className="merch-grid">
            {['Logo Tee','Drip Hoodie','Snapback','Side Bag'].map((item) => (
              <article key={item}>
                <div className="product">NR</div>
                <h3>{item}</h3>
                <p>Coming soon</p>
              </article>
            ))}
          </div>
        </div>

        <div id="events" className="panel event">
          <div className="section-head">
            <h2>Next Event</h2>
          </div>
          <div className="event-card">
            <div className="date">TBA<br /><span>2026</span></div>
            <div>
              <h3>Notrite Takeover</h3>
              <p>Dates, tickets and line-up coming soon.</p>
              <a className="btn ghost small" href="#contact">More Info</a>
            </div>
          </div>
        </div>

        <div id="demos" className="panel signup">
          <div className="mail-icon">✉</div>
          <div>
            <h2>Stay In The Loop</h2>
            <p>Sign up for releases, events and merch drops.</p>
          </div>
          <form>
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
            Notrite Recordings starts with drum and bass culture, but the label is built
            to move wherever the music takes it.
          </p>
        </div>
        <MainLogo />
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Send Us Something</h2>
          <p>These email links go straight to your Notrite inboxes.</p>
        </div>
        <div className="emails">
          <a href="mailto:demos@nrrecordings.com">demos@nrrecordings.com</a>
          <a href="mailto:bookings@nrrecordings.com">bookings@nrrecordings.com</a>
          <a href="mailto:info@nrrecordings.com">info@nrrecordings.com</a>
        </div>
      </section>

      <footer>
        <BrandLogo />
        <p>Independent music label supporting underground artists and pushing sound forward.</p>
        <small>© 2026 Notrite Recordings. All rights reserved.</small>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
