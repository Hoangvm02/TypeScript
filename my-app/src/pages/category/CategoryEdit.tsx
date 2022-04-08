import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { readC } from '../../api/category';
import { CategoryType } from '../../types/category';


type CategoryEditProps = {
  onUpdateC: (category: CategoryType) => void
}
type FormValue = {
  name: string
};
const CategoryEdit = (props: CategoryEditProps) => {
  const { id } = useParams();
  const {register, handleSubmit, formState: {errors}, reset} = useForm<FormValue>();
  const navigate = useNavigate();

  useEffect(() => {
    const getCategory = async () => {
        const { data } = await readC(id);
        reset(data.category);
    }
    getCategory();
}, []);

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
      props.onUpdateC(data);
      navigate('/admin/category');
      window.location.reload();
  } 
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">Name</label>
                <input  type="text" {...register('name')} className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
              </div>
        <button className="focus:outline-none mt-8 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" >Cập Nhật</button>
    </form>
  )
}

export default CategoryEdit