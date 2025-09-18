import React, { Component } from "react";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Pizza extends Component{
  
  

  state={
      data:this.props.data
  }
    handelChange=(e)=>{
        console.log(e.currentTarget);
        const {currentTarget:input}=e;
        let s1={...this.state}
       s1.data[input.name]=input.value
          this.setState(s1)
    }
    add=(id)=>{
        this.props.onAdd(id)
    }
    sub=(id)=>{
        this.props.onSub(id)
    }
   addprice=(id)=>{
        this.props. onAddPrice(id)
    }
    handleAddMoreItems = () => {
      this.props.navigate("/ourmenu"); // SPA navigation (no reload)
  };


    
    showDropDown=(arr,name,selval,header)=>{
        console.log(selval)
        
        return(
            <React.Fragment>
        <div className="form-group">
    {selval===undefined ||selval===""?(
     <select className="form-control" 
                name={name}
              value={selval}
              onChange={this.handelChange}
              >
                <option value="">
                   {header} 
                </option>
                {arr.map((c1)=>(
          <option selected={c1===selval?'selected':''}
                >{c1}</option>
                ))}
          </select>):(<select className="form-control" 
          disabled
                name={name}
              value={selval}
              onChange={this.handelChange}
              >
                <option value="">
                   {header} 
                </option>
                {arr.map((c1)=>(
          <option selected={c1===selval?'selected':''}
                >{c1}</option>
                ))} 
                </select>)}
              </div>
            </React.Fragment>
        )
    }
    showDropDown1=(arr,name,selval,header)=>{
        return(
            <React.Fragment>
        <div className="form-group">
    
     <select className="form-control" 
                disabled
              name={name}
              value={selval}
              onChange={this.handelChange}
              >
                <option value="">
                   {header} 
                </option>
                {arr.map((c1)=>(
        <option disabled
             >{c1}</option>
                ))}
          </select>
              </div>
            </React.Fragment>
        )
    }
    addtocart=(index)=>{
        this.props.onaddtocart(index)
    }
    addmore=()=>{
      
    }
      
    render(){
        let {items,sizes,crusts,view,cart}=this.props
        let {id}=items
        let {price}=items
        let a=cart.find(c1=>c1.id===id)
        //  let s1={...this.state}
       
         let totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);        
         
        let {size,crust}=this.state.data
        console.log(cart,a,size,items)
        return(<div className="container my-5 pt-5">
      <div className="row border mb-3 mt-3">
        <h2 className="mb-4 text-center">Your Cart</h2>

        <div className="col-6 border rounded text-center">
          {cart.length === 0 ? (
            <h4 className="text-center">Cart is Empty</h4>
          ) : (
            <h4 className="text-center">Cart</h4>
          )}

          {cart.map((c1) => (
            <div key={c1.id} className="card mt-3 mb-3 p-1 border-bottom" 
              style={{
  boxShadow: "white 04px 8px 0 rgba(0,0,0,0.2)",
  padding: "16px",
  textAlign: "center",
  backgroundColor: "#f1f1f1"
}}    >
              {/* Item details */}
              <div className="card-body d-flex align-items-center" >
                <i
                  className="fas fa-circle"
                  style={{ fontSize: "10px", color: "green" }}
                ></i>
                &nbsp;&nbsp;
                <b>{c1.name}</b>
                &nbsp;&nbsp;
                {c1.type === "Pizza" && (
                  <small>
                    {c1.size} | {c1.crust}
                  </small>
                )}
              
                <div className=" card-body text-end d-flex align-item-center justify-content-end">
                
                  <button onClick={() => this.sub(c1.id)} className="btn btn-sm btn-outline-dark">-</button>
                  <span className="mx-2">{c1.qty}</span>
                  <button onClick={() => this.add(c1.id)} className="btn btn-sm btn-outline-dark">+</button>
                  &nbsp;&nbsp; &nbsp;&nbsp; <b>₹{c1.price * c1.qty}</b>
                  {/* <button className="btn btn-link text-danger p-0 mt-1">
      <i className="bi bi-trash"></i>
    </button> */}
              </div>
              </div>
              

              
              
    </div>
          ))}

          
          <div className="row border-top pt-3">
            <div className="col text-center text-end" >
                   <Link to="/ourmenu" style={{ textDecoration: "none", color: "inherit" }}>
        <i className="bi bi-plus" style={{ cursor: "pointer" }}></i>
        Add More Items
      </Link>

            </div>
          </div>
        </div>

        {/* Bill Details */}
        <div className="col-6 border rounded ps-5 pe-5">
          <h2 className="text-center">----- Bill Details -----</h2>
          <img
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01k0tb799aet08eha09m6pm8y3%2F1753230944_img_0.webp?st=2025-09-13T17%3A15%3A10Z&se=2025-09-19T18%3A15%3A10Z&sks=b&skt=2025-09-13T17%3A15%3A10Z&ske=2025-09-19T18%3A15%3A10Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=X9W2M%2FXI2YHGG6HIicBIK4z3TsDBbi3cMjH3bQTKen4%3D&az=oaivgprodscus"
            alt="Bill Banner"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              marginTop: "5px",
              borderRadius: "8px",
            }}
          />

          <div className="card shadow-sm mt-3" 
          style={{
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  padding: "16px",
  textAlign: "center",
  backgroundColor: "#f1f1f1"
}}    
>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Item Total</span>
                <span>₹{totalPrice}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Taxes & Charges</span>
                <span>₹0</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery Charges</span>
                <span>₹0</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Grand Total</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
    }
}
export default Pizza
