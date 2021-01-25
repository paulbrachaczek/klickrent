import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, type, ...other}) => (
    <div className="m-input">
        <input type={type} onChange={handleChange} {...other}></input>
    </div>
)

export default FormInput;