import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from '../types/product';

const DetailProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProducts(data);
    }
    getProduct();
  }, []);
  // console.log(products);
  console.log(id);
  console.log(products);


    
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
    <div className="xl:w-2/6 lg:w-3/5 w-80 md:block hidden">
      <img className="w-full h-96" src="https://i.ibb.co/znBmcWV/Rectangle-37-1.png" alt="A girl Posing Image" />
    </div>
  <div className="md:hidden">
    <img className="w-full" alt="image of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" />
    <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
      <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src={products.image} />
      <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src={products.image} />
      <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src={products.image} />
      <img alt="image-tag-one" className="md:w-48 md:h-48 w-full" src={products.image} />
    </div>
  </div>
  <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
    <div className="border-b border-gray-200 pb-6">
      <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">{products.name}</p>
      <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">{products.name}</h1>
    </div>
    <p className="text-2xl mt-6 mb-4">{products.desc}</p>
    <p className="text-2xl mt-6 mb-4">{products.price}</p>
    <input type="number" id="inputValue" className="border-4 bg-black-200 mb-4" />
    <button data-id="${product.id}" id="btnAddToCart" className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
      Add to cart
    </button>
  </div>
</div>
  )
}

export default DetailProduct