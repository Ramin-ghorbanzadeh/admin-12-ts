import { CartItem } from "../../Slices/CartSlice";
import Product from "./Product";



const Products: React.FC = () => {
    const data: CartItem[] = [
        {
            productId: 1,
            productName: 'T-shirt',
            productPrice: 30,
            Count:1
        },
        {
            productId: 2,
            productName: 'Blue T-shirt',
            productPrice: 10,
            Count:1
        },
        {
            productId: 3,
            productName: 'Red T-shirt',
            productPrice: 10,
            Count:1
        }
    ]
    return (
        <div className="flex justify-center" >
            {data.map((item: CartItem) => <Product {...item} />)}
        </div>
    )
}
export default Products;