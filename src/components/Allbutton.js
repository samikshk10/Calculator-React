import React, { useState } from 'react'
import "../assets/css/calculator.css";
import ButtonNumber from './ButtonNumber';
import Buttonoperation from './Buttonoperation';
import Result from './Result';

export default function Allbutton() {
    
     const[res, setres]= useState(0);
     const arr=[];
     const numHandler=(button)=>{
       
         switch(button){
            case "AC":
                setres(0);
                break;

        case "x":
            arr.push("*");
            setres(res+"*")
            break;

            case "÷":
                arr.push("*");
                setres(res+"/");

                break;
                case "=":
                    console.log(res);
                    try{

                        setres(eval(res));
                        
                    }
                    catch(error){
                        setres(error);
                    }
                    break; 

                    case "+/-":
                            setres(eval(res)*-1)
                        
                        break;
             default:
                if(res==0)
                {
                setres(button);
                }
                else{
                    setres(res+""+button);
                }
           
         }
     }

    return (
        <div>
            <Result resultvalue={res}/>
        <div className='calculator__buttons'>
            <div className='buttons__all'>
                <ButtonNumber value={"AC"} clickHandler={numHandler} />
                <ButtonNumber value={"+/-"} clickHandler={numHandler}/>
                <ButtonNumber value={"%"} clickHandler={numHandler}/>
                <Buttonoperation value={"÷"} clickHandler={numHandler}/>
                <ButtonNumber value={7} clickHandler={numHandler} />
                <ButtonNumber value={8} clickHandler={numHandler} />
                <ButtonNumber value={9} clickHandler={numHandler} />
                <Buttonoperation value={"x"} clickHandler={numHandler}/>
                <ButtonNumber value={4} clickHandler={numHandler} />
                <ButtonNumber value={5} clickHandler={numHandler} />
                <ButtonNumber value={6} clickHandler={numHandler} />
                <Buttonoperation value={"-"} clickHandler={numHandler} />
                <ButtonNumber value={1} clickHandler={numHandler} />
                <ButtonNumber value={2} clickHandler={numHandler} />
                <ButtonNumber value={3} clickHandler={numHandler} />
                <Buttonoperation value={"+"} clickHandler={numHandler}/>
                <ButtonNumber value={0}  clickHandler={numHandler} />
                <ButtonNumber/>
                <ButtonNumber value="." clickHandler={numHandler}/>
                <Buttonoperation value="=" clickHandler={numHandler}/>
            </div>
    </div>

        </div>
    )
}
