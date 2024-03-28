import { useState } from "react";
import { Card, Col, Image, Container, Button } from "react-bootstrap";



const ShoppingItem = ({ item, onButtonClick }) => {
    const [active, setActive] = useState(false);

    const onClick = () => {
        if (active) return;
        setActive(true);
        onButtonClick(item.id);
        // addToCartHandler(onButtonClick);
        

    }

    return <Col className="col-md-3">
        <Card style={{ width: '20rem' }} className="">
            <Image variant="top" src={item.image} className="product-image m-auto mt-2" width="206px" />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Container>
                    <div className="product-detail">
                        <p style={{ color: "#6e6e71" }}>{item.quantity}</p>
                        <div className="">
                            <p className="m-0 fw-bold">₹ {item.rate}</p>
                            <p className="product-mrp text-danger">MRP: ₹{item.mrp}</p>
                        </div>
                    </div>
                </Container>
                {/* <Button variant="danger" onClick={onClick} style={{ backgroundColor: active ? "green" : "red" }}>Add To Cart</Button> */}
                <Button variant={active ? "success" : "danger"} onClick={onClick}>Add To Cart</Button>
            </Card.Body>
        </Card>
    </Col>
};

export default ShoppingItem;
