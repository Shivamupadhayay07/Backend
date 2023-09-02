import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "../redux/features/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const apiUrl = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(`Error Occurred: ${error}`);
      }
    };
    fetchProductData();
  }, []);

  const addToCart = (product) => {
    //dispatch a action
    dispatch(add(product));
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
            variant="primary"
            style={{ width: "130px" }}
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div>
      <h2>Product Dashboard</h2>
      <div className="row m-auto">{cards}</div>
    </div>
  );
};

export default Products;