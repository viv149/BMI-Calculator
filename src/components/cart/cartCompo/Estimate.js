import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";


const Estimate = ({data, update}) => {
    const [subtotal, setSubTotal] = useState(250);
    const [shippingCost, setShippingCost] = useState(15);
    
    useEffect(() => {
        calculateTotal();
    }, [update]);

    const calculateTotal = () => {
        let total = 0;
        for(let i in data) {
            total += data[i].rate * data[i].qty;   
        }
        setSubTotal(total);
    }

    let total = subtotal + shippingCost;
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <p>Subtotal</p>
                        <p>{subtotal}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Shipping Cost</p>
                        <p>{shippingCost}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>Total</h4>
                        <h4>{total}</h4>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
export default Estimate;