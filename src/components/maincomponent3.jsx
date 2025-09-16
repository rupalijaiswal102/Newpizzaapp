import React, { Component } from "react";
import ZomatoHeader from "./Zomatoheader";
import Pizza from "./pizza";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import OtherItems from "./othersItem";
import NonVegPizza from "./nonveg";
import SideDishes from "./sideDish";
import Footer from "./footer";
import Zomatologin from "./Zomatologin"
import ZomatoSignup from "./ZomatoSignup"
import CartPage from "./CartPage";
import OurMenu  from "./OurMenu";
import ZomatoHome from "./ZomatoHome";
import Contact from "./Contact";
import Navbar2 from "./Navbar2"
import FirstPage from "./Firstpage";


import { type } from "@testing-library/user-event/dist/type";
class MainComponent3 extends Component{
    state={
      sampleMenu: [
    {
      id: 1,
      name: "Margherita",
      desc: " delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier",
      price: 199,
      image: "https://www.dominos.co.in/theme2/front/images/menu-images/my-vegpizza.webp",
      category: "Veg Pizza",
      link:"/pizza"
    },
    {
      id: 2,
      name: "Peppy Paneer",
      desc: "Choose your favourite non-veg pizzas from the Domino's Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings",
      price: 299,
      image: "https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp",
      category: "Non-Veg Pizza",
      link:"/nonveg"
    },
    {
      id: 3,
      name: "Chicken Dominator",
      desc: "Indulge into mouth-watering taste of Pizza mania range, perfect answer to all your food cravings",
      price: 399,
      image: "https://www.dominos.co.in/theme2/front/images/menu-images/my-pizzamania.webp",
      category: "PIZZA MANIA",
      link:"/pizza"
    },
    {
      id: 4,
      name: "Farmhouse",
      desc: "Complement your pizza with wide range of sides & beverages available at Domino's Pizza India",
      price: 349,
      image: "https://www.dominos.co.in/theme2/front/images/menu-images/sides_beverages.webp",
      category: "Sides & Beverages",
      link:"/othersItem"
    },
    {
      id: 5,
      name: "Farmhouse",
      desc: "Complement your pizza with wide range of sides & beverages available at Domino's Pizza India",
      price: 349,
      image: "https://www.dominos.co.in/theme2/front/images/menu-images/pasta_new.webp",
      category: "Others Items",
      link:"/sideDish"
    },
  ],

sizes : ["Regular","Medium","Large"],
crusts :["New Hand Tossed","Wheat Thin Crust","Cheese Burst","Fresh Pan Pizza","Classic Hand Tossed"],
items :[
  {
    id: 1,
    name: "The 4 Cheese Pizza",
    cuisine: "Italian, Fast Food",
    image: "https://www.dominos.co.in/files/items/PIZ0171.jpg",
    rating: "4.5",
    deliveryTime: "30", price: "250", type:"Pizza", veg:"Yes",
    desc:"Cheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza, including a spicy hit of Ghost"
  },
  {
    id: 2,
    name: 'Margherita',
    desc: 'Classic delight with 100% real mozzarella cheese',
    price: 199,
    image: 'https://www.dominos.co.in/files/items/Margherit.jpg',
    type:"Pizza",
    veg:"Yes",
    rating:4.5
  },
   {
    id: 3, name: 'Farmhouse1', desc: 'Classic delight with 100% real mozzarella cheese', price: 250,
    image: 'https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/08ec2d51-9032-4030-a7a1-e1c9d67ae19b_FullsizeFarmhouseCB.jpg?ver=V0.0.1',
    type:"Pizza", veg:"Yes",rating:4.5
  },
  {
    id: 6, name: 'Chesse and corn', desc: 'Delicious combination of cheese and sweet corn pizza', price: 209,
    image: 'https://cdn.jflimages.co.in/nextgen-catalog/media/prod/Dominos/WebHomeProductV1/57a7e669-6624-4021-88f8-446a280d38b5_Corn_n_Cheese_Side.webp?ver=V0.0.1',
    type:"Pizza", veg:"Yes",rating:4.5
  },
   {"id":"PIZVDV","price":99,"image":"https://i.ibb.co/F0H0SWG/deluxeveg.png","type":"Pizza","name":"Deluxe	Veggie","desc":"Veg	delight	- onion,	capsicum,	grilled	mushroom,	corn	&	paneer","veg":"Yes"},
    {"id":"PIZVFH","price":210,"image":"https://i.ibb.co/4mHxB5x/farmhouse.png","type":"Pizza","name":"Farmhouse","desc":"Delightful	combination	of	onion,	capsicum,	tomato	&	grilled	mushroom","veg":"Yes"},
    {"id":"PIZVIT","price":150,"image":"https://i.ibb.co/sRH7Qzf/Indian-TandooriPaneer.png","type":"Pizza","name":"Indi	Tandoori	Paneer","desc":"It	is	hot.	It	is	spicy.	It	is	oh-soIndian.	Tandoori	paneer	with	capsicum,	red	paprika	&	mint	mayo","veg":"Yes"},
    {"id":"PIZVMG","price":150,"image":"https://i.ibb.co/MGcHnDZ/mexgreen.png","type":"Pizza","name":"Mexican	Green	Wave","desc":"Mexican	herbs	sprinkled	on	onion,	capsicum,	tomato	&	jalapeno","veg":"Yes"},
    {"id":"PIZVPP","price":110,"image":"https://i.ibb.co/cb5vLX9/peppypaneer.png","type":"Pizza","name":"Peppy	Paneer","desc":"Flavorful	trio	of	juicy	paneer,	crisp	capsicum	with	spicy	red	paprika","veg":"Yes"},
    {"id":"PIZVVE","price":210,"image":"https://i.ibb.co/gTy5DTK/vegextra.png","type":"Pizza","name":"Veg	Extravaganza","desc":"Black	olives,	capsicum,	onion,	grilled	mushroom,	corn,	tomato,	jalapeno & extra	cheese","veg":"Yes"},
    {"id":"PIZNCP","price":210,"image":"https://i.ibb.co/b5qBJ9d/cheesepepperoni.png","type":"Pizza","name":"Chicken	Pepperoni","desc":"A	classic	American	taste!	Relish	the	delectable	flavor	of Chicken	Pepperoni,topped	with	extra	cheese","veg":"No",},
    {"id":"PIZNCD","price":150,"image":"https://i.ibb.co/GFtkbB1/ChickenDominator10.png","type":"Pizza","name":"Chicken	Dominator","desc":"Loaded	with	double	pepper barbecue	chicken,	peri-peri	chicken,	chicken	tikka	&	grilled	chicken	rashers","veg":"No"},
    {"id":"PIZNPB","price":150,"image":"https://i.ibb.co/GxbtcLK/Pepper-Barbeque-OnionC.png","type":"Pizza","name":"Pepper Barbecue	&	Onion","desc":"A classic favourite with pepper barbeque	chicken	&	onion","veg":"No"},
    {"id":"PIZNIC","price":150,"image":"https://i.ibb.co/6Z5wBqr/Indian-Tandoori-ChickenTikka.png","type":"Pizza","name":"Indi	Chicken	Tikka","desc":"The	wholesome	flavour	of	tandoori masala	with	Chicken	tikka,	onion,	red	paprika	&	mint	mayo","veg":"No"}
    ,{"id":"DES044","price":100,"image":"https://i.ibb.co/gvpDKPv/Butterscotch.png","type":"Dessert","name":"Butterscotch Mousse	Cake","desc":"Sweet	temptation!	Butterscotch	flavored	mousse","veg":"Yes"},
    {"id":"DES028","price":100,"image":"https://i.ibb.co/nm96NZW/ChocoLava.png","type":"Dessert","name":"Choco Lava	Cake","desc":"Chocolate	lovers	delight!	Indulgent,	gooey	molten	lava	inside	chocolate cake","veg":"Yes"},
  
  {
    id: 4, name: 'Chicken Golden Delight', desc: 'Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!', 
    price: 300,
    image: 'https://www.dominos.co.in/files/items/MicrosoftTeams-image_(14).png',
    type:"Pizza", veg:"No",rating:4.5
  },
  {
    id: 5, name: 'Non Veg Supreme', desc: 'Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers',
     price: 350,
    image: 'https://www.dominos.co.in/files/items/MicrosoftTeams-image_(13).png',
    type:"Pizza", veg:"No",rating:4.5
  },
 {"id":"DIP033","price":50,"image":"https://i.ibb.co/0mbBzsw/new-cheesy.png","type":"Side Dish","name":"Cheesy	Dip","desc":"An	all-time	favorite	with	your	Garlic	Breadsticks	&	Stuffed	Garlic	Bread	for	a	Cheesy	indulgence","veg":"Yes"},
    {"id":"DIP072","price":110,"image":"https://i.ibb.co/fY52zBw/new-jalapeno.png","type":"Side Dish","name":"Cheesy Jalapeno	Dip","desc":"A	spicy,	tangy	flavored	cheese	dip	is	a	an	absolute delight	with	your	favourite	Garlic	Breadsticks","veg":"Yes"},
   {"id":"GAR952","price":89,"image":"https://i.ibb.co/BNVmfY9/Garlic-bread.png","type":"Side Dish","name":"Garlic Breadsticks","desc":"Baked	to/perfection.	Your	perfect	pizza	partner! Tastes	best	with	dip","veg":"Yes"},
    {"id":"PARCH1","price":59,"image":"https://i.ibb.co/prBs3NJ/Parcel-Nonveg.png","type":"Side Dish","name":"Chicken Parcel","desc":"Snacky	bites!	Pizza	rolls	with	chicken	sausage	&	creamy	harissa	sauce","veg":"No"},
    {"id":"PARVG7","price":49,"image":"https://i.ibb.co/JHhrM7d/Parcel-Veg.png","type":"Side Dish","name":"Veg	Parcel","desc":"Snacky	bites!	Pizza	rolls	with	paneer	&	creamy	harissa	sauce","veg":"Yes"},
    {"id":"PATNV7","price":150,"image":"https://i.ibb.co/0m89Jw9/White-Pasta-Nvg.png","type":"Side Dish","name":"White	Pasta	Italiano	Non-Veg","desc":"Creamy	white	pasta	with	pepper	barbecue	chicken","veg":"No"},
    {"id":"PATVG4","price":120,"image":"https://i.ibb.co/mv8RFbk/White-Pasta-Veg.png","type":"Side Dish","name":"White	Pasta Italiano Veg","desc":"Creamy white pasta with herb grilled mushrooms","veg":"Yes"},
   {"id":"MIR101","price":50,"image":"https://www.dominos.co.in/files/items/mirinda.png","type":"Beverage","name":"Mirinda","desc":"Mirinda","veg":"Yes"},
    {"id":"PEP001","price":50,"image":"https://www.dominos.co.in/files/items/pepsi.png","type":"Beverage","name":"Pepsi	Black	Can","desc":"Pepsi	Black	Can","veg":"Yes"},
    {"id":"LIT281","price":60,"image":"https://www.dominos.co.in/files/items/lipton.png","type":"Beverage","name":"Lipton	Iced	Tea","desc":"Lipton	Iced	Tea","veg":"Yes"},
    {"id":"PEP022","price":45,"image":"https://www.dominos.co.in/files/items/pepsi_black.png","type":"Beverage","name":"Pepsi Black Can","desc":"Pepsi	New","veg":"Yes"},
    {"id":"BPCNV1","price":89,"image":"https://i.ibb.co/R0VSJjq/Burger-Pizza-Non-Veg-nvg.png","type":"Burger Pizza","name":"Classic Non Veg","desc":"Oven-baked	buns	with	cheese,	peri-peri	chicken,	tomato	&capsicum	in	creamy	mayo","veg":"No",},
    {"id":"BPCV03","price":99,"image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Classic Veg","desc":"Oven-baked	buns	with	cheese,	tomato	&	capsicum	in	creamy	mayo","veg":"Yes"},
    {"id":"BPPV04","price":120,"image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Premium Veg","desc":"Oven-baked buns with	cheese,	paneer,	tomato,	capsicum & red	paprika	in	creamy	mayo","veg":"Yes"},
    
   
],
    view:0,
    cart:[],
    data:{size:"",crust:""},
    locations: ["Delhi", "Mumbai", "Bangalore", "Pune","Gwalior","Indore","Bhopal"]


    }

