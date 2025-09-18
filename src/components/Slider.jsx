import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";  // <-- this is required
import { NavLink } from 'react-router-dom';


const Slider = () => {
  return (
   <div
  id="carouselExampleDark"
  className="carousel slide"
>
  <div className="carousel-inner" style={{height:"800px",width:"100%"}}>
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://videos.openai.com/vg-assets/assets%2Ftask_01jvkj4a2eexgt7bv3mf02vy0w%2F1747634612_img_0.webp?st=2025-09-17T16%3A20%3A56Z&se=2025-09-23T17%3A20%3A56Z&sks=b&skt=2025-09-17T16%3A20%3A56Z&ske=2025-09-23T17%3A20%3A56Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=b4ab33b8-2ad4-40af-8ed0-a2b350b6603c&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=K68EeoSxTXG%2BaP2%2F9JeaKwC%2FPQHmozUNWabCR0GWoG8%3D&az=oaivgprodscus"
       className="d-block w-100" alt="Pizza" />
       <div class="carousel-caption d-none d-md-block text-dark ">
        <h5>Cheesy Pizza</h5>
        <p>Indulge in our hot, cheesy pizza loaded with gooey mozzarella and irresistible flavors." 🍕</p>
      </div>
    </div>
    <div className="carousel-item">
        <video autoPlay muted loop className="bg-video border d-flex  "
      style={{
  position: "absolute",
  right: "0",
  bottom: "0",
  minWidth: "100%",
  minHeight: "50%",
  zIndex: "0",
  objectFit: "cover",
  marginTop:"0px",
  marginBottom:"50%"
}}>
        <source src="https://videos.openai.com/vg-assets/assets%2Ftask_01k4kdfehker8s53ng0en9yner%2Ftask_01k4kdfehker8s53ng0en9yner_genid_4b1f8405-f794-4805-bfb1-ec657d44707a_25_09_08_01_01_601401%2Fvideos%2F00000_360275984%2Fmd.mp4?st=2025-09-13T15%3A20%3A20Z&se=2025-09-19T16%3A20%3A20Z&sks=b&skt=2025-09-13T15%3A20%3A20Z&ske=2025-09-19T16%3A20%3A20Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=ra5mAnd1%2BLkGJsG7caUC%2F%2Bx80MZhaJP2%2BgIjMIpRC1c%3D&az=oaivgprodscus" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="overlay-content text-white text-center" style={{ position:"relative",zIndex:"1",marginBottom:"500px"}}>
        <h1 className="display-4 fw-bold">Find the best restaurants and cafés</h1>
        <p className="lead">Discover the best Pizza & drinks in your city</p>

        <div className="input-group mt-4 mx-auto" style={{ maxWidth: '600px',marginBottom:"500px" }}>
          <input type="text" className="form-control" placeholder="Search for restaurant, cuisine or a dish" />
                <NavLink className="btn btn-danger" to="/OurMenu">Search</NavLink>
              </div>
            </div>
        

    </div>
    <div className="carousel-item">
        <video autoPlay muted loop className="bg-video border d-flex  "
      style={{
  position: "absolute",
  right: "0",
  bottom: "0",
  minWidth: "100%",
  minHeight: "50%",
  zIndex: "0",
  objectFit: "cover",
  marginTop:"0px",
  marginBottom:"50%"
}}>
        <source src="https://videos.openai.com/vg-assets/assets%2Ftask_01k0d2rn8mfnpvgawq4a3vqkm0%2Ftask_01k0d2rn8mfnpvgawq4a3vqkm0_genid_41ca62a1-c417-48e7-9d8b-64e87b4d84fa_25_07_17_20_56_096881%2Fvideos%2F00000_982557418%2Fmd.mp4?st=2025-09-17T16%3A22%3A58Z&se=2025-09-23T17%3A22%3A58Z&sks=b&skt=2025-09-17T16%3A22%3A58Z&ske=2025-09-23T17%3A22%3A58Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=b4ab33b8-2ad4-40af-8ed0-a2b350b6603c&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=vONgi3aY7e6cWioIKZ5T2Va%2F6SDmx5981W5brbL41Gk%3D&az=oaivgprodscus" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

    
    
    </div>
  </div>

  {/* Controls */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  );
};

export default Slider;
