import React, {useState} from "react"
import { Sort } from "../sort/Sort"
import {Category} from "./Category"
import {Model} from "./Model"

export function ProductFilters() {
    const [toggleFilters, setToggleFilters] = useState(false)

    const toggleFiltersBtn = () => {
        setToggleFilters(prev => !prev)
    }

    return (
        <>
            <button className='block border px-4 border-black font-medium py-1 mb-2 xl:hidden' onClick={toggleFiltersBtn}>Filters</button>
            <div className={`${toggleFilters ? 'lg:flex lg:justify-between lg:w-full' : 'hidden'}  xl:block`}>
            <div className='mt-[20px] border-b pb-[15px] w-full'>
                    <p className='pb-[20px] text-lg font-medium'>Sort By</p>
                    <Sort />
                </div>
                <div className='mt-[20px] border-b pb-[15px] w-full'>
                    <p className='pb-[20px] text-lg font-medium'>Brands</p>
                    <Category />
                </div>
                <div className='mt-[20px] border-b pb-[15px] w-full'>
                    <p className='pb-[20px] text-lg font-medium'>Model</p>
                    <Model />
                </div>
            </div>
        </>
    )
}
