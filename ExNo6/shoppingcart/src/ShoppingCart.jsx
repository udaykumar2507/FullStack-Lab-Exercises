import React,{useState} from "react";

const shop_items=[{id:1,name:'Apple',cost:10},
                  {id:2,name:'banana',cost:5},
                  {id:3,name:'Orange',cost:12}];

const ShoppingCart=()=>{
    const [cart,setcart]=useState([]);
    const [cost,setcost]=useState(0);

    const handleaddcart=(items)=>{
        setcart([...cart,items]);
        setcost((cost)=>cost+items.cost);
    }
    const handledeleteCart=(itemtoRemove)=>{
        const indextoremove=cart.findIndex((items)=>items.id==itemtoRemove.id);
        const updatedcart=[...cart];
        updatedcart.splice(indextoremove,1);
        setcart(updatedcart);
        setcost((cost)=>cost-itemtoRemove.cost);
    }
    return(<>
    <h1>Shopping Cart</h1>
    {shop_items.map((items,key)=>(
        <div id={key}>
            {items.name}-${items.cost}
            <button onClick={()=>{handleaddcart(items)}}> Submit</button>
        </div>
    ))}
    <h1>Carts</h1>
    {cart.map((cart_item,key)=>(
        <div id={key}>
            {cart_item.name}-${cart_item.cost}
            <button onClick={()=>{handledeleteCart(cart_item)}}>Delete</button>
        </div>
    ))}
    <h1>Total Cost={cost}</h1>
    </>
    );
}
export default ShoppingCart;