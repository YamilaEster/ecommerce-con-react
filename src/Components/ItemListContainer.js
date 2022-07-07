import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListContainer = () => {
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.youtube.com/watch?v=Ie9jI_bzCec" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://www.youtube.com/watch?v=Ie9jI_bzCec" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://www.youtube.com/watch?v=Ie9jI_bzCec" className="d-block w-100" alt=""></img>
    </div>
  </div>
</div>
);
}

export default ItemListContainer;