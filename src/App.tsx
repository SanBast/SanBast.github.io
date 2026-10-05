import { useState } from 'react';
import { ChevronUp, Code, FileText, Github, GraduationCap, Globe, Linkedin, Mail, Quote } from 'lucide-react';
import teaserBreast from './assets/teaser-breast.jpg';
import teaserGrace from './assets/teaser-grace.jpg';
import teaserHypermm from './assets/teaser-hypermm.jpg';
import teaserMid from './assets/teaser-mid.jpg';
import teaserNnqc from './assets/teaser-nnqc.jpg';
import teaserSensors from './assets/teaser-sensors.jpg';
import teaserVascular from './assets/teaser-vascular.jpg';
import teaserVesselverse from './assets/teaser-vesselverse.jpg';

const EMAIL = 'marcianovincenzomv@gmail.com';
const CV_URL = '/Vincenzo-Marciano-CV.pdf';
const SCHOLAR = 'https://scholar.google.com/citations?user=Ga_uQ98AAAAJ';
const ME = 'V. Marcianò';

type NewsItem = { date: string; text: React.ReactNode };

const news: NewsItem[] = [
  {
    date: 'Sep 2026',
    text: (
      <>
        I successfully defended my PhD thesis, <em>Representation Learning for Medical Image Segmentation
        Quality</em>, at Sorbonne Université / EURECOM. Many thanks to my jury: Wenjia Bai, Aasa Feragen, Bernhard
        Kainz and Enzo Ferrante.
      </>
    ),
  },
  {
    date: 'Sep 2026',
    text: (
      <>
        <b>MID</b>, our reference-free metric for evaluating medical image segmentation, was accepted at{' '}
        <a href="https://neurips.cc">NeurIPS 2026</a>!
      </>
    ),
  },
  {
    date: 'Jun 2026',
    text: (
      <>
        I joined <a href="https://www.amazon.science/tag/alexa">Amazon Alexa AI</a> in Turin as an Applied
        Scientist II Intern, working on agentic LLM routing under non-stationarity.
      </>
    ),
  },
  {
    date: '2026',
    text: (
      <>
        <a href="https://robustml-eurecom.github.io/nnQC/">nnQC</a> was published in IEEE Transactions on Medical
        Imaging, and our paper on biological pretraining for vascular graph extraction was accepted at MICCAI 2026.
      </>
    ),
  },
  {
    date: 'Jan 2026',
    text: (
      <>
        I joined <a href="https://www.lexsa.ai/">LexSA</a> as a Data &amp; Research Scientist, building agentic
        retrieval tools over 1.2M legal documents.
      </>
    ),
  },
  {
    date: 'Sep 2025',
    text: 'Our work on divergence-aware training for breast tumor segmentation received the Best Paper Award at the Deep Breast Workshop, MICCAI 2025.',
  },
  {
    date: 'Oct 2024',
    text: 'HyperMM received the Best Presentation Award at the MMMI Workshop, MICCAI 2024.',
  },
  {
    date: 'Sep 2023',
    text: (
      <>
        I started my PhD at Sorbonne Université and EURECOM with funding from{' '}
        <a href="https://3ia.univ-cotedazur.eu/">3IA Côte d'Azur</a>, jointly with King's College London.
      </>
    ),
  },
  {
    date: 'Sep 2022',
    text: 'I joined Amazon Transportation Services (ATS) in Barcelona as an Applied Scientist I Intern.',
  },
];

type Pub = {
  key: string;
  short: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  kind: 'inproceedings' | 'article' | 'misc';
  award?: string;
  teaser?: string;
  paper?: string;
  project?: string;
  code?: string;
};