    handelAddtoCart=(index)=>{
        let s1={...this.state}
        s1.view=1
        s1.items[index].qty=1
        if(s1.items[index].type=="Pizza"){
        if(s1.data.size==""){
            alert("Select Size")
        
    }
    else if(s1.data.crust==""){
        alert("Select Curst")
         }
    else{
        s1.items[index].size=s1.data.size
        s1.items[index].crust=s1.data.crust
        s1.cart.push(s1.items[index])
        s1.data.size=""
        s1.data.crust=""
    }
    }
    else{
        s1.cart.push(s1.items[index])
    }
   // s1.items[index].size=""
       //s1.items[index].crust=""
     //console.log(s1.items,s1.items[index].size)
        this.setState(s1)

    }
      
    handelAdd=(id)=>{
        let s1={...this.state}
        let r1=s1.cart.find(p=>
             p.id==id)
     let r2=s1.cart.findIndex((p1)=>{
                return p1.id==id
       })
     let r3=s1.items.findIndex((p1)=>{
        return p1.id==id
})


             if(r1.qty<=0){
                s1.cart.splice(r2,1)
                s1.items[r3].size=""
                s1.items[r3].crust=""
        

              }
             else{

             if(r1){
                r1.qty++
                r1.total=r1.price *r1.qty
             }
            }   
    
         this.setState(s1)

    }
    handelSub=(id)=>{
        let s1={...this.state}
        let r1=s1.cart.find(p=>
             p.id==id)
     let r2=s1.cart.findIndex((p1)=>{
                return p1.id==id
       })
       let r3=s1.items.findIndex((p1)=>{
        return p1.id==id
})
             if(r1.qty<=1){
                s1.cart.splice(r2,1)
                s1.items[r3].size=""
                s1.items[r3].crust=""
              }
             else{

             if(r1){
                r1.qty--
                r1.total=r1.price *r1.qty
             }
            }
         this.setState(s1)

    }

