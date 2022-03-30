import { useForm, SubmitHandler } from "react-hook-form";
import {ProductType} from "../types/product";
import { useNavigate } from 'react-router-dom';
type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormValues = {
    name: string,
    price: number,
};
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        props.onAdd(data);
        navigate('/admin/product');
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <span>Name:</span><br />
            <input type="text" {...register('name', { required: true, minLength: 5})}/> <br />
            {errors.name && errors.name.type === "required" && <span>Required</span>} <br />
            {errors.name && errors.name.type === "minLength" && <span>Min length</span>} 
            <span>Price:</span><br />
            <input type="number" {...register('price')}/> <br />
            <button>Add</button>
        </form>
    </div>
  )
}

export default ProductAdd