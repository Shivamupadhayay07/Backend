import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/features/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispath = useDispatch();
  const removeFromCart = (id) => {
    dispath(remove(id));
  }
  };

  const cards = products.map((product) => (
    <div className="col-md-4" key={product.id} style={{ marginBottom: "10px" }}>
      <Card className="h-100 d-flex flex-column">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px", paddingTop: "10px" }}
          />
        </div>
        <Card.Body className="d-flex flex-column align-items-center justify-content-center">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
          <Button
            variant="danger"
            style={{ width: "130px" }}
            onClick={() => removeFromCart(product.id)}
          >
            Remove Item
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return 
    <>
      <div className="row">{cards}</div>
    </>
  
};

export default Cart;