import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {signup} from '../api/auth'

type FormValues = {
    name: string,
    email: string,
    password: string
};
const Signup = () => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> =  (data) => {
        signup(data);
      //  console.log(data);
       
        navigate("/signin");
    }
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center">
        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg1.svg" alt="logo" />
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <div>
            <label id="name" className="text-sm font-medium leading-none text-gray-800">
              Name
            </label>
            <input aria-labelledby="name" type="text" {...register('name', { required: true, minLength: 5})} className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
            {errors.name && errors.name.type === "required" && <span>Required</span>}
            {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
          </div>
          <div>
            <label id="email" className="text-sm font-medium leading-none text-gray-800">
              Email
            </label>
            <input aria-labelledby="email" type="email" {...register('email', { required: true})} className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
          </div>
          <div className="mt-6  w-full">
            <label htmlFor="pass"  className="text-sm font-medium leading-none text-gray-800">
              Password
            </label>
            <div className="relative flex items-center justify-center">
              <input id="pass" type="password" {...register('password')} className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
              
            </div>
          </div>
          <div className="mt-8">
            <button role="button" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">ĐĂNG KÝ</button>
          </div>
        </div>
        </div>
      </form>

  )
}

export default Signup