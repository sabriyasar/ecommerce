import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {toggleBtnCart} from "../../redux/products/products.slice"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'
import {CartShopping} from "../cart-shopping/CartShopping"
import {Search} from "../search/Search"

export function Header() {
    const {cart, btnCart} = useSelector(state => state.product)
    const dispatch = useDispatch()
    const toggleCart = () => dispatch(toggleBtnCart(true))
    

    btnCart
        ? document.querySelector('body').style.overflow = 'hidden'
        : document.querySelector('body').style.overflow = 'visible'

    return (
        <header className='w-screen bg-[#2A59FE] fixed z-10 top-0 h-[50px]'>
            <div className='container text-lg flex justify-between items-center text-white h-[50px] max-w-[1240px] m-auto px-2'>
                <a href='/' className='text-white'>Eteration</a>
                <Search />
                <ul className='flex justify-between'>
                    <button className='px-[70px] py-1 rounded transition relative' onClick={toggleCart}>
                        <FontAwesomeIcon icon={faCartShopping} className='text-xl'/>
                        <span className='absolute right-[45px] top-0 bg-[#00a046] text-[12px] h-[10px] flex items-center justify-center px-[7px] py-[10px] rounded-full'>{cart.length}</span>
                    </button>
                    <li className='mr-2 px-[1px] py-1 rounded transition cursor-not-allowed md:mr-4'>
                        <FontAwesomeIcon icon={faUser} className='text-xl'/>
                    </li>
                    <p className='mr-2 px-[1px] py-1 rounded transition cursor-not-allowed md:mr-4'>Sabri</p>
                </ul>
            </div>
            {btnCart && <CartShopping cart={cart}/>}
        </header>
    )
}
