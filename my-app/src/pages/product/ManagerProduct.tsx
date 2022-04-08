import React, { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom'
import { listCategory } from '../../api/category'
import { CategoryType } from '../../types/category'
import { ProductType } from '../../types/product'

type ManagerProductProps = {
  data: ProductType[],
  onRemove: (_id: string) => void
}
// const [cate, setCate] = useState<CategoryType[]>([])


const ManagerProduct = (props: ManagerProductProps) => {
  const [cate, setCate] = useState<CategoryType[]>([])
    useEffect(() => {
      const getCate = async () => {
        const {data} = await listCategory();
        setCate(data);
    }
    getCate()
    }, [])
  return (
    <div className="w-11/12 mx-auto">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Quản lý sản phẩm
              </h2>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              <a href="/admin/product/add" className="sm:ml-3">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Thêm mới
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PRICE
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      DESC
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SỬA
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Xóa
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {props.data && props.data.map((item, index) => {
                    let name; 
                    for (let i = 0; i < cate.length; i++) {
                        if(item.category == cate[i]._id){
                            name = cate[i].name
                            // console.log(name);
                        }
                    } 
                      return (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {index + 1}
                          </td>
                          <div>
                        <div className="px-6 py-4 whitespace-nowrap">
                        </div>
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                          <img src={item.image} className="h-10 w-10 rounded-full" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                            {item.name}
                            </div>
                          </div>
                        </div>
                      </div>


                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {item.price}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {item.desc}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {name}
                            </span>
                          </td>
                          <td className="">
                            <NavLink className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to={`/admin/product/${item._id}/edit`}>Edit</NavLink>
                          </td>
                          <td>
                            <button onClick={() => props.onRemove(item._id)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ManagerProduct