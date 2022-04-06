import React from 'react'
import { ProductType } from '../types/product'

type Props = {
  data: ProductType[],
}

const Product = (props: Props) => {
  return (
    <div className="max-w-7xl m-auto">
  <div className="bg-gray-50 dark:bg-gray-900 text-center lg:py-10 md:py-8 py-6">
    <p className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 dark:text-white leading-9 text-center text-gray-800">SẢN PHẨM</p>
  </div>
  <div className="py-6 lg:px-20 md:px-6 px-4">
    <hr className="w-full bg-gray-200 my-6" />
    <div className="flex justify-between items-center">
      <div className="flex space-x-3 justify-center items-center text-gray-800 dark:text-white">
        <img className="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-5-svg1.svg" alt="toggler" />
        <img className="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-5-svg1dark.svg" alt="toggler" />
        <p className="font-normal text-base leading-4 text-gray-800 dark:text-white">Filter</p>
      </div>
    </div>
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
    {props.data && props.data.map((item, index) => {
      return (
      <div className="relative">
        <div className="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50"><p className="text-xs leading-3 text-gray-800">New</p></div>
        <img className="w-full h-80" src={item.image} alt="A girl wearing dark blue suit and posing" />
        <p className="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">{item.name}</p>
        <p className="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">{item.price}</p>
        <p className="font-normal dark:text-gray-300 text-base leading-4 text-gray-600 mt-4">2 colours</p>
      </div>
      )
    })}
    </div>
    </div>
    </div>
  )
}

export default Product