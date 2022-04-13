import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../types/product';
type Props = {
    data: ProductType[],
  }
const ListProduct = (props: Props) => {
  return (
    <div className="max-w-7xl m-auto text-center">
  <div className="bg-gray-50 dark:bg-gray-900 text-center lg:py-10 md:py-8 py-6">
    <p className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 dark:text-white leading-9 text-center text-gray-800">SẢN PHẨM</p>
  </div>
  <div className="py-6 lg:px-20 md:px-6 px-4">
    <hr className="w-full bg-gray-200 my-6" />
    
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
    {props.data && props.data.map((item, index) => {
      return (
      <div className="relative">
      <img className="w-full h-60" src={item.image} alt="A girl wearing dark blue suit and posing" />
     <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
        <button className="dark:bg-gray-800 dark:text-gray-300 font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
      </div>
      <Link to={`/products/${item._id}`}> <p className=" text-xl leading-5 hover: text-black-900 md:mt-6 mt-4">{item.name}</p></Link>
        <p className="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">{item.price}</p>
      </div>
      )
    })}
    </div>
    </div>
    </div>

  )
}

export default ListProduct