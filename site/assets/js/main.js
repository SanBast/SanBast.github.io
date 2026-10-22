'use strict';

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));



// ---------- Theme (follows the system until the visitor picks one) ----------

const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = () => document.documentElement.dataset.theme || (systemDark.matches ? 'dark' : 'light');

$('[data-theme-toggle]').addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});



// ---------- Global nav: mobile menu, border on scroll, active section ----------

const nav = $('[data-nav]');
const menuToggle = $('[data-menu-toggle]');

const setMenu = (open) => {
  nav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
};

menuToggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
$$('.globalnav-links a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
window.matchMedia('(min-width: 834px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const navLinks = $$('.globalnav-links a');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });

navLinks.forEach(link => {
  const section = document.getElementById(link.getAttribute('href').slice(1));
  if (section) sectionObserver.observe(section);
});



// ---------- Scroll reveal ----------

const reveal = $$('.reveal');

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  reveal.forEach(el => revealObserver.observe(el));
} else {
  reveal.forEach(el => el.classList.add('in'));
}



// ---------- Toast + clipboard ----------

const toast = $('[data-toast]');
let toastTimer;

const showToast = (text) => {
  toast.textContent = text;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2000);
};

const copyText = (text, message) => navigator.clipboard.writeText(text)
  .then(() => showToast(message))
  .catch(() => showToast('Could not copy. Please select the text manually.'));

$$('[data-copy]').forEach(btn => btn.addEventListener('click', () => copyText(btn.dataset.copy, 'Email copied')));



// ---------- Older news ----------

const newsToggle = $('[data-news-toggle]');

newsToggle.addEventListener('click', () => {
  const expanded = $('.news').classList.toggle('expanded');
  newsToggle.setAttribute('aria-expanded', String(expanded));
  newsToggle.textContent = expanded ? 'Show less' : 'Show older news';
});



// ---------- Publication filters ----------

const segments = $$('[data-filter]');
const papers = $$('.paper');

segments.forEach(segment => {
  segment.addEventListener('click', () => {
    const filter = segment.dataset.filter;

    segments.forEach(s => {
      s.classList.toggle('active', s === segment);
      s.setAttribute('aria-pressed', String(s === segment));
    });

    papers.forEach(paper => {
      paper.hidden = !(filter === 'all'
        || (filter === 'first' && paper.hasAttribute('data-first'))
        || paper.dataset.year === filter);
      paper.classList.add('in');
    });
  });
});



// ---------- BibTeX ----------

const bibtexData = {
  "Marciano2026GRACE": "@article{Marciano2026GRACE,\n  title={Retrieval-Augmented Correction for Generalist Medical Image Segmentation},\n  author={V. Marcianò and X. Zhang and M. Antonelli and S. Ourselin and M. A. Zuluaga},\n  journal={Transactions on Machine Learning Research (TMLR)},\n  year={2026}\n}",
  "Marciano2026MID": "@inproceedings{Marciano2026MID,\n  title={MID: Mask-Image Distributional Divergence for Evaluating Medical Image Segmentation},\n  author={V. Marcianò and X. Zhang and G. Guglielmo and M. Antonelli and S. Ourselin and M. A. Zuluaga},\n  booktitle={Conference on Neural Information Processing Systems (NeurIPS)},\n  year={2026}\n}",
  "Marciano2026nnQC": "@article{Marciano2026nnQC,\n  title={Diffusion-Based Quality Control of Medical Image Segmentations across Organs},\n  author={V. Marcianò and H. Chaptoukaev and V. Fernandez and M. J. Cardoso and S. Ourselin and M. Antonelli and M. A. Zuluaga},\n  journal={IEEE Transactions on Medical Imaging (TMI)},\n  year={2026}\n}",
  "Scavone2026Structural": "@inproceedings{Scavone2026Structural,\n  title={Structural Congruence Matters: Biological Pretraining for Vascular Graph Extraction},\n  author={A. Scavone and L. Borrego and V. Marcianò and C. Mata and B. Giraldo and J. Munuera and M. A. Zuluaga},\n  booktitle={Medical Image Computing and Computer Assisted Intervention (MICCAI)},\n  year={2026}\n}",
  "Viglino2026Condition": "@misc{Viglino2026Condition,\n  title={Condition, Don't Impute: Missing-Aware Conditioning for Incomplete Multimodal Healthcare Data},\n  author={M. Viglino and N. V. Barrera and H. Chaptoukaev and M. A. Zuluaga and V. Marcianò},\n  note={Preprint},\n  year={2026}\n}",
  "Falcetta2025VesselVerse": "@inproceedings{Falcetta2025VesselVerse,\n  title={VesselVerse: A Dataset and Collaborative Framework for Vessel Annotation},\n  author={D. Falcetta and V. Marcianò and K. Yang and J. Cleary and L. Legris and M. D. Rizzaro and I. Pitsiorlas and others},\n  booktitle={Medical Image Computing and Computer Assisted Intervention (MICCAI)},\n  year={2025}\n}",
  "Poeta2025Divergence": "@inproceedings{Poeta2025Divergence,\n  title={Divergence-Aware Training with Automatic Subgroup Mitigation for Breast Tumor Segmentation},\n  author={E. Poeta and L. Vargas and D. Falcetta and V. Marcianò and E. Pastor and T. Cerquitelli and E. Baralis and M. A. Zuluaga},\n  booktitle={Deep Breast Workshop, MICCAI},\n  year={2025}\n}",
  "Chaptoukaev2024HyperMM": "@inproceedings{Chaptoukaev2024HyperMM,\n  title={HyperMM: Robust Multimodal Learning with Varying-sized Inputs},\n  author={H. Chaptoukaev and V. Marcianò and F. Galati and M. A. Zuluaga},\n  booktitle={MMMI Workshop, MICCAI},\n  year={2024}\n}",
  "Marciano2024Indoor": "@article{Marciano2024Indoor,\n  title={Discriminating Between Indoor and Outdoor Environments During Daily Living Activities Using Local Magnetic Field Characteristics and Machine Learning Techniques},\n  author={V. Marcianò and A. Cereatti and S. Bertuletti and T. Bonci and L. Alcock and E. Gazit and N. Ireson and others},\n  journal={IEEE Sensors Journal},\n  year={2024}\n}"
};

const dialog = $('#bibtex-dialog');
const bibtexText = $('#bibtex-text');

$$('[data-bibtex]').forEach(btn => {
  btn.addEventListener('click', () => {
    bibtexText.textContent = bibtexData[btn.dataset.bibtex];
    dialog.showModal();
  });
});

$('[data-bibtex-close]').addEventListener('click', () => dialog.close());
// close when clicking the backdrop (outside the dialog box)
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  const inside = event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom;
  if (!inside) dialog.close();
});
$('[data-bibtex-copy]').addEventListener('click', () => copyText(bibtexText.textContent, 'BibTeX copied'));
