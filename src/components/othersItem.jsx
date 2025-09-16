import React, { Component } from "react";
class OtherItems extends Component{
    state={ }
     addtocart=(index)=>{
        this.props.onaddtocart(index)
    }
    add=(id)=>{
        this.props.onAdd(id)
    }
    sub=(id)=>{
        this.props.onSub(id)
    }
     render(){
        let {items,view,cart}=this.props
        
        return (
  <div className="container mt-5 p-5">
              <h2 className="text-center text-danger fw-bold mb-5 ">Sides & Beverages
</h2>
    <div className="row">
      <div className="col-12 ">
        <div className="row">
          {items.map((d1, index) =>
            d1.type === "Beverage" || d1.type === "Burger Pizza" || d1.type === "Dessert" ? (
              <div className="col-md-4 mb-4" key={d1.id}>
                <div className="text-center border p-3 bg-danger text-white" style={{ height: "450px" }} >
                  <img

                  width="100%"
                  height="230px"
                  style={{ objectFit: "cover" }}
                  src={d1.image} alt={d1.name} />
                  <h4 className="mt-2">{d1.name}</h4>
                  <p>{d1.desc}</p>
                  <h6>Price: ₹{d1.price}</h6>
                  
                  {cart.find(c1 => c1.id === d1.id && c1.qty >= 1) ? (
                    <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                      <button className="btn btn-light" onClick={() => this.sub(d1.id)}>-</button>
                      <button className="btn btn-secondary">
                        {
                          cart.find(c1 => c1.id === d1.id)?.qty || 1
                        }
                      </button>
                      <button className="btn btn-success" onClick={() => this.add(d1.id)}>+</button>
                    </div>
                  ) : (
                    <button className="btn btn-light mt-3 text-danger" onClick={() => this.addtocart(index)}>
                      ORDER NOW
                    </button>
                  )}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  </div>
);

    }
}
export default OtherItems