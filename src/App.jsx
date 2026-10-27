import { useState } from 'react'
import dynashiftImage from './dynashift.png'
import companyLogo from './logo.png'
import './App.css'

const currentYear = new Date().getFullYear()

const steps = [
  {
    number: '01',
    title: 'Legge il movimento',
    description:
      'Un giroscopio rileva i movimenti del veicolo e fornisce al sistema i dati necessari per interpretare la curva.',
    tag: 'GIROSCOPIO',
  },
  {
    number: '02',
    title: 'Raccoglie i dati',
    description:
      'Il collegamento alla porta OBD fornisce informazioni come la velocità, così Dynashift può adattare la risposta.',
    tag: 'PORTA OBD',
  },
  {
    number: '03',
    title: 'Regola l’alettone',
    description:
      'Quattro attuatori verticali, uno per ogni angolo dell’ala, ne modificano la posizione in modo dinamico.',
    tag: '4 ATTUATORI',
  },
]

function ProductIllustration() {
  return (
    <svg
      className="product-fallback"
      viewBox="0 0 720 420"
      role="img"
      aria-label="Illustrazione tecnica segnaposto dell’alettone Dynashift"
    >
      <defs>
        <linearGradient id="wing" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#454943" />
          <stop offset="0.52" stopColor="#20231f" />
          <stop offset="1" stopColor="#111310" />
        </linearGradient>
        <linearGradient id="glow" x1="0" x2="1">
          <stop offset="0" stopColor="#c5f36a" stopOpacity=".1" />
          <stop offset=".5" stopColor="#c5f36a" stopOpacity=".95" />
          <stop offset="1" stopColor="#c5f36a" stopOpacity=".1" />
        </linearGradient>
      </defs>
      <ellipse cx="360" cy="345" rx="258" ry="28" fill="#000" opacity=".42" />
      <path d="M197 226 521 226 557 319 166 319Z" fill="#1a1c19" stroke="#565b52" strokeWidth="2" />
      <path d="M220 216 230 312M498 216 488 312M251 216 263 312M467 216 456 312" stroke="#858b7e" strokeWidth="7" />
      <path d="M110 171Q119 151 144 148L556 148Q587 151 601 171L571 224Q566 233 550 233H165Q148 233 141 221Z" fill="url(#wing)" stroke="#848b7b" strokeWidth="2" />
      <path d="M142 180Q158 166 178 166H553" fill="none" stroke="#c5f36a" strokeWidth="3" />
      <path d="M165 233 141 267 165 271 183 234M550 233 577 266 551 271 534 234" fill="#282b26" stroke="#686f61" strokeWidth="2" />
      <path d="M188 287H530" stroke="url(#glow)" strokeWidth="2" strokeDasharray="5 8" />
      <circle cx="230" cy="312" r="8" fill="#c5f36a" />
      <circle cx="488" cy="312" r="8" fill="#c5f36a" />
      <circle cx="263" cy="312" r="8" fill="#c5f36a" />
      <circle cx="456" cy="312" r="8" fill="#c5f36a" />
    </svg>
  )
}

