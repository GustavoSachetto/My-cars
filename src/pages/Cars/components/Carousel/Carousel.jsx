import styles from "./Carousel.module.css"

export default function Carousel({ images }) {
  return (
    <div id="carouselImage" className={"carousel slide rounded-4 "+`${styles.carousel}`}>
      <div className="carousel-inner">
        {images[0] != null && (
          <div className="carousel-item active">
            <img src={images[0]} className={styles.img} alt="Primeira imagem do veículo" />
          </div>
        )}

        {images[1] != null && (
          <div className="carousel-item">
            <img src={images[1]} className={styles.img} alt="Segunda imagem do veículo" />
          </div>
        )}
        
        {images[2] != null && (
          <div className="carousel-item">
            <img src={images[2]} className={styles.img} alt="Terceira imagem do veículo" />
          </div>
        )}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselImage" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselImage" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}