import React, { Component } from "react";
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
    
    showDropDown=(arr,name,selval,header)=>{
       // console.log(selval)
        
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
    
      
    render(){
        let {items,sizes,crusts,view,cart}=this.props
        let {id}=items
       let a=cart.find(c1=>c1.id===id)
    //   let x= cart.map((c1)=>(
     //   c1.total))
        
        let {size,crust}=this.state.data
        console.log(cart,a,size,items)
        return(<div className="container mt-5 rounded p-5">
          <h2 className="text-center text-danger fw-bold mb-5 ">🍕 Veg Pizza
</h2>
  <div className="row">
    
    <div className="col-12 ">
      <div className="row ">
        {items.map((d1, index) => (
          d1.veg === "Yes" && d1.type === "Pizza" && (
            <div className="col-md-4 mb-4 " key={d1.id}>
              <div className="card shadow h-100 p-3 text-center bg-danger" style={{ height: "450px" }}>
                <img
                     className="card-img-top"

                  width="100%"
                  height="180px"
                  style={{ objectFit: "cover" }}
                  src={d1.image}
                  alt={d1.name}
                />
                <div className="card-body text-white">
                <h4 className="card-title">{d1.name}</h4>
                <p className="card-text">{d1.desc}</p>

                
               <b>Price: ₹{d1.price}</b>
                <div className="row mb-2">
                  <div className="col-6">
                    {this.showDropDown(sizes, "size", d1.size, "Select Sizes")}
                  </div>
                  <div className="col-6">
                    {this.showDropDown(crusts, "crust", d1.crust, "Select Crusts")}
                  </div>
                </div>
</div>
                {cart.find((c1) => c1.id === d1.id && c1.qty >= 1) ? (
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-light me-1" onClick={() => this.sub(d1.id)}>-</button>
                    <button className="btn btn-secondary">{d1.qty}</button>
                    <button className="btn btn-success ms-1" onClick={() => this.add(d1.id)}>+</button>
                  </div>
                ) : (<div className="d-flex justify-content-center align-items-center">
                  <button className="btn btn-white bg-white mt-2 w-50 text-center text-danger" onClick={() => this.addtocart(index)}>Order Now</button>
                </div>)}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  </div>
</div>
)
    }
}
export default Pizza