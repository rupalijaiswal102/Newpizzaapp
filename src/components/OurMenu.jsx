// src/pages/OurMenu.jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";
class OurMenu extends Component{
    state={
        data:this.props.data
    }

  //const [menuItems, setMenuItems] = useState([]);

  // Sample menu data (replace with API call to your backend)
  state={
        data:this.props.data
    }

  /*useEffect(() => {
    // Simulate fetching from backend
    setMenuItems(data);
  }, [data]);*/

  
   render(){
let { sampleMenu } = this.props;
  return (
    <div className="container mt-5 rounded p-5">
         <h2 className="text-center text-danger fw-bold mb-5 ">🍕 Our Menu</h2>
      <div className="row">
       

        {sampleMenu.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>

            <div className="card h-100 shadow-lg " style={{ minHeight: "500px", minWidth: "400px",
             backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NyVMh2hXhL4xlzJILG0IgIH5KCjYBluQwg&s)`,

               backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "15px",
              overflow: "hidden",

}}>
                <h2 className="  mb-2 text-center text-white">{item.category}</h2>
              <img
                src={item.image}
                className="card-img-top mt-4 "
                alt={item.name}
                style={{ height: "290px", objectFit: "cover" }}
              />
              <div className="card-body text-center">

                <p className="card-text small text-white">{item.desc}</p>

               <Link to={item.link} className="btn btn-light w-50 mt-2 text-danger">View All</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   );
}}

export default OurMenu;
