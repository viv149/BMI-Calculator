import { useState } from "react";
import { Row, Container } from "react-bootstrap";
import ShoppingItem from './ShoppingItem';
import { store as cartStore, store } from '../Store/store';
import { addToCart } from '../Store/actions/CartActions';

function Shopping(props) {
    const [active, setActive] = useState([]);
    const [card, setCard] = useState([
        { id: 1, rate: 100, mrp: 150, quantity: '1 kg', name: 'Lichi', image: './image/lichi.jpeg' },
        { id: 2, rate: 30, mrp: 50, quantity: '1 kg', name: 'Banana', image: './image/banana.jpeg' },
        { id: 3, rate: 80, mrp: 100, quantity: '1 kg', name: 'Apple', image: './image/apple.png' },
        { id: 4, rate: 30, mrp: 50, quantity: '1 kg', name: 'Guava', image: './image/guava.png' },
        { id: 5, rate: 50, mrp: 80, quantity: '1 kg', name: 'Mango', image: './image/mango.jpg' },
        { id: 6, rate: 230, mrp: 265, quantity: '4 peice', name: 'Kiwi', image: './image/kiwi.jpg' },
        { id: 7, rate: 105, mrp: 136, quantity: '1 kg', name: 'Orange', image: './image/orange.jpg' },
        { id: 8, rate: 80, mrp: 100, quantity: '500 gm', name: 'Chiku', image: './image/chiku.jpg' },
        { id: 9, rate: 200, mrp: 250, quantity: '1 kg', name: 'Pineapple', image: './image/pineapple.png' },
        { id: 10, rate: 150, mrp: 165, quantity: '1 kg', name: 'Pomegranate', image: './image/pomegranate.png' },
        { id: 11, rate: 40, mrp: 50, quantity: '1 kg', name: 'Water Melon', image: './image/watermelon.jpg' },
        { id: 12, rate: 221, mrp: 252, quantity: '1 kg', name: 'Avocados', image: './image/avocado.jpg' }
    ]);

    const handleClick = item_id => {
        console.log("Active", active );
        const index = active.findIndex(x => x.id === item_id);
        if (index === -1) {
            const data = card.find(x => x.id === item_id);
            let dataAra = active;
            dataAra.push(data);
            setActive(dataAra);
            store.dispatch(addToCart({...data, qty: 1}));
        }
    };


    return (
        <Container className="mt-5">
            <Row xs={1} md={2} className="g-4">
                {card.map(item => <ShoppingItem 
                    key={`${item.id}`}
                    item={item}
                    onButtonClick={handleClick}
                 />)}
            </Row>
        </Container>
    )
}

export default Shopping;