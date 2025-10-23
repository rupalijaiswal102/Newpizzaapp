import React, { Component } from "react";
class SideDishes extends Component{
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
        
        return(<div className="container mt-5 p-5">
          <h2 className="text-center text-danger fw-bold mb-5 "> SIDE DISHES
</h2>
          <div className="row ">
    <div className="col-12">
      <div className="row">
            {items.map((d1,index)=>(
            <div className="col-md-4">
            {d1.type=="Side Dish"?(
             <div className="text-center border p-3 bg-danger text-white " style={{ height: "450px" }}>
                <img 
                 width="100%"
                  height="180px"
                  style={{ objectFit: "cover" }}
                 src={d1.image}/>
                <br/>
                <h4 className="text-center">{d1.name}</h4>
                {d1.desc}
                <h6 className="text-center">Price:-{d1.price}</h6>
                <br/>
                {cart.find(c1=>c1.id===d1.id && c1.qty>=1)?(<div className="text-center">
                <button className="btn btn-light"
                onClick={()=>this.sub(d1.id)}>-</button>
               <button className="btn btn-secondary">{d1.qty}</button>
               <button className="btn btn-success"
               onClick={()=>this.add(d1.id)}>+</button>
             </div>):(
                <button className="btn btn-light m-2 text-danger"
                onClick={()=>this.addtocart(index)}>ORDER NOW
                </button>)
                }
            </div>):""}
             </div>  
            ))}
            </div>
            </div>
          </div>
  
          
        
            
        </div>)
    }
}
export default SideDishes
