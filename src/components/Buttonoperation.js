import React from 'react'

export default function Buttonoperation({value,clickHandler}) {
  return (
    <button className='btn btn-operation' onClick={e=>{clickHandler(value)}} >{value}</button>
    );    
}
