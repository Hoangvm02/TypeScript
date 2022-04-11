import React from 'react'
import { ProductType } from '../types/product'

type Props = {
  data: ProductType[],
}

const Product = (props: Props) => {
  return (
    <div className="bg-white">
    <div>
      <div className="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
        <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
          <div className="px-4 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <button type="button" className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form className="mt-4 border-t border-gray-200">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="font-medium text-gray-900 px-2 py-3">
              <li>
                <a href="#" className="block px-2 py-3"> Totes </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3"> Backpacks </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3"> Travel Bags </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3"> Hip Bags </a>
              </li>
              <li>
                <a href="#" className="block px-2 py-3"> Laptop Sleeves </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">New Arrivals</h1>
          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <div>
                <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                  Sort
                  <svg className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
              </div>
            </div>
            <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
              <span className="sr-only">View grid</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button type="button" className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden">
              <span className="sr-only">Filters</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          <h2 id="products-heading" className="sr-only">Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
            <form className="hidden lg:block">
              <h3 className="sr-only">Categories</h3>
              <ul role="list" className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                <li>
                  <a href="#"> Totes </a>
                </li>
                <li>
                  <a href="#"> Backpacks </a>
                </li>
                <li>
                  <a href="#"> Travel Bags </a>
                </li>
                <li>
                  <a href="#"> Hip Bags </a>
                </li>
                <li>
                  <a href="#"> Laptop Sleeves </a>
                </li>
              </ul>
            </form>
            <div className="lg:col-span-3">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full"> 
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
    {props.data && props.data.map((item, index) => {
      return (
      <div className="relative">
        <div className="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50"><p className="text-xs leading-3 text-gray-800">New</p></div>
        <img className="w-100 h-50" src={item.image} alt="A girl wearing dark blue suit and posing" />
        <p className="font-normal dark:text-white text-xl leading-5 text-gray-800 md:mt-6 mt-4">{item.name}</p>
        <p className="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">{item.price}</p>
      </div>
      )
    })}
    </div></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
  


   
  )
}

export default Product