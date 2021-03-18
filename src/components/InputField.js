import React from 'react';

const InputField = ({text, value, onChange}) =>{
  return (
    <div>
    <form>
    <span>{text}    </span>
    <input 
    value={value}
    onChange={onChange}/>
    </form>
    </div>
  )
}

export default InputField;