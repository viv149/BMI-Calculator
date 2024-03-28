import {useEffect, useState} from 'react';
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { store } from '../Store/store';



export default function Header(){
    const [cartLength, setCartLength] = useState(0);

    useEffect(() => {
        updateCartLength();
        store.subscribe(updateCartLength);
    }, []);

    const updateCartLength = () => {
        const state = store.getState();
        setCartLength(state.cart.length);
    }

    return(
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container className="position-relative">
                    <Navbar.Brand to="/">My Project</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="bmi" style={(isActive) => {return{color : isActive ? '#dbd5d5' : '#fff'}}} className="menu-element">BMI</NavLink>
                        <NavLink to="cart" style={(isActive) => {return{color : isActive ? '#dbd5d5' : '#fff'}}} className="menu-element">Cart</NavLink>
                        <NavLink to="shopping" style={(isActive) => {return{color : isActive ? '#dbd5d5' : '#fff'}}} className="menu-element">Shopping</NavLink>
                        <NavLink to="cart" style={(isActive) => {return{color : isActive ? '#dbd5d5' : '#fff'}}} className="menu-element cart-icon">
                            <span className="cart-count">{cartLength}</span>
                            <Image src="./image/cart.png" alt="cart-icon" width={40} height={40}/>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}




