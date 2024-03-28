import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button, Card } from 'react-bootstrap';
import React, { useState } from 'react';



function BMI() {

    const[height, setHeight] = useState('');
    const[weight, setWeight] = useState('');
    const[showResult, setShowResult] = useState();
    const[msgShow, setMsgShow] = useState();
    const[changeColor, setChangeColor] = useState();
    

    function getResult(e){
        e.preventDefault()
        let centiMeterIntoMtr = height/100;
        let squareOfHeight = Math.pow(centiMeterIntoMtr,2);
    
        let BMI = weight / squareOfHeight;

        BMI = BMI.toFixed(2);

        setShowResult(BMI);
        
        let msg;
        let colorCode;
            if (BMI < 18.50){
                msg = "Under Weight";
                colorCode = { color : "#7674db"};
            }
            else if(BMI >= 18.50 && BMI <= 24.90){
                msg = "Healthy Weight";
                colorCode = { color : "#4bb94e"};
            }
            else if(BMI >= 25.00 && BMI <= 29.90){
                msg = "Over Weight";
                colorCode = { color : "#f7b641"};
            }
            else if(BMI >= 30.00){
                msg = "Obesity";
                colorCode = { color : "#f15704"};
            }
        setMsgShow(msg);
        setChangeColor(colorCode);

      
    }
    
 
    

  return (
    <>
      <div className='container m-5'>
        <Card className='shadow p-5'>
            <div className='row align-item-center justify-content-center'>
                <div className='col-md-4'>
                    <h1>BMI Calculator</h1>
                    <p className="text-dark">Body Mass Index</p>
                    <form onSubmit={getResult}>                 
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">Height</InputGroup.Text>
                            <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" value={height} onChange={(e) => setHeight(e.target.value)} placeholder='CM'/>
                        </InputGroup>
                        
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">Weight</InputGroup.Text>
                            <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder='KG'/>
                        </InputGroup>
                        <Button type='submit'>Calculate</Button>
                    </form>  
                    <br/>
                    <br/>
                    <Card.Header className='result-view'>
                        <h3>BMI = {showResult} <span style={changeColor} className="msg-size">{msgShow}</span></h3>
                    </Card.Header>
                </div>
                <div className='col-md-6'>
                    <div>
                        <img src='image/bmi-image.jpg' className='w-100' alt='bmi'/>
                    </div>
                </div>
            </div>
        </Card>
       </div>
    </>
  );
}

export default BMI;