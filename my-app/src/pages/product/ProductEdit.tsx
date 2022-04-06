import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { listCategory } from '../../api/category'
import {read} from '../../api/product'
import { CategoryType } from '../../types/category'
import { ProductType } from '../../types/product'
import { NavLink } from 'react-router-dom'

type ProductEditProps = {
  onUpdate: (product: ProductType) => void
}
type FormValues = {
  name: string,
  price: number,
  image: string,
  category: string
};
const ProductEdit = (props: ProductEditProps) => {
    const {id} = useParams();
    const {register, handleSubmit, formState:{errors}, reset} = useForm<FormValues>();
    const navigate = useNavigate();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data);
        }
        getProduct();
    }, []);
    const [cate, setCate] = useState<CategoryType[]>([])
    useEffect(() => {
      const getCate = async () => {
        const {data} = await listCategory();
        setCate(data);
    }
    getCate()
    }, [])
    // console.log(cate);
    const [image, setImage] = useState("")
    const onSubmit: SubmitHandler<FormValues> = async (data) =>{
      const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        if(image){
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', CLOUDINARY_PRESET);
            const img = await axios.post(CLOUDINARY_API_URL, formData,{
                headers: {
                    "Content-Type": "application/form-data"
                  },
            });
            data.image = img.data.url;
        }
        props.onUpdate(data);
        console.log(data);
        navigate('/admin/product');
        window.location.reload();
    }
  return (

   <div className="min-h-full">
  <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
          <div>
           <label className="font-bold">Danh mục</label>
            <select {...register('category')} className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                {cate && cate.map((item) => {
                return <option value={item._id}>{item.name}</option>
                })}
            </select>
          </div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Name</label>
                <input  type="text" {...register('name')} className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
              </div>
              
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">PRICE</label>
                <input type="number"  {...register('price')}  autoComplete="email" className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
              </div>
              <div className="col-span-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Cover photo
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <img className="w-60" src="${data.img}" />
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span>Upload a file</span>
                          <input onChange={(e) => {setImage(e.target.files[0])}} id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        </form>
    </div>            
  </div>   
</div>

  )
}

export default ProductEdit