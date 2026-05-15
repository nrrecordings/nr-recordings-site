import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const releases = [
  { code: 'NRR001', title: 'All In My Head EP', artist: 'MARK XTC X MISTAFIL', tag: 'Drum & Bass', status: 'Coming Soon', image: '/assets/release-mm-all-in-my-head.jpg' },
  { code: 'NRR002', title: 'Shadows EP', artist: 'KVRN', tag: 'Dark Rollers', status: 'TBA', image: '/assets/release-shadows.jpg' },
  { code: 'NRR003', title: 'Pressure', artist: 'DYLX', tag: 'Deep / Tech', status: 'TBA', image: '/assets/release-pressure.jpg' },
  { code: 'NRR004', title: 'System Error EP', artist: 'RAVEN', tag: 'Bass / Halftime', status: 'TBA', image: '/assets/release-system-error.jpg' }
];

const artists = [
  { name: 'KVRN', sound: 'Dark rolling DnB', image: '/assets/artist-kvrn.jpg' },
  { name: 'DYLX', sound: 'Tech-driven pressure', image: '/assets/artist-dylx.jpg' },
  { name: 'RAVEN', sound: 'Halftime / experimental', image: '/assets/artist-raven.jpg' },
  { name: 'VEXTA', sound: 'Atmospheric bass music', image: '/assets/artist-vexta.jpg' },
  { name: 'SUBSTRIKE', sound: 'Warehouse rollers', image: '/assets/artist-substrike.jpg' },
  { name: 'SYNAPTIK', sound: 'Minimal future sounds', image: '/assets/artist-synaptik.jpg' }
];

const merch = [
  { name: 'NR Logo Hoodie - Black', price: '£49.50', image: '/assets/merch-logo-hoodie-black.jpg' },
  { name: 'NR Recordings Hoodie - Back Print', price: '£54.00', image: '/assets/merch-backprint-hoodie.jpg' },
  { name: 'NR Logo Hoodie - Ash Grey', price: '£49.50', image: '/assets/merch-logo-hoodie-grey.jpg' },
  { name: 'Logo Tee', price: '£22.50', image: '/assets/merch-logo-tee.jpg' },
  { name: 'NR Snapback', price: '£19.80', image: '/assets/merch-snapback.jpg' }
];

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
        <div className="release-art feature-art first-release-art">
          <img src="/assets/release-mm-all-in-my-head.jpg" alt="MARK XTC X MISTAFIL - All In My Head EP artwork" />
        </div>

        <div className="release-info first-release-info">
          <small>NRR001 / FIRST RELEASE</small>
          <h2>All In My Head EP</h2>
          <h3>MARK XTC X MISTAFIL</h3>
          <p>
            MARK XTC and MISTAFIL join forces for the first official Notrite Recordings release:
            a powerhouse Drum & Bass EP featuring <strong>All In My Head</strong> and
            <strong> Thinkin Bout You</strong>. Rolling energy, euphoric hooks and heavyweight
            production from two respected names in the scene.
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
            <a href="#">View roster →</a>
          </div>
          <div className="artist-strip">
            {artists.slice(0, 5).map((artist) => (
              <article key={artist.name}>
                <img src={artist.image} alt={artist.name} />
                <div>
                  <h3>{artist.name}</h3>
                  <p>{artist.sound}</p>
                </div>
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
            <article className={`release-tile ${index === 0 ? 'real-first-release' : ''}`} key={release.code}>
              <div className="mini-art">
                <img src={release.image} alt={`${release.title} artwork`} />
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
            <a href="#">Shopify Later →</a>
          </div>
          <div className="merch-grid">
            {merch.map((item) => (
              <article key={item.name}>
                <div className="product">
                  <img src={item.image} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
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
              <p>Secret warehouse location. Dates, tickets and line-up coming soon.</p>
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
            to move wherever the music takes it. Releases, collaborations, visuals,
            merch and events all grow from the same underground energy.
          </p>
        </div>
        <MainLogo />
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Send Us Something</h2>
          <p>For demos, bookings, collaborations and label enquiries, contact the team.</p>
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
