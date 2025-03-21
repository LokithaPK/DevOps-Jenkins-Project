function Lightbox({ image, onClose }) {
    return (
      <div className="lightbox">
        <span className="close" onClick={onClose}>×</span>
        <img src={image} alt="Lightbox" />
      </div>
    );
  }
  
  export default Lightbox;