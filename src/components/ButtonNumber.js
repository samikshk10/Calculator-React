import React from 'react'
function Button({value,clickHandler})
{
  
  return (
    <button onClick={e=>{clickHandler(value)}} className={value===0?"btn btn-number btn-zero" : "btn btn-number" }>{value}</button>
  );
};

export default Button;
