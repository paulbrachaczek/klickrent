import React from 'react';
import './button.styles.scss';

const Button = ({children, isCloseButton, ...otherProps}) => (
    <button className={`${isCloseButton ? 'a-close-button' : 'a-button'}`} {...otherProps}>
        {children}
    </button>
);

export default Button;