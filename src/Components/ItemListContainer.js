import 'bootstrap/dist/css/bootstrap.min.css';


function ItemListContainer() {
  return (
    <><div className="List">
    </div><div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video src="https://www.youtube.com/watch?v=Ie9jI_bzCec" className="d-block w-100" alt="..."></video>
          </div>
          <div className="carousel-item">
            <video src="" className="d-block w-100" alt="..."></video>
          </div>
          <div className="carousel-item">
            <video src="https://www.youtube.com/watch?v=Ie9jI_bzCec" className="d-block w-100" alt=""></video>
          </div>
        </div>
      </div></>
  );
}

export default ItemListContainer;