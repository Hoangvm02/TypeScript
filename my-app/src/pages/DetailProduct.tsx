import React from 'react'
import { ProductType } from '../types/product';
type Props = {
    data: ProductType[];
}
const DetailProduct = (props: Props) => {
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
       {props.data && props.data.map((item, index) => {
        return (
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
        <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">{item.name}</p>
        <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2"></h1>
        </div>
        <p className="text-2xl mt-6 mb-4">{item.price}</p>
        <p className="text-2xl mt-6 mb-4"></p>
        <button  className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
        Add to cart
        </button>
  </div>
)
})}
</div>
    
  )
}

export default DetailProduct