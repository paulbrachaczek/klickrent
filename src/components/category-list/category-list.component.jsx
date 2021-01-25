import React from 'react';
import './category-list.style.scss';

const CategoryList = ({groupId, name, products}) => {
    return (
        <div className="m-category">
            <p>{name}</p>
            <ul>
                {products.map(({name, typeId}) => (
                    <li key={typeId}>{name}</li>
                ))}
            </ul>    
        </div>
    )
}

export default CategoryList;