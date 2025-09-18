import React, { Component } from "react";
class NonVegPizza extends Component{
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
        let {items,sizes,crusts,view,cart}=this.props
        let {size,crust}=this.state.data
        return(<div className="container mt-5 p-5">
           <h2 className="text-center text-danger fw-bold mb-5 ">🍕 Non-Veg Pizza
</h2>
  <div className="row">
    {items.map((d1, index) =>
      d1.veg === "No" && d1.type === "Pizza" ? (
        <div className="col-md-4 mb-4" key={d1.id}>
          <div className="text-center border p-3 h-100 bg-danger text-white">
            <img
              width="80%"
              height="250px"
              style={{ objectFit: "cover" }}
              src={d1.image}
              alt={d1.name}
            />
            <h4 className="mt-2">{d1.name}</h4>
            <p className="text-truncate">{d1.desc}</p>
            <h6>Price: ₹{d1.price}</h6>

            <div className="row mb-2">
              <div className="col-6">
                {this.showDropDown(crusts, "crust", d1.crust, "Select crusts")}
              </div>
              <div className="col-6">
                {this.showDropDown(sizes, "size", d1.size, "Select Sizes")}
              </div>
            </div>

            {cart.find((c1) => c1.id === d1.id && c1.qty >= 1) ? (
              <div className="text-center">
                <button
                  className="btn btn-light me-1"
                  onClick={() => this.sub(d1.id)}
                >
                  -
                </button>
                <button className="btn btn-secondary">{d1.qty}</button>
                <button
                  className="btn btn-success ms-1"
                  onClick={() => this.add(d1.id)}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="btn btn-light mt-2 text-danger"
                onClick={() => this.addtocart(index)}
              >
                ORDER NOW
              </button>
            )}
          </div>
        </div>
      ) : null
    )}
  </div>
</div>

)
    }
}
export default NonVegPizza
