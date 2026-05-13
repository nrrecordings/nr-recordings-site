import { Mail, Music, ShoppingBag, Radio, Send } from 'lucide-react'

export default function App() {
  return (
    <main className="site">
      <div className="noise" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <header className="nav">
        <a href="#home" className="brand">
          <span className="brand-main">NR</span>
          <span className="brand-sub">Recordings</span>
        </a>

        <nav className="nav-links">
          <a href="#releases">Releases</a>
          <a href="#merch">Merch</a>
          <a href="#demos">Demos</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="mailto:info@nrrecordings.com">
          Email Us
        </a>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Drum & Bass / Underground Music / Label Culture</p>
          <h1>
            NR
            <span>Recordings</span>
          </h1>
          <p className="hero-text">
            A new drum and bass label built for heavyweight releases, future talent,
            underground energy and merch drops.
          </p>

          <div className="hero-actions">
            <a href="#demos" className="btn primary">Send Demos</a>
            <a href="#releases" className="btn secondary">View Releases</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="art-box">
            <div>
              <strong>NR</strong>
              <small>Recordings</small>
            </div>
          </div>
          <div className="drop-info">
            <div>
              <p>Next Drop</p>
              <h2>Coming Soon</h2>
            </div>
            <span>2026</span>
          </div>
        </div>
      </section>

      <section id="releases" className="section">
        <div className="section-heading">
          <p>Music</p>
          <h2>Releases</h2>
        </div>

        <div className="grid three">
          <article className="release-card active">
            <div className="release-art">
              <p>NR001</p>
              <h3>Coming Soon</h3>
            </div>
            <h3>First Release Incoming</h3>
            <p>Official NR Recordings release announcement coming soon.</p>
            <span>Announcement Soon</span>
          </article>

          <article className="empty-card">
            <Music size={42} />
            <h3>More Releases</h3>
            <p>Add real releases here when they are ready.</p>
          </article>

          <article className="empty-card">
            <Radio size={42} />
            <h3>Roster</h3>
            <p>Artist announcements can stay hidden until confirmed.</p>
          </article>
        </div>
      </section>

      <section id="merch" className="section merch">
        <div>
          <p className="eyebrow">Shop</p>
          <h2>Merch Coming Soon</h2>
          <p>
            This section is ready for future Shopify integration. Launch with a teaser now,
            then connect hoodies, tees, vinyl or digital drops when stock is ready.
          </p>
        </div>

        <div className="merch-grid">
          <div><ShoppingBag /></div>
          <div><ShoppingBag /></div>
          <div><ShoppingBag /></div>
          <div><ShoppingBag /></div>
        </div>
      </section>

      <section id="demos" className="section contact-section">
        <div className="section-heading center">
          <p>Submissions</p>
          <h2>Send Demos</h2>
          <span>
            For launch, these buttons open email. Later we can connect a proper form.
          </span>
        </div>

        <div className="grid three">
          <a href="mailto:info@nrrecordings.com" className="contact-card">
            <Mail />
            <p>General</p>
            <strong>info@nrrecordings.com</strong>
          </a>

          <a href="mailto:demos@nrrecordings.com" className="contact-card">
            <Send />
            <p>Demos</p>
            <strong>demos@nrrecordings.com</strong>
          </a>

          <a href="mailto:bookings@nrrecordings.com" className="contact-card">
            <Mail />
            <p>Bookings</p>
            <strong>bookings@nrrecordings.com</strong>
          </a>
        </div>
      </section>

      <section id="contact" className="section form-section">
        <div className="section-heading center">
          <p>Contact Form</p>
          <h2>Enquiries</h2>
          <span>
            This form is visual for now. We can connect it to Formspree or another free form service next.
          </span>
        </div>

        <form className="contact-form" action="mailto:info@nrrecordings.com" method="post" encType="text/plain">
          <input name="name" placeholder="Your name" />
          <input name="email" placeholder="Your email" />
          <select name="type">
            <option>General enquiry</option>
            <option>Demo submission</option>
            <option>Booking enquiry</option>
          </select>
          <textarea name="message" placeholder="Message / demo link / booking details" />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 NR Recordings. All rights reserved.</p>
        <p>Built for releases, demos, bookings and future merch.</p>
      </footer>
    </main>
  )
}
