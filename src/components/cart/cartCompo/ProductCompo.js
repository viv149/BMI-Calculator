import { useState } from "react";
import { Container, Col, Row, Image, Button } from "react-bootstrap";


function ProductCompo(props){
    const [qty, setQty] = useState(1);


    let total = qty * props.rate;

    const onQtyChange = (value) => {
        setQty(value);
        props.onQtyChange(value, props.id);
    }

   
    return (
        <>
            <Container >
                <Row className="align-items-center">
                    <Col className="col-md-4 product-bar">
                        {/* <img src="./image/lichi.jpeg" alt="fruit" className="product-img"/> */}
                        <Image src = {props.source} alt="fruit" className="product-img"></Image>
                        <div className="text-start mx-3">
                            <h1 className="product-name" style={{color:'#df2041'}}>{props.name}</h1>
                            <p className="product-weight" style={{color:'#000'}}>weight {qty}kg</p>
                        </div>
                    </Col>
                    <Col className="col-md-4">
                        <p>₹ {props.rate}.00 x <input type="number" style={{width:'12%'}} value={qty} className="text-end" onChange={(e) => onQtyChange(e.target.value)}/> KG</p>
                    </Col>
                    <Col className="col-md-3">
                        <p>₹ {total}</p>
                    </Col>
                    <Col className="col-md-1">
                        <Button className="btn-danger" onClick={() => props.onRemoveItem(props.id)}>X</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ProductCompo;