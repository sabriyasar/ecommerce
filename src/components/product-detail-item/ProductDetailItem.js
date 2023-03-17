import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {addProductToCart} from "../../redux/products/products.slice"

export function ProductDetailItem({product}) {
    const {cart} = useSelector(state => state.product)
    const isCart = !!cart.find(el => el.id === product.id)
    const dispatch = useDispatch()

    const addProduct = () => dispatch(addProductToCart(product))

    return (
        <>
            <div className='px-2 pb-6'>
                <div className='flex flex-col justify-center items-center lg:flex lg:flex-row lg:justify-between lg:items-start'>
                    <div className='w-full shadow-lg rounded-md flex justify-center items-center lg:w-2/4 sm:w-3/4 px-[20px] py-[85px]'>
                        <img className='w-3/4 lg:w-3/4' src={product.image} alt={product.name}/>
                    </div>
                    <div className='w-full pl-0 sm:w-3/4 lg:w-2/4 lg:pl-[30px]'>
                        <div>
                            <p className='font-regular text-xl mt-5 lg:mt-0 md:text-2xl'>{product.name}</p>
                            <p className='my-4 text-xl sm:text-2xl text-[#2A59FE]'>{product.price}₺</p>
                            <button
                                onClick={addProduct}
                                disabled={isCart}
                                className={`w-full bg-[#2A59FE] mt-8 text-md rounded-md text-white transition px-[230px] py-[15px] sm:text-lg md:w-fit`}
                            >
                                <span className='ml-2'>Add to Cart</span>
                            </button>
                            <p className='text-base mt-4 sm:text-lg'>{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