const publications: Pub[] = [
  {
    key: 'Marciano2026MID',
    short: 'MID',
    title: 'MID: Mask-Image Distributional Divergence for Evaluating Medical Image Segmentation',
    authors: [ME, 'X. Zhang', 'M. Antonelli', 'S. Ourselin', 'M. A. Zuluaga'],
    venue: 'Conference on Neural Information Processing Systems (NeurIPS)',
    year: 2026,
    kind: 'inproceedings',
    teaser: teaserMid,
  },
  {
    key: 'Marciano2026nnQC',
    short: 'nnQC',
    title: 'Diffusion-Based Quality Control of Medical Image Segmentations across Organs',
    authors: [
      ME,
      'H. Chaptoukaev',
      'V. Fernandez',
      'M. J. Cardoso',
      'S. Ourselin',
      'M. Antonelli',
      'M. A. Zuluaga',
    ],
    venue: 'IEEE Transactions on Medical Imaging (TMI)',
    year: 2026,
    kind: 'article',
    teaser: teaserNnqc,
    paper: 'https://arxiv.org/abs/2511.09588',
    project: 'https://robustml-eurecom.github.io/nnQC/',
    code: 'https://github.com/robustml-eurecom/nnQC',
  },
  {
    key: 'Scavone2026Structural',
    short: 'Vascular graphs',
    title: 'Structural Congruence Matters: Biological Pretraining for Vascular Graph Extraction',
    authors: ['A. Scavone', 'L. Borrego', ME, 'C. Mata', 'B. Giraldo', 'J. Munuera', 'M. A. Zuluaga'],
    venue: 'Medical Image Computing and Computer Assisted Intervention (MICCAI)',
    year: 2026,
    kind: 'inproceedings',
    teaser: teaserVascular,
    paper: 'https://www.eurecom.fr/fr/publication/8765',
    code: 'https://github.com/erc-caravel/Vascular-Graph-Extraction',
  },
  {
    key: 'Marciano2026GRACE',
    short: 'GRACE',
    title: 'Retrieval-Augmented Correction for Generalist Medical Image Segmentation',
    authors: [ME, 'X. Zhang', 'M. Antonelli', 'S. Ourselin', 'M. A. Zuluaga'],
    venue: 'Under review at Transactions on Machine Learning Research (TMLR)',
    year: 2026,
    kind: 'misc',
    teaser: teaserGrace,
  },
  {
    key: 'Viglino2026Condition',
    short: 'Missing modalities',
    title: "Condition, Don't Impute: Missing-Aware Conditioning for Incomplete Multimodal Healthcare Data",
    authors: ['M. Viglino', 'N. V. Barrera', 'H. Chaptoukaev', 'M. A. Zuluaga', ME],
    venue: 'Preprint',
    year: 2026,
    kind: 'misc',
  },
  {
    key: 'Falcetta2025VesselVerse',
    short: 'VesselVerse',
    title: 'VesselVerse: A Dataset and Collaborative Framework for Vessel Annotation',
    authors: ['D. Falcetta', ME, 'K. Yang', 'J. Cleary', 'L. Legris', 'M. D. Rizzaro', 'I. Pitsiorlas', 'et al.'],
    venue: 'Medical Image Computing and Computer Assisted Intervention (MICCAI)',
    year: 2025,
    kind: 'inproceedings',
    teaser: teaserVesselverse,
    project: 'https://i-vesseg.github.io/vesselverse/',
    code: 'https://github.com/robustml-eurecom/VesselVerse-Framework',
  },
  {
    key: 'Poeta2025Divergence',
    short: 'Fair seg.',
    title: 'Divergence-Aware Training with Automatic Subgroup Mitigation for Breast Tumor Segmentation',
    authors: [
      'E. Poeta',
      'L. Vargas',
      'D. Falcetta',
      ME,
      'E. Pastor',
      'T. Cerquitelli',
      'E. Baralis',
      'M. A. Zuluaga',
    ],
    venue: 'Deep Breast Workshop, MICCAI',
    year: 2025,
    kind: 'inproceedings',
    award: 'Best Paper Award',
    teaser: teaserBreast,
    paper: 'https://hal.science/hal-05251649v1/file/publi-8347.pdf',
  },
  {
    key: 'Chaptoukaev2024HyperMM',
    short: 'HyperMM',
    title: 'HyperMM: Robust Multimodal Learning with Varying-sized Inputs',
    authors: ['H. Chaptoukaev', ME, 'F. Galati', 'M. A. Zuluaga'],
    venue: 'MMMI Workshop, MICCAI',
    year: 2024,
    kind: 'inproceedings',
    award: 'Best Presentation Award',
    teaser: teaserHypermm,
    paper: 'https://arxiv.org/abs/2407.20768',
    code: 'https://github.com/robustml-eurecom/hyperMM',
  },
  {
    key: 'Marciano2024Indoor',
    short: 'Indoor / outdoor',
    title:
      'Discriminating Between Indoor and Outdoor Environments During Daily Living Activities Using Local Magnetic Field Characteristics and Machine Learning Techniques',
    authors: [
      ME,
      'A. Cereatti',
      'S. Bertuletti',
      'T. Bonci',
      'L. Alcock',
      'E. Gazit',
      'N. Ireson',
      'et al.',
    ],
    venue: 'IEEE Sensors Journal',
    year: 2024,
    kind: 'article',
    teaser: teaserSensors,
    paper: 'https://ieeexplore.ieee.org/abstract/document/10753431',
  },
];

const toBibtex = (pub: Pub) => {
  const authors = pub.authors.filter((a) => a !== 'et al.').join(' and ') + (pub.authors.includes('et al.') ? ' and others' : '');
  const venueField = pub.kind === 'article' ? 'journal' : pub.kind === 'inproceedings' ? 'booktitle' : 'note';
  return `@${pub.kind}{${pub.key},
  title={${pub.title}},
  author={${authors}},
  ${venueField}={${pub.venue}},
  year={${pub.year}}
}`;
};

