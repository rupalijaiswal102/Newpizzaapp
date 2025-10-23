import React, { Component } from "react";
import ZomatoHeader from "./Zomatoheader";
import Pizza from "./pizza";

import {Routes, Route, Navigate } from 'react-router-dom';
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

import Slider from "./Slider";
import Home from "./Home"




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
  {
    id: 11, price: 99, name: 'Stuffed Garlic Bread', desc: 'Freshly Baked Garlic Bread stuffed with mozzarella cheese, sweet corns & tangy and spicy jalapeños',
    image: 'https://www.dominos.co.in/files/items/stuffed-garlic-breadstick_1346070564.webp',
    type:"Side Dish", veg:"Yes",rating:4.5
  },
    {"id":"GAR952","price":89,"image":"https://i.ibb.co/BNVmfY9/Garlic-bread.png","type":"Side Dish","name":"Garlic Breadsticks","desc":"Baked	to/perfection.	Your	perfect	pizza	partner! Tastes	best	with	dip","veg":"Yes"},
   {"id":"PATNV7","price":150,"image":"https://i.ibb.co/0m89Jw9/White-Pasta-Nvg.png","type":"Side Dish","name":"White	Pasta	Italiano	Non-Veg","desc":"Creamy	white	pasta	with	pepper	barbecue	chicken","veg":"No"},
    {"id":"PATVG4","price":120,"image":"https://i.ibb.co/mv8RFbk/White-Pasta-Veg.png","type":"Side Dish","name":"White	Pasta Italiano Veg","desc":"Creamy white pasta with herb grilled mushrooms","veg":"Yes"},
   
   {"id":"PARVG7","price":49,"image":"https://i.ibb.co/JHhrM7d/Parcel-Veg.png","type":"Side Dish","name":"Veg	Parcel","desc":"Snacky	bites!	Pizza	rolls	with	paneer	&	creamy	harissa	sauce","veg":"Yes"},
    {"id":"PARCH1","price":59,"image":"https://i.ibb.co/prBs3NJ/Parcel-Nonveg.png","type":"Side Dish","name":"Chicken Parcel","desc":"Snacky	bites!	Pizza	rolls	with	chicken	sausage	&	creamy	harissa	sauce","veg":"No"},
   
   {"id":"DIP033","price":30,"image":"https://i.ibb.co/0mbBzsw/new-cheesy.png","type":"Side Dish","name":"Cheesy	Dip","desc":"An	all-time	favorite	with	your	Garlic	Breadsticks	&	Stuffed	Garlic	Bread	for	a	Cheesy	indulgence","veg":"Yes"},
    {"id":"DIP072","price":20,"image":"https://i.ibb.co/fY52zBw/new-jalapeno.png","type":"Side Dish","name":"Cheesy Jalapeno	Dip","desc":"A	spicy,	tangy	flavored	cheese	dip	is	a	an	absolute delight	with	your	favourite	Garlic	Breadsticks","veg":"Yes"},
      {"id":"12","price":55,"image":"data:image/jpeg;base64,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",
    "type":"Beverage",
      "name":"French Fries","desc":"Crispy Fries",
      "veg":"Yes"},
   
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
                
<ZomatoHeader
    totalQty={this.getTotalQty()}
    getlocations={this.getlocation()}
/>
  
    <div className="content">
      <Routes>
  <Route path="/" element={<Home />} />
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
