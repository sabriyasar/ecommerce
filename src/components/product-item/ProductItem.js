import React, {useContext} from "react"
import {useDispatch, useSelector} from "react-redux"
import {addProductToCart} from "../../redux/products/products.slice"
import {Link} from "react-router-dom"
import {Context} from "../../context/context"

export function ProductItem({product}) {
    const {cart} = useSelector(state => state.product)
    const contextId = useContext(Context)
    const isCart = !!cart.find(el => el.id === product.id)
    const dispatch = useDispatch()

    const addToCart = (event) => {
        event.preventDefault()
        dispatch(addProductToCart(product))
    }

    const clickHandler = (productId) => {
        contextId.id = productId
    }

    return (
        <Link to={`/products/${product.id}`} onClick={() => clickHandler(product.id)} className='w-[180px] h-[302px] shadow-md mt-[10px] border relative rounded-lg productItem transition-all duration-300 sm:mr-[5px] sm:ml-[5px]'>
            <img className='w-[160px] m-auto mt-[20px]' src={product.image}/>
            <div className='text-[#2A59FE] text-l absolute left-4 right-0 top-[135px] flex justify-between items-center'>{product.price}₺</div>
            <div className='absolute left-0 right-0 bottom-[95px] flex justify-between items-center'>
                <span className='ml-4 text-l'>{product.name}</span>
            </div>
            <div className='absolute left-0 right-0 top-[220px] text-center'>
            <button onClick={addToCart} disabled={isCart} className={`w-full bg-[#2A59FE] mt-8 text-md rounded-md text-white transition px-[35px] py-[5px] sm:text-lg md:w-fit`}>
            <p>Add to Cart</p>
                </button>
                </div>    
        </Link>
    )
}