const Publication = ({ pub }: { pub: Pub }) => {
  const [showBib, setShowBib] = useState(false);

  return (
    <li className="pub">
      {pub.teaser ? (
        <img className="teaser" src={pub.teaser} alt="" />
      ) : (
        <div className="teaser teaser-text" aria-hidden="true">
          {pub.short}
        </div>
      )}
      <div className="pub-body">
        <span className="p-title">{pub.title}</span>
        <br />
        <span className="p-authors">
          {pub.authors.map((author, i) => (
            <span key={author}>
              {author === ME ? <b>{author}</b> : author}
              {i < pub.authors.length - 1 && ', '}
            </span>
          ))}
        </span>
        <br />
        <span className="p-conference">
          {pub.venue}, {pub.year}.
        </span>
        {pub.award && (
          <>
            <br />
            <span className="badge">{pub.award}</span>
          </>
        )}
        <div className="p-links">
          {pub.paper && (
            <a href={pub.paper}>
              <FileText size={15} /> Paper
            </a>
          )}
          <button type="button" className="link-button" onClick={() => setShowBib((v) => !v)} aria-expanded={showBib}>
            <Quote size={15} /> BibTeX
          </button>
          {pub.project && (
            <a href={pub.project}>
              <Globe size={15} /> Project
            </a>
          )}
          {pub.code && (
            <a href={pub.code}>
              <Code size={15} /> Code
            </a>
          )}
        </div>
        {showBib && <pre className="p-bibtex">{toBibtex(pub)}</pre>}
      </div>
    </li>
  );
};

const App = () => {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <>
      <div className="bio-band" id="top">
        <header className="container bio">
          {hasPhoto ? (
            <img className="profile" src="/photo.jpg" alt="Portrait of Vincenzo Marcianò" onError={() => setHasPhoto(false)} />
          ) : (
            <div className="profile profile-fallback" aria-hidden="true">
              VM
            </div>
          )}
          <div className="bio-text">
            <h1>Vincenzo Marcianò</h1>
            <p>
              I'm an Applied Scientist II Intern at <a href="https://www.amazon.science/tag/alexa">Amazon Alexa AI</a>{' '}
              in Turin, working on agentic LLM routing under non-stationarity and adversarial shift. I obtained my PhD
              in Artificial Intelligence and Computer Science in September 2026 from Sorbonne Université and{' '}
              <a href="https://www.eurecom.fr/">EURECOM</a>, supervised by{' '}
              <a href="https://zuluaga.eurecom.io/">Prof. Maria A. Zuluaga</a>,{' '}
              <a href="https://scholar.google.com/citations?user=SMvz9eEAAAAJ&hl=en">Prof. Sébastien Ourselin</a>{' '}
              and <a href="https://www.kcl.ac.uk/people/michela-antonelli">Dr. Michela Antonelli</a> at{' '}
              <a href="https://www.kcl.ac.uk/">King's College London</a>, with funding from{' '}
              <a href="https://3ia.univ-cotedazur.eu/">3IA Côte d'Azur</a>. Before that, I studied at{' '}
              <a href="https://www.polito.it/">Politecnico di Torino</a>, and worked at Amazon Transportation
              Services (ATS) in Barcelona, the University of Sheffield, <a href="https://www.lexsa.ai/">LexSA</a> and{' '}
              <a href="https://soundberry.ai/en">SoundBerry</a>.
            </p>
            <p>
              My research asks how learned representations can tell a model when it is wrong under distribution
              shift. I work on representation learning, domain generalisation, generative models and
              retrieval-augmented methods, with a focus on reliable 3D medical image segmentation.
            </p>
            <p className="socials">
              <a href={SCHOLAR} aria-label="Google Scholar" title="Google Scholar">
                <GraduationCap size={30} />
              </a>
              <a href="https://github.com/SanBast" aria-label="GitHub" title="GitHub">
                <Github size={30} />
              </a>
              <a href="https://www.linkedin.com/in/mrcvcn/" aria-label="LinkedIn" title="LinkedIn">
                <Linkedin size={30} />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email" title="Email">
                <Mail size={30} />
              </a>
              <a href={CV_URL} aria-label="CV" title="Curriculum Vitae" className="cv-link">
                <FileText size={30} /> CV
              </a>
            </p>
          </div>
        </header>
      </div>

      <main className="container">
        <section>
          <h3>News</h3>
          <table className="news">
              <tbody>
                {news.map((item, i) => (
                  <tr key={i}>
                    <td className="news-date">{item.date}</td>
                    <td>{item.text}</td>
                  </tr>
                ))}
              </tbody>
          </table>
        </section>

        <section>
          <h3>Publications</h3>
          <ul className="pubs">
            {publications.map((pub) => (
              <Publication key={pub.key} pub={pub} />
            ))}
          </ul>
        </section>
      </main>

      <footer className="container site-footer">
        <hr />
        <p>
          <a href="#top">
            Back to top <ChevronUp size={14} />
          </a>
        </p>
      </footer>
    </>
  );
};

export default App;
