import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { clear, removeFromCart } from "../../Slices/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
 
  const totalPrice = cart.reduce((acc , product) =>{
    acc+= product.price*product.quantity;
    return acc;
  },0)

  return(
    <Container className="my-5">
    <h1 className="mb-3">Welcome To Cart</h1>
    <div className="my-3">
        <Button  variant="primary" onClick={()=>{dispatch(clear())}}> Clear</Button>

       </div>
       <h5>Total Price : {totalPrice.toFixed(2)}$</h5>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>image</th>
          <th>price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product) =>
           <tr key={product.id}>
           <td>{product.id}</td>
           <td>{product.title}</td>
           <td><Image src={product.image} style={{width:'100px',height:'100px'}}/></td>
           <td>{product.price}$</td>
           <td>{product.quantity}</td>
           <td>
            <Button variant="danger"onClick={()=> {dispatch(removeFromCart(product))}}>Remove</Button>
           </td>
         </tr>
       
        )}
      
      </tbody>
    </Table>
    
       
      
   
    
    </Container>
  );
};

export default Cart;