   getTotalQty = () => {
    return this.state.cart.length
  };

  getlocation = () => {
    return this.state.locations
  };




    render(){
        let {items,sizes,crusts,view,cart,data,sampleMenu}=this.state
    console.log(sampleMenu.link);

        return(<div className="container-fluid">
       {(this.state.view===0) ?          
<ZomatoHeader
    totalQty={this.getTotalQty()}
    getlocations={this.getlocation()}
/>
    :
    <Navbar2
        totalQty={this.getTotalQty()}
        getlocations={this.getlocation()}
    />
    }
    <div className="content">
      <Routes>
  <Route path="/" element={<ZomatoHome />} />
  <Route path="/OurMenu" element={<OurMenu sampleMenu={sampleMenu} />} />
  <Route
    path="/pizza"
    element={
      <Pizza
        items={items}
        sizes={sizes}
        crusts={crusts}
        onaddtocart={this.handelAddtoCart}
        view={view}
        cart={cart}
        onAdd={this.handelAdd}
        onSub={this.handelSub}
        data={data}
      />
    }
  />
  <Route
    path="/nonveg"
    element={
      <NonVegPizza
        items={items}
        sizes={sizes}
        crusts={crusts}
        onaddtocart={this.handelAddtoCart}
        view={view}
        cart={cart}
        onAdd={this.handelAdd}
        onSub={this.handelSub}
        data={data}
      />
    }
  />
  <Route
    path="/othersItem"
    element={
      <OtherItems
        items={items}
        sizes={sizes}
        crusts={crusts}
        onaddtocart={this.handelAddtoCart}
        view={view}
        cart={cart}
        onAdd={this.handelAdd}
        onSub={this.handelSub}
      />
    }
  />
  <Route
    path="/sideDish"
    element={
      <SideDishes
        items={items}
        sizes={sizes}
        crusts={crusts}
        onaddtocart={this.handelAddtoCart}
        view={view}
        cart={cart}
        onAdd={this.handelAdd}
        onSub={this.handelSub}
      />
    }
  />
  <Route path="/Zomatologin" element={<Zomatologin />} />
  <Route path="/ZomatoSignup" element={<ZomatoSignup />} />
  <Route path="/Contact" element={<Contact />} />
  <Route
    path="/CartPage"
    element={
      <CartPage
        items={items}
        sizes={sizes}
        crusts={crusts}
        onaddtocart={this.handelAddtoCart}
        view={view}
        cart={cart}
        onAdd={this.handelAdd}
        onSub={this.handelSub}
        data={data}
      />
    }
  />
  {/* Redirect example */}
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
<Footer />
</div>
        </div>)
    }
}
export default MainComponent3
