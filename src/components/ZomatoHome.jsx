import React from 'react';
import './ZomatoHome.css'; 
import Slider from './Slider';
import YouTubeBackground from './YouTubeBackground';
import { NavLink } from 'react-router-dom';



const ZomatoHome = () => {
  return (<div className='container-fluid p-0 m-0'>
     <Slider/>

<div className="zomato-hero yt-container ">

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

      <div className="overlay-content text-white text-center">

        <h1 className="display-4 fw-bold">Find the best restaurants and cafés</h1>
        <p className="lead">Discover the best Pizza & drinks in your city</p>

        <div className="input-group mt-4 mx-auto" style={{ maxWidth: '600px' }}>
          <input type="text" className="form-control" placeholder="Search for restaurant, cuisine or a dish" />
          <NavLink className="btn btn-danger" to="/OurMenu">Search</NavLink>
        </div>
      </div>
  
    </div>
  
</div>
    
  );
};

export default ZomatoHome;
