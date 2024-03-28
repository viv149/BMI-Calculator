import { useState, useEffect } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import Estimate from "./cartCompo/Estimate";
import ProductCompo from "./cartCompo/ProductCompo";
import {store} from '../../Store/store';


function Cart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        updateCartData();
        store.subscribe(updateCartData);
    }, []);

    const updateCartData = () => {
        const state = store.getState();
        setData(state.cart);
        setTimeout(() => setUpdate(!update), 200);
    };

    const [update, setUpdate] = useState(false);
    
    const onItemQtyChange = (qty, id) => {
        let mydata = data;
        let my = mydata.find(x => x.id === id);
        if (my) my.qty = qty;
        setData(mydata);
        console.log('Quantu',{qty, id});
        setTimeout(() => setUpdate(!update), 200);
    }

    const onRemoveItem = item_id => {
        let updatedData = data.filter(x => x.id !== item_id);
        
        setData(updatedData);
        setTimeout(() => setUpdate(!update), 200);
    }

    const addCart = itemAdd => {
        let addItem = data.push()
    }
 
    return(
        <>
            <Container>
                <h1 className="cart-head bg-color">Your Shopping Cart</h1>
                <Row>
                    <Col className="col-md-8">
                        <Card>
                            <Card.Header>
                                <Row className="title-head align-items-center">
                                        <Col className="col-md-4">
                                            <p className="text-center">Product</p>
                                        </Col>
                                        <Col className="col-md-4">
                                            <p>Price  <span className="mx-3">Quantity</span></p>
                                        </Col>
                                        <Col className="col-md-4">
                                            <p>Total</p>
                                        </Col>
                                </Row>
                            </Card.Header>
                            <ListGroup variant="flush">
                                {data.map(item => <ListGroup.Item key={`${item.id}`}>
                                    <ProductCompo 
                                        id={item.id}
                                        name={item.name}
                                        source={item.image}
                                        rate={item.rate}
                                        onQtyChange={onItemQtyChange}
                                        onRemoveItem={onRemoveItem}
                                    />
                                </ListGroup.Item>)} 
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col className="col-md-4">
                        <Estimate data={data} update={update} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Cart;