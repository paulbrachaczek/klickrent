import React, {useReducer, useState, useEffect, dispatch} from "react";
import Button from '../button/button.component';
import './modal.style.scss';
import axios from 'axios';
import Api from "../../api/api";
import CategoryList from '../category-list/category-list.component';

const fetchReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_START":
        return {
            ...state,
            isLoading: true,
            hasError: false,
        }
        case "FETCH_SUCCESS":
        return {
            ...state,
            isLoading: false,
            hasError: false,
            products: action.payload,
        }
        case "FETCH_FAILURE":
        return {
            ...state,
            isLoading: false,
            hasError: true,
        }
        default:
        throw new Error()
    }
}

const Modal = ({closeModal}) => {
    // const changeInput = (ev) => {
    //     setTimeout(()=> console.log(ev.target.value), 3000)
    // }
    const [{products, hasError, isLoading }, dispatch] = useReducer(fetchReducer, {
        products: [],
        isLoading: false,
        hasError: false
    });
    const [query, setQuery] = useState("");
    const api = new Api();
    const getProducts =  async (query, dispatch) => {
        dispatch({ type: "FETCH_START" });
        try {
            const results = await api.getProducts(`${query}`);
            dispatch({ type: "FETCH_SUCCESS", payload: results.data })
        } catch (err) {
            dispatch({ type: "FETCH_FAILURE" })
        }
    };
      

    useEffect(() => {
        const { cancel, token } = axios.CancelToken.source();
        const timeOutId = setTimeout(() => query.length > 3 ? getProducts(query, dispatch, token) : null, 1000);
        return () => cancel("Cancel query") || clearTimeout(timeOutId);
    }, [query]);

    return (
        <div className="m-modal">
            <div className="m-modal__container">
                <header className="m-modal__header">
                    <p>Direct request</p>
                    <Button isCloseButton onClick={() => closeModal()}>&#215;</Button>
                </header>
                <div>
                    <input type="text" onChange={event => setQuery(event.target.value)}/>   
                </div>
                <div className='m-modal__results'>
                    {hasError && <p>Something went wrong ...</p>}
                    {isLoading ? <p>Loading...</p>
                    : (
                        <ul>
                            {products.map(({groupId, name, products}) =>(
                                <li key={groupId}><CategoryList groupId={groupId} name={name} products={products}/></li>
                            ))} 
                        </ul>
                        )
                    }
                    
                </div>
            </div>  
            
            
        </div>
    )
}

export default Modal;