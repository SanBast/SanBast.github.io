import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  FileText,
  Github,
  Linkedin,
  Menu,
  Music2,
  X,
} from 'lucide-react';
import ResearchField from './components/ResearchField';
import SegmentationViewer from './components/SegmentationViewer';
import nnqcFigure from './assets/nnqc-figure.png';

const publications = [
  {
    year: '2026',
    title: 'Diffusion-Based Quality Control of Medical Image Segmentations across Organs',
    venue: 'IEEE Transactions on Medical Imaging',
    status: 'Published',
    href: 'https://arxiv.org/abs/2511.09588',
  },
  {
    year: '2026',
    title: 'Retrieval-Augmented Correction for Generalist Medical Image Segmentation',
    venue: 'Transactions on Machine Learning Research (TMLR)',
    status: 'Under review',
  },
  {
    year: '2026',
    title: 'Mask-Image Distributional Divergence for Evaluating Image Segmentation',
    venue: 'NeurIPS 2026',
    status: 'Under review',
  },
  {
    year: '2025',
    title: 'Divergence-Aware Training with Automatic Subgroup Mitigation for Breast Tumor Segmentation',
    venue: 'MICCAI Workshop',
    status: 'Best Paper Award',
    href: 'https://hal.science/hal-05251649v1/file/publi-8347.pdf',
  },
  {
    year: '2024',
    title: 'HyperMM: Robust Multimodal Learning with Varying-Sized Inputs',
    venue: 'MICCAI Workshop',
    status: 'Best Paper Award',
    href: 'https://arxiv.org/abs/2407.20768',
  },
];

const experience = [
  {
    period: 'Jun 2026 to Present',
    role: 'Applied Scientist Intern',
    company: 'Amazon Alexa',
    location: 'Turin, Italy',
    detail:
      'Stress-testing non-stationarity in agentic LLM routing and developing adaptive bandit-based routing strategies.',
  },
  {
    period: 'Jan 2026 to May 2026',
    role: 'Data and Research Scientist',
    company: 'LexSA',
    location: 'Milan, Italy',
    detail:
      'Built retrieval and agentic systems across 1.2 million public legal documents, improving retrieval accuracy by 50%.',
  },
  {
    period: 'Sep 2023 to May 2026',
    role: 'Doctoral Researcher',
    company: 'EURECOM AI4Health',
    location: 'Biot, France',
    detail:
      'Developed diffusion-based quality control, segmentation refinement, and multimodal medical imaging frameworks.',
  },
  {
    period: 'Sep 2022 to Mar 2023',
    role: 'Applied Scientist Intern',
    company: 'Amazon',
    location: 'Barcelona, Spain',
    detail:
      'Designed time-domain embeddings for multivariate forecasting, reducing WAPE by 30% across vendor datasets.',
  },
];

const education = [
  {
    period: '2017 to 2020',
    title: 'BSc in Electronics Engineering',
    institution: 'Politecnico di Torino',
    detail: 'GPA 3.0 / 4.0',
  },
  {
    period: '2020 to 2022',
    title: 'MSc in Data Science and Engineering',
    institution: 'Politecnico di Torino',
    detail: 'GPA 3.8 / 4.0. Thesis exchange at the University of Sheffield in 2022.',
  },
  {
    period: '2023 to 2026',
    title: 'PhD in AI and Computer Science',
    institution: 'Sorbonne University',
    detail:
      'Research in medical imaging, multimodal learning, and reliable AI systems. Defense: September 2026.',
  },
  {
    period: '2023 to 2026',
    title: 'Visiting Researcher',
    institution: "King's College London",
    detail: 'School of Biomedical Engineering and Imaging Sciences.',
  },
];

const navItems = [
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Practice', href: '#practice' },
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="Vincenzo Marcianò, home">
          VM
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav-cv" href="/Vincenzo-Marciano-CV.pdf" target="_blank">
            <Download size={16} aria-hidden="true" />
            CV
          </a>
        </nav>

        <button
          type="button"
          className="menu-button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="/Vincenzo-Marciano-CV.pdf" target="_blank" onClick={() => setMenuOpen(false)}>
            Download CV
          </a>
        </nav>
      </header>

      <main id="main">
        <section id="top" className="hero">
          <ResearchField />
          <div className="hero-wash" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">AI Research Scientist and Engineer</p>
            <h1>Vincenzo Marcianò</h1>
            <p className="hero-statement">
              My research focuses on reliable AI systems for agentic routing and medical imaging.
            </p>
            <p className="hero-copy">
              I currently work on adaptive benchmarks, diffusion models, multimodal learning, and
              research software.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                View research
                <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href="/Vincenzo-Marciano-CV.pdf" target="_blank">
                <Download size={18} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-context">
            <span>Applied Scientist Intern, Amazon Alexa</span>
            <span>PhD Researcher, Sorbonne University</span>
            <span>Visiting Researcher, King&apos;s College London</span>
          </div>
        </section>

        <section className="impact-band" aria-label="Selected impact">
          <div className="impact-grid">
            <div>
              <strong>15%</strong>
              <span>average gain across medical imaging frameworks</span>
            </div>
            <div>
              <strong>30%</strong>
              <span>lower forecasting error at Amazon</span>
            </div>
            <div>
              <strong>1.2M</strong>
              <span>legal documents embedded and retrieved</span>
            </div>
            <div>
              <strong>2</strong>
              <span>best paper awards at MICCAI workshops</span>
            </div>
          </div>
        </section>

        <section id="research" className="section research-section">
          <div className="section-inner">
            <div className="section-heading reveal">
              <p className="section-index">01 / Selected research</p>
              <h2>Selected research projects.</h2>
              <p>
                These projects cover medical image quality control, multimodal learning, and
                adaptive routing for agentic systems.
              </p>
            </div>

            <article className="case-study case-study-nnqc reveal">
              <div className="case-copy">
                <div className="case-meta">
                  <span>Medical imaging</span>
                  <span>IEEE TMI 2026</span>
                </div>
                <h3>nnQC: quality control that adapts across organs</h3>
                <p>
                  A model- and metric-agnostic framework that uses latent diffusion to reconstruct
                  reliable pseudo-ground truths from imperfect segmentations. A Team of Experts
                  combines anatomical image features with 3D spatial context.
                </p>
                <dl className="case-results">
                  <div>
                    <dt>7</dt>
                    <dd>organs</dd>
                  </div>
                  <div>
                    <dt>15</dt>
                    <dd>datasets</dd>
                  </div>
                  <div>
                    <dt>4</dt>
                    <dd>imaging techniques</dd>
                  </div>
                </dl>
                <div className="case-links">
                  <a
                    href="https://robustml-eurecom.github.io/nnQC/"
                    target="_blank"
                    rel="noreferrer">
                    <ArrowUpRight size={17} aria-hidden="true" />
                    Project page and demo
                  </a>
                  <a href="https://arxiv.org/abs/2511.09588" target="_blank" rel="noreferrer">
                    <FileText size={17} aria-hidden="true" />
                    Paper
                  </a>
                  <a
                    href="https://github.com/robustml-eurecom/nnQC"
                    target="_blank"
                    rel="noreferrer">
                    <Github size={17} aria-hidden="true" />
                    Code
                  </a>
                </div>
              </div>
              <SegmentationViewer />
            </article>

            <figure className="research-figure reveal">
              <img
                src={nnqcFigure}
                alt="nnQC comparison of learned latent manifolds and reconstructed cardiac segmentations"
              />
              <figcaption>
                Learned normative manifolds and reconstructed pseudo-ground truths from a
                low-quality cardiac segmentation.
              </figcaption>
            </figure>

            <article className="case-study case-study-routing reveal">
              <div className="routing-panel" aria-label="Adaptive model routing diagram">
                <div className="routing-head">
                  <span>Router state</span>
                  <strong>Shift detected</strong>
                </div>
                <div className="routing-flow">
                  <div className="route-source">Query</div>
                  <div className="route-core">Bandit router</div>
                  <div className="route-targets">
                    <span className="route-active">Model A</span>
                    <span>Model B</span>
                    <span>Model C</span>
                  </div>
                </div>
                <div className="routing-metrics">
                  <div>
                    <span>API calls</span>
                    <strong>-10%</strong>
                  </div>
                  <div>
                    <span>Regret</span>
                    <strong>-10%</strong>
                  </div>
                </div>
              </div>
              <div className="case-copy">
                <div className="case-meta">
                  <span>Agentic AI</span>
                  <span>Research in progress</span>
                </div>
                <h3>Routing LLMs when the world does not stand still</h3>
                <p>
                  Benchmarks and adaptive routing methods for agentic systems under
                  non-stationarity. The work studies adversarial shifts, measures how current
                  routing methods degrade, and develops bandit strategies that adapt with lower
                  operational cost.
                </p>
                <ul className="case-points">
                  <li>Adversarial stress tests for dynamic agent environments</li>
                  <li>Multi-arm bandit routing with lower API use and regret</li>
                  <li>Up to 30% degradation exposed in state-of-the-art routers</li>
                </ul>
              </div>
            </article>

            <div className="research-briefs reveal" aria-label="Other current research">
              <article className="research-brief">
                <div className="case-meta">
                  <span>Medical imaging</span>
                  <span>TMLR submission</span>
                </div>
                <h3>Retrieval-augmented segmentation correction</h3>
                <p>
                  GRACE retrieves relevant reference cases to refine weak predictions from
                  generalist medical image segmentors. The method is evaluated across CT, MRI, and
                  ultrasound data.
                </p>
                <dl className="brief-results">
                  <div>
                    <dt>18</dt>
                    <dd>datasets</dd>
                  </div>
                  <div>
                    <dt>7</dt>
                    <dd>segmentors</dd>
                  </div>
                  <div>
                    <dt>+0.35</dt>
                    <dd>DSC on weak segmentations</dd>
                  </div>
                </dl>
              </article>

              <article className="research-brief">
                <div className="case-meta">
                  <span>Evaluation</span>
                  <span>NeurIPS submission</span>
                </div>
                <h3>Segmentation evaluation without paired ground truth</h3>
                <p>
                  MID compares joint image-mask distributions using learned embeddings and
                  Wasserstein distance, providing a distribution-level view of segmentation
                  quality when paired annotations are unavailable.
                </p>
                <dl className="brief-results">
                  <div>
                    <dt>13</dt>
                    <dd>datasets</dd>
                  </div>
                  <div>
                    <dt>56</dt>
                    <dd>organ groups</dd>
                  </div>
                  <div>
                    <dt>3</dt>
                    <dd>imaging modalities</dd>
                  </div>
                </dl>
              </article>
            </div>

            <div className="more-work reveal">
              <div className="more-work-intro">
                <p className="section-index">Open source and applied projects</p>
                <h3>Other work and contributions.</h3>
              </div>
              <a
                className="work-row"
                href="https://kempnerinstitute.github.io/overcomplete"
                target="_blank"
                rel="noreferrer">
                <span className="work-number">A</span>
                <span>
                  <strong>Overcomplete</strong>
                  <small>Vision-based sparse autoencoder toolbox, Harvard Kempner Institute</small>
                </span>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <div className="work-row">
                <span className="work-number">B</span>
                <span>
                  <strong>Agentic fiscal intelligence</strong>
                  <small>RAG and online tools across 1.2 million legal documents at LexSA</small>
                </span>
                <span className="work-result">+50% retrieval</span>
              </div>
            </div>
          </div>
        </section>

        <section id="publications" className="section publications-section">
          <div className="section-inner">
            <div className="section-heading section-heading-split reveal">
              <div>
                <p className="section-index">02 / Publications</p>
                <h2>Selected publications.</h2>
              </div>
              <a
                className="text-link"
                href="https://scholar.google.com/citations?user=Ga_uQ98AAAAJ"
                target="_blank"
                rel="noreferrer">
                Google Scholar
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="publication-list reveal">
              {publications.map((publication) => {
                const content = (
                  <>
                    <span className="publication-year">{publication.year}</span>
                    <span className="publication-title">
                      <strong>{publication.title}</strong>
                      <small>{publication.venue}</small>
                    </span>
                    <span className="publication-status">{publication.status}</span>
                    {publication.href && <ArrowUpRight size={19} aria-hidden="true" />}
                  </>
                );

                return publication.href ? (
                  <a
                    key={publication.title}
                    className="publication-row"
                    href={publication.href}
                    target="_blank"
                    rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={publication.title} className="publication-row">
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-inner">
            <div className="section-heading reveal">
              <p className="section-index">03 / Experience</p>
              <h2>Research and industry experience.</h2>
            </div>

            <div className="experience-list">
              {experience.map((item, index) => (
                <article className="experience-row reveal" key={`${item.company}-${item.period}`}>
                  <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="experience-period">{item.period}</span>
                  <div>
                    <h3>{item.role}</h3>
                    <p className="experience-company">
                      {item.company} <span>{item.location}</span>
                    </p>
                    <p className="experience-detail">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section education-section">
          <div className="section-inner">
            <div className="section-heading reveal">
              <p className="section-index">04 / Education</p>
              <h2>Education.</h2>
            </div>

            <div className="education-timeline reveal">
              {education.map((item, index) => (
                <article className="education-step" key={`${item.title}-${item.institution}`}>
                  <span className="education-period">{item.period}</span>
                  <span className="education-marker" aria-hidden="true" />
                  <div className="education-content">
                    <span className="education-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{item.title}</h3>
                    <p className="education-institution">{item.institution}</p>
                    <p className="education-detail">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="practice" className="section practice-section">
          <div className="section-inner">
            <div className="section-heading practice-heading reveal">
              <p className="section-index">05 / Beyond research</p>
              <h2>Community and creative work.</h2>
              <p>
                Alongside research, I contribute to educational access and independent cultural
                projects, and I make music and digital drawings.
              </p>
            </div>

            <div className="practice-grid">
              <a
                className="practice-item reveal"
                href="https://visionaps.org/"
                target="_blank"
                rel="noreferrer">
                <span className="practice-kicker">Leadership / Education</span>
                <h3>Head of Tech at Vision APS</h3>
                <p>
                  Supporting scholarships, mentorship, and career access for talented students
                  across social and geographic barriers.
                </p>
                <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                className="practice-item reveal"
                href="https://seeleaps.com/"
                target="_blank"
                rel="noreferrer">
                <span className="practice-kicker">Leadership / Culture</span>
                <h3>Vice President at Seele APS</h3>
                <p>
                  Promoting independent festivals and cultural projects rooted in Salento.
                </p>
                <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <div className="creative-strip reveal">
              <div className="sound-wave" aria-hidden="true">
                {Array.from({ length: 18 }, (_, index) => (
                  <span key={index} style={{ height: `${18 + ((index * 17) % 58)}%` }} />
                ))}
              </div>
              <div className="creative-copy">
                <span className="practice-kicker">Creative practice</span>
                <h3>Sound and digital drawing</h3>
              </div>
              <div className="creative-links">
                <a
                  href="https://soundcloud.com/user-189800668"
                  target="_blank"
                  rel="noreferrer">
                  <Music2 size={18} aria-hidden="true" />
                  SoundCloud
                </a>
                <a
                  href="https://www.instagram.com/_oznec/"
                  target="_blank"
                  rel="noreferrer">
                  @_oznec
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-inner contact-inner reveal">
            <p className="section-index">06 / Contact</p>
            <h2>Contact.</h2>
            <p>
              For research discussions, collaborations, or questions about the work shown here,
              feel free to reach me by email or find me on these platforms.
            </p>
            <a className="button button-light" href="mailto:marcianovincenzomv@gmail.com">
              Email me
              <ArrowRight size={19} aria-hidden="true" />
            </a>
            <div className="contact-links">
              <a href="https://github.com/SanBast" target="_blank" rel="noreferrer">
                <Github size={17} aria-hidden="true" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mrcvcn/" target="_blank" rel="noreferrer">
                <Linkedin size={17} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href="https://scholar.google.com/citations?user=Ga_uQ98AAAAJ"
                target="_blank"
                rel="noreferrer">
                <FileText size={17} aria-hidden="true" />
                Google Scholar
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Vincenzo Marcianò</strong>
          <span>Personal portfolio</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/SanBast" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/mrcvcn/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn">
            <Linkedin aria-hidden="true" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=Ga_uQ98AAAAJ"
            target="_blank"
            rel="noreferrer"
            aria-label="Google Scholar">
            <FileText aria-hidden="true" />
          </a>
        </div>
        <span>Last updated August 2026</span>
      </footer>
    </>
  );
};

export default App;
