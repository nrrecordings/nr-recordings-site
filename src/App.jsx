import { Instagram, Music2, Mail, Radio, ShoppingBag, CalendarDays, ArrowRight, Play } from 'lucide-react'

const socials = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'SoundCloud', href: '#', icon: Radio },
  { label: 'Spotify', href: '#', icon: Music2 },
]

const releases = [
  { code: 'NR001', title: 'Coming Soon', artist: 'Notrite Recordings' },
  { code: 'NR002', title: 'Future Drop', artist: 'TBA' },
  { code: 'NR003', title: 'Underground Cuts', artist: 'TBA' },
  { code: 'NR004', title: 'Pressure Series', artist: 'TBA' },
]

const merch = ['Logo Tee', 'Drip Hoodie', 'Snapback', 'Side Bag']

function Logo({ small = false }) {
  return <div className={small ? 'logo small' : 'logo'}><img src="/assets/notrite-logo-full.png" alt="Notrite Recordings logo" /></div>
}

export default function App() {
  return (
    <main className="site">
      <div className="grain" />
      <header className="topbar">
        <a href="#home" aria-label="Notrite Recordings home"><Logo small /></a>
        <nav className="navlinks" aria-label="Main navigation">
          <a href="#home">Home</a><a href="#releases">Releases</a><a href="#merch">Merch</a><a href="#about">About</a><a href="#demos">Demo Submissions</a><a href="#contact">Contact</a>
        </nav>
        <div className="socials">
          {socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} aria-label={label}><Icon size={18} /></a>)}
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-bg" /><div className="hero-shade" />
        <div className="hero-copy">
          <p className="kicker">Independent Music Label</p>
          <h1>No Rules.<span>No Limits.</span><strong>Just Music.</strong></h1>
          <p className="intro">Notrite Recordings is an independent label pushing underground sounds, future artists and music culture without boundaries.</p>
          <div className="actions"><a className="button primary" href="#releases">Latest Release <ArrowRight size={16} /></a><a className="button ghost" href="#demos">Demo Submissions</a></div>
          <a href="#featured" className="scroll-cue">Scroll <span>⌄</span></a>
        </div>
        <div className="hero-logo"><img src="/assets/notrite-logo-full.png" alt="Notrite Recordings" /></div>
      </section>

      <section id="featured" className="featured">
        <div className="vinyl-wrap"><div className="cover-art"><img src="/assets/nr-logo.png" alt="NR logo" /><div><span>NR001</span><h2>First Release</h2><p>Coming Soon</p></div></div><div className="vinyl" /></div>
        <div className="release-info"><p className="code">NR001</p><h2>Notrite Launch Release</h2><h3>Artist / Title TBA</h3><p>Our first official release is coming soon. Expect underground energy, heavyweight production and forward-thinking music.</p><div className="actions compact"><a className="button primary" href="#">Listen Soon <Play size={14} /></a><a className="button ghost" href="#demos">Send Demo</a></div><div className="platforms"><span>Spotify</span><span>SoundCloud</span><span>Bandcamp</span></div></div>
      </section>

      <section id="releases" className="panel-grid">
        <div className="panel releases-panel"><div className="panel-heading"><h2>Latest Releases</h2><a href="#">View all releases <ArrowRight size={14} /></a></div><div className="release-grid">{releases.map((release) => <article key={release.code} className="mini-release"><div className="mini-art"><img src="/assets/nr-logo.png" alt="" /></div><p>{release.code}</p><h3>{release.title}</h3><span>{release.artist}</span></article>)}</div></div>
        <div className="panel artist-panel"><div className="panel-heading"><h2>Artists</h2><a href="#">Coming soon <ArrowRight size={14} /></a></div><div className="artist-placeholders">{['Roster','DJs','Producers','Vocalists'].map((item)=><div key={item}><img src="/assets/nr-logo.png" alt="" /><span>{item}</span></div>)}</div></div>
        <div id="merch" className="panel merch-panel"><div className="panel-heading"><h2>Merch</h2><a href="#">Shopify later <ArrowRight size={14} /></a></div><div className="merch-grid">{merch.map((item)=><article key={item}><div className="mock-product"><ShoppingBag size={34}/></div><h3>NR {item}</h3><p>Coming soon</p></article>)}</div></div>
        <div className="panel event-panel"><div className="panel-heading"><h2>Next Event</h2></div><div className="event-card"><CalendarDays size={32}/><div><h3>Notrite Takeover</h3><p>Dates and line-up coming soon.</p><a className="button ghost small-button" href="#contact">More Info</a></div></div></div>
      </section>

      <section id="about" className="about"><div><p className="kicker">About Notrite Recordings</p><h2>Independent. Underground. Built to grow.</h2><p>Notrite Recordings starts with drum and bass culture, but the label is built to move wherever the music takes it. No rigid genre rules. No limits. Just music.</p></div><img src="/assets/nr-logo.png" alt="NR" /></section>

      <section id="demos" className="signup"><div className="mail-splash"><Mail size={42}/></div><div><h2>Demo Submissions</h2><p>Send music, links and enquiries directly to the right inbox.</p></div><div className="email-buttons"><a href="mailto:demos@nrrecordings.com">demos@nrrecordings.com</a><a href="mailto:bookings@nrrecordings.com">bookings@nrrecordings.com</a><a href="mailto:info@nrrecordings.com">info@nrrecordings.com</a></div></section>

      <section id="contact" className="contact"><div className="panel-heading"><h2>Contact</h2><p>Form integration can be added next using a free form service.</p></div><form action="mailto:info@nrrecordings.com" method="post" encType="text/plain"><input name="name" placeholder="Your name"/><input name="email" placeholder="Your email"/><select name="enquiry"><option>General enquiry</option><option>Demo submission</option><option>Booking enquiry</option></select><textarea name="message" placeholder="Message / links / details"/><button type="submit">Send Message</button></form></section>

      <footer className="footer"><Logo small/><p>Independent music label supporting underground artists and pushing sound forward.</p><div><a href="#">Instagram</a><a href="#">SoundCloud</a><a href="#">Spotify</a><a href="#">YouTube</a></div><small>© 2026 Notrite Recordings. All rights reserved.</small></footer>
    </main>
  )
}