function App() {
  const [imageUnavailable, setImageUnavailable] = useState(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inizio" aria-label="Astrakoon Dynamics, inizio">
          <img className="brand-emblem" src={companyLogo} alt="" />
          <span className="brand-name">
            ASTRAKOON
            <small>DYNAMICS</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Navigazione principale">
          <a href="#sistema">Il sistema</a>
          <a href="#funzionamento">Come funziona</a>
          <a className="nav-cta" href="#contatti">
            Contatti <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inizio">
          <div className="hero-copy">
            <p className="eyebrow"><span /> AERODINAMICA IN MOVIMENTO</p>
            <h1>
              La curva
              <br />
              cambia. <span>La tua</span>
              <br />
              aerodinamica
              <br />
              <span>anche.</span>
            </h1>
            <p className="hero-description">
              Dynashift è l’alettone dinamico che legge il comportamento del
              veicolo e si adatta alla strada, un movimento alla volta.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#sistema">
                Scopri Dynashift <span aria-hidden="true">↓</span>
              </a>
              <span className="hero-note">Progettato per seguire ogni traiettoria.</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Visualizzazione del prodotto Dynashift">
            <div className="visual-grid" aria-hidden="true" />
            <div className="visual-orbit orbit-one" aria-hidden="true" />
            <div className="visual-orbit orbit-two" aria-hidden="true" />
            <div className="visual-label label-top">
              <span className="status-dot" /> CONTROLLO DINAMICO
            </div>
            <div className="product-frame">
              {imageUnavailable ? (
                <ProductIllustration />
              ) : (
                <img
                  className="product-image"
                  src={dynashiftImage}
                  alt="Alettone dinamico Dynashift"
                  onError={() => setImageUnavailable(true)}
                />
              )}
            </div>
            <div className="visual-label label-bottom">
              <span>DS—01</span>
              <span>PROGETTO IN SVILUPPO</span>
            </div>
            {imageUnavailable && (
              <p className="image-note">Immagine prodotto da aggiornare</p>
            )}
            <span className="visual-coordinate coordinate-left" aria-hidden="true">45° 27′ N</span>
            <span className="visual-coordinate coordinate-right" aria-hidden="true">09° 11′ E</span>
          </div>
          <a className="scroll-cue" href="#sistema">
            SCORRI PER ESPLORARE <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="intro section-wrap" id="sistema">
          <div className="section-heading">
            <p className="eyebrow eyebrow-dark"><span /> IL PRODOTTO</p>
            <h2>
              Un’ala. <span>Quattro punti</span>
              <br />
              di controllo.
            </h2>
          </div>
          <div className="intro-copy">
            <p>
              Dynashift mette in relazione la dinamica dell’auto e la
              posizione dell’alettone. Quattro attuatori verticali, installati
              ai quattro angoli dell’ala, ne regolano il movimento in base alle
              informazioni raccolte a bordo.
            </p>
            <a className="text-link" href="#funzionamento">
              Il sistema, passo dopo passo <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="spec-strip" aria-label="Caratteristiche principali">
            <div>
              <strong>La centralina</strong>
              <span>Il cervello</span>
            </div>
            <div>
              <strong>Gli Attuatori</strong>
              <span>Le braccia</span>
            </div>
            <div>
              <strong>Una dashboard</strong>
              <span>La faccia</span>
            </div>
            <div>
            <strong>L'OBD e il giroscopio</strong>
              <span>Gli occhi</span>
            </div>
          </div>
        </section>

        <section className="how-section" id="funzionamento">
          <div className="section-wrap">
            <div className="how-heading">
              <div>
                <p className="eyebrow"><span /> COME FUNZIONA</p>
                <h2>
                  Dati in ingresso.
                  <br />
                  <span>Movimento consapevole.</span>
                </h2>
              </div>
              <p className="how-intro">
                Sensori e attuatori lavorano insieme per adattare l’alettone
                alle condizioni di guida.
              </p>
            </div>
            <div className="steps">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <div className="step-topline">
                    <span>{step.number}</span>
                    <span className="step-symbol" aria-hidden="true">
                      {step.number === '01' ? '⌁' : step.number === '02' ? '⌗' : '↕'}
                    </span>
                  </div>
                  <p className="step-tag">{step.tag}</p>
                  <h3>{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <div className="step-line" aria-hidden="true" />
                </article>
              ))}
            </div>
            <p className="system-note">
              <span aria-hidden="true">i</span>
              Logiche di controllo e parametri di intervento: dettagli in
              definizione.
            </p>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contatti">
          <div className="contact-kicker">
            <p className="eyebrow eyebrow-dark"><span /> IL PROSSIMO PASSO</p>
          </div>
          <div className="contact-content">
            <h2>
              L’aerodinamica
              <br />
              <span>si muove.</span>
            </h2>
            <p>
              Vuoi saperne di più sul progetto Dynashift?
            </p>
            <div className="contact-placeholders">
              <span>Email <strong>astrakoon@proton.me</strong></span>
              <span>Telefono <strong>+39 334 856 2337</strong></span>
            </div>
          </div>
          <div className="contact-aside" aria-hidden="true">
            <span className="contact-ring" />
            <span className="contact-arrow">↗</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inizio">
          <img className="brand-emblem" src={companyLogo} alt="" />
          <span className="brand-name">ASTRAKOON<small>DYNAMICS</small></span>
        </a>
        <span>© {currentYear} Astrakoon Dynamics</span>
        <span>Dynashift — progetto in sviluppo</span>
      </footer>
    </>
  )
}

export default App
