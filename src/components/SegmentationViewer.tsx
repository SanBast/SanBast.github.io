import { useState } from 'react';
import inputImage from '../assets/nnqc-input.png';
import outputImage from '../assets/nnqc-output.png';
import referenceImage from '../assets/nnqc-reference.png';

const views = [
  {
    id: 'input',
    label: 'Input mask',
    image: inputImage,
    caption: 'Low-quality candidate',
  },
  {
    id: 'output',
    label: 'nnQC output',
    image: outputImage,
    caption: 'Recovered pseudo-ground truth',
  },
  {
    id: 'reference',
    label: 'Reference',
    image: referenceImage,
    caption: 'Ground-truth segmentation',
  },
];

const SegmentationViewer = () => {
  const [activeView, setActiveView] = useState('output');
  const current = views.find((view) => view.id === activeView) ?? views[1];

  return (
    <div className="segmentation-viewer">
      <div className="viewer-toolbar">
        <span className="viewer-label">ACDC sample</span>
        <div className="segmented-control" role="tablist" aria-label="Segmentation output view">
          {views.map((view) => (
            <button
              key={view.id}
              type="button"
              role="tab"
              aria-selected={activeView === view.id}
              aria-controls="segmentation-panel"
              className={activeView === view.id ? 'is-active' : ''}
              onClick={() => setActiveView(view.id)}>
              {view.label}
            </button>
          ))}
        </div>
      </div>
      <div
        id="segmentation-panel"
        className="viewer-image"
        role="tabpanel"
        aria-label={current.caption}>
        <img src={current.image} alt={current.caption} />
      </div>
      <div className="viewer-footer">
        <span>{current.caption}</span>
        <span>Cardiac MRI</span>
      </div>
    </div>
  );
};

export default SegmentationViewer;
