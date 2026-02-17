import { useState, useEffect, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/counter.css';

export default function PhotoLightbox({ images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = useCallback((i) => {
    setIndex(i);
    setOpen(true);
  }, []);

  useEffect(() => {
    window.__openGalleryLightbox = openLightbox;
    return () => { delete window.__openGalleryLightbox; };
  }, [openLightbox]);

  const slides = images.map((img) => ({
    src: img.src,
    width: img.width,
    height: img.height,
    alt: img.alt,
  }));

  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      index={index}
      slides={slides}
      plugins={[Zoom, Thumbnails, Counter, Fullscreen]}
      carousel={{ finite: false }}
      thumbnails={{ position: 'bottom', width: 80, height: 60, gap: 8 }}
      zoom={{ maxZoomPixelRatio: 3 }}
      counter={{ container: { style: { top: 0, bottom: 'unset' } } }}
      styles={{
        container: { backgroundColor: 'rgba(0, 0, 0, 0.92)' },
      }}
    />
  );
}
