import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { listCategory } from '../../api/category';
import { CategoryType } from '../../types/category';



type CategoryAddProps = {
  onAddC: (category: CategoryType) => void
}
type FormValues = {
  name: string
};

const CategoryAdd = (props: CategoryAddProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
  const navigate = useNavigate();
  
  const [cate, setCate] = useState<CategoryType[]>([])
  useEffect(() => {
      const getCate = async () => {
          const {data} = await listCategory();
          setCate(data);
      }
      getCate()
  }, [])
  console.log(cate);
  const onSubmit: SubmitHandler<FormValues> =async (data) => {
    props.onAddC(data);
    navigate('/admin/category');
    window.location.reload();
  }
  return (
    <div><div className="min-h-full">
    <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
                Thêm mới
            </h1>
        </div>
    </header>
    <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                    <form id="formAddPost" onSubmit={handleSubmit(onSubmit)}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                        <div>
                        </div>
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Name</label>
                                        <input type="text" {...register('name', { required: true, minLength: 5 })} autoComplete="given-name" className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                                        {errors.name && errors.name.type === "required" && <span>Required</span>} <br />
                                        {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
                                    </div>
                                    <div className="col-span-6">
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    </main>
</div></div>
  )
}

export default CategoryAdd