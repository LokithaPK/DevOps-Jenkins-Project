import { useState } from 'react';
import Lightbox from '../components/Lightbox';
import '../styles/Gallery.css';

function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', alt: 'Galaxy' },
    { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa', alt: 'Earth' },
    { src: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4', alt: 'Moon' },
  ];

  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="container fade-in">
      <h1>Space Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openLightbox(image.src)}>
            <img src={image.src} alt={image.alt} />
            <div className="overlay">{image.alt}</div>
          </div>
        ))}
      </div>
      {lightboxImage && <Lightbox image={lightboxImage} onClose={closeLightbox} />}
    </div>
  );
}

export default Gallery;