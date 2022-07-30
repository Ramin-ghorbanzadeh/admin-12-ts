import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { addToCart, removeFromCart } from '../../Slices/CartSlice';

const Cart: React.FC = () => {
    const carts = useSelector((state: RootState) => state.cart.value)
    const dispatch = useDispatch()
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const calcTotalPrice = () => {
        let tPrice: number = 0;
        for (let i = 0; i < carts.length; i++) {
            const product = carts[i];
            tPrice += product.productPrice * product.Count;
        }
        setTotalPrice(tPrice);
    }
    useEffect(calcTotalPrice);
    return (
        <table className="table w-1/2">
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>Price</th>
                    <th>count</th>
                    <th>#</th>
                </tr>
            </thead>
            <tbody>
                {carts.map((item) =>
                    <tr>
                        <td>{item.productId}</td>
                        <td>{item.productName}</td>
                        <td>{item.productPrice}$</td>
                        <td>{item.Count}</td>
                        <td>
                            <button
                                className="btn btn-error"
                                onClick={() => dispatch(removeFromCart(item.productId))}
                            >
                                remove
                            </button>
                            <button
                                className="btn btn-success"
                                onClick={() => dispatch(addToCart(item))}
                            >
                                add
                            </button>
                        </td>
                    </tr>
                )}
            </tbody>
            <tfoot>
                <h3>total price : {totalPrice}$</h3>
            </tfoot>
        </table>
    )
}

export default Cart;