import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../Slices/products-slice";
import { addToCart } from "../../Slices/cartSlice";


const Products = () => {

  const products = useSelector((state) =>state.products)
 console.log(products);
 const dispatch=useDispatch();

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])
  return(
  <>
       <Container className="py-5 mt-5">
          <Row>

          {products.map((product)=> 
              <Col key={product.id}>
              <Card style={{ width: '18rem' }}>
              <Card.Img style={{height:'300px'}} variant="top" src={product.image} />
              <Card.Body style={{height:'270px' }}>
                <Card.Title>{product.title.slice(0,60)}</Card.Title>
                <Card.Text> {product.description.slice(0,100)}...</Card.Text>
                <Card.Text> {product.price}$</Card.Text>
                <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
         )}

          </Row>
       </Container>
  </>
  );
};

export default Products;
