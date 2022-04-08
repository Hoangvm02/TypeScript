import React from 'react'

const Cart = () => {
  return (
    <div className="max-w-5xl mx-auto mt-40 mb-56">
  <main>
    <div className="flex flex-col mt-10">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        </div></div></div></main><table>
  </table><table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ẢNH
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          GIÁ
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Số Lượng
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          TĂNG
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          GIẢM
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          TỔNG GIÁ
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Xóa
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <img className="h-10 w-10 rounded-full"  />
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="max-w-full px-2 text-xs font-semibold">
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          </span>
        </td>
        <td className="px-2 py-2 whitespace-nowrap">
          <input type="text" className="border w-10 text-center"  />
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button data-id="${item.id}" className="btn btn-increase rounded-full text-2xl">+</button>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button data-id="${item.id}" className="btn btn-decrease py-1 px-1 rounded-full text-2xl">-</button>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          </span>
        </td>
        <td>
          <button data-id="${item.id}" className="btn btn-remove bg-red-500 text-white inline-block py-1 px-1 rounded">XÓA</button>
        </td>
      </tr>
    </tbody>
  </table>
  <table className="mt-16">
    <tbody><tr>
        <th scope="col" className=" px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Tổng Giá
        </th>
      </tr>
    </tbody><tbody>
      <tr>
        <td>
          <input id="price" name="price" type="price" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
        </td>
        <td>
          <a href="/checkouts"><button className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">Thanh Toán</button></a>
        </td>
      </tr>
    </tbody>
  </table>
</div>

  )
}

export default Cart