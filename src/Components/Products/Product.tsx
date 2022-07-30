import { CartItem } from "../../Slices/CartSlice";
import type { RootState } from '../../app/store'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './../../Slices/CartSlice';
import { useEffect, useState } from "react";

const Product: React.FC<CartItem> = ({ productId, productName, productPrice, Count }) => {
    const carts = useSelector((state: RootState) => state.cart.value)
    const dispatch = useDispatch()
    const [storeIndex, setStoreIndex] = useState(-1);
    const [storeCount, setStoreCount] = useState(0);
    useEffect(() => {
        const index = carts.findIndex(function (item: CartItem) {
            return item.productId === productId;
        });
        setStoreIndex(index);
        if(index>=0)
            setStoreCount(carts[index].Count)
    })
    const add = () => {
        const data: CartItem = { productId, productName, productPrice, Count };
        dispatch(addToCart(data));

    }

    return (
        <div className="w-40 flex flex-col items-center  shadow-md border-2 border-sky-300 rounded-md m-10 p-4">
            <h1>{productName}</h1>
            <h4>{productId}</h4>
            <h5>{productPrice}</h5>
            {(storeIndex < 0) ?
                <button className="btn" onClick={add}>Add</button>
                :
                <div className="flex justify-center items-center">
                    <button className="btn btn-error" onClick={() => dispatch(removeFromCart(productId))}>-</button>
                    <span className="w-4 block mx-3 text-center">{storeCount}</span>
                    <button className="btn" onClick={add}>+</button>
                </div>
            }
        </div>
    )
}
export default Product;